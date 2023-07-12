import { FC } from 'react';

export const ProjectBox: FC<{
    img: string;
    url: string;
    title: string;
    className?: string;
}> = ({ img, url, title, className }) => {
    return (
        <div
            className={`hover:shadow-md overflow-hidden ${
                className ?? 'col-span-1 lg:col-span-3'
            }`}
        >
            <a href={url} target="_blank" className="w-full h-full">
                <img src={img} alt={title} className="w-full h-full" />
            </a>
        </div>
    );
};
