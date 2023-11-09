export interface cardIT {
    title: string;
    image: string;
    onclick?: () => void;
}

export interface animeIT {
    mal_id: number;
    title: string;
    images: {
        webp: {
            image_url: string
        }
    }
}


export interface TitleProps {
    title: string;
    link?: string;
}