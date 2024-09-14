import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getSongsByUserId = async ():Promise<Song[]> => {
const supabase = createServerComponentClient({
    cookies:cookies
})

//! Replace const {data:sessionData, error:sessionError} = await supabase.auth.getSession(); with this below to get rid of an eror

const {data:sessionData, error:sessionError} = await supabase.auth.getUser();

if(sessionError){
    console.log(sessionError.message);
    return [];
}


//! Replace this .eq('user_id',sessionData.session?.user.id) with that line below to get rid of an error
const { data, error} = await supabase
    .from('songs')
    .select('*')
    .eq('user_id',sessionData.user.id)
    .order('created_at',{ascending:false});

if(error){
    console.log(error.message);
}

return (data as any) || [];

}

export default getSongsByUserId;