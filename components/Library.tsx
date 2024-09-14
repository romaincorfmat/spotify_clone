"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import MediaItem from "./MediaItem";

interface LibraryProps {
	songs: Song[];
}

const Library = ({ songs }: LibraryProps) => {
	const authModal = useAuthModal();
	const uploadModal = useUploadModal();
	const { user } = useUser();

	const onClick = () => {
		// if no user logged in, open auth modal when user want to upload song to the library
		if (!user) {
			return authModal.onOpen();
		}
		//handle upload
		//TODO: Check for subscription before uploading
		return uploadModal.onOpen();
	};

	return (
		<div className="fle flex-col ">
			<div className="flex items-center justify-between  px-5 pt-4">
				<div className="inline-flex items-center gap-x-2">
					<TbPlaylist
						size={26}
						className="text-neutral-400"
					/>
					<p className="text-neutral-400 font-medium text-md">
						Your Library
					</p>
				</div>
				<AiOutlinePlus
					size={20}
					onClick={onClick}
					className="text-neutral-400 cursor-pointer hover:text-white transition"
				/>
			</div>
			<div className="flex flex-col gap-y-2 mt-4 px-3">
				{songs.map((item) => (
					<MediaItem
						onClick={() => {}}
						key={item.id}
						data={item}
					/>
				))}
			</div>
		</div>
	);
};

export default Library;
