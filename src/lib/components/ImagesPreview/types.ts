export interface ImagesPreviewListProps {
	images: string[];
}

export interface ImagePreviewModalProps {
	image: string;
}

export type ImageItem = {
	url: string;
	title?: string;
};
