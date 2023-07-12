import { FC, PropsWithChildren } from 'react';

export const Card: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="relative md:col-span-1 col-span-2 overflow-hidden w-full h-full rounded-xl">
            {children}
        </div>
    );
};
