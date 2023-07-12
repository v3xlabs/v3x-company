import { FC, PropsWithChildren } from 'react';

export const LongCard: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="col-span-2 overflow-hidden w-full rounded-xl relative">
            {children}
        </div>
    );
};
