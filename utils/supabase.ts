
import { createClient } from '@supabase/supabase-js';

const bucket = 'rufai-next.js-first-e-commence-bucket'

// creating a supabase instance
export const supabaseBucket = createClient(
    process.env.SUPABASE_URL as string,
    process.env.SUPABASE_KEY as string,
);

// function to upload images
export const uploadImage = async (image: File) => { 
    const timestamp = Date.now();
    // name of image
    const newName = `${timestamp}-${image.name}`;

    //data is what we get when we pass the newName and image parameter
    const { data } = await supabaseBucket.storage.from(bucket).upload(newName, image, { cacheControl: '2600' })
    if (!data) {
        throw new Error('Image upload failed')
    }
    return supabaseBucket.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};

export const removeImageFromSupabase = async (url: string) => { 
    const imageName = url.split('/').pop(); // splitting the url to get the last / ie the actual name
    if (!imageName) throw new Error('Invaild image');
    return supabaseBucket.storage.from(bucket).remove([imageName]);
};
