import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <header>
            {/* Top nav */}
            <div className='flex items-center bg-amazon_blue'>
                <div>
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit='contain'
                        className='cursor-pointer'
                    />
                </div>
            </div>
            {/* Bottom nav */}
            <div>

            </div>
        </header>
    );
};

export default Header;