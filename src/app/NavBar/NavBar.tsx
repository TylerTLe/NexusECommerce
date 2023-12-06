import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/NEXUS-LOGO.png'
import { redirect } from 'next/navigation';
import { getCart } from '@/lib/db/cart';
import ShoppingCartButton from './ShoppingCartButton';
import UserMenuButton from './UserMenuButton';
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

async function searchProducts(formData: FormData) {
    "use server";

    const searchQuery = formData.get('searchQuery')?.toString();

    if (!searchQuery) {
        redirect('/search?query=' + searchQuery);
    }
}

export default async function NavBar() {
    const cart = await getCart();
    const session = await getServerSession(authOptions);

  return (
    <div className='bg-base-100'>
        <div className='navbar max-w-7xl m-auto flex-col sm:flex-row gap-2'>
            <div className='flex-1'>
                <Link href='/' className='btn btn-ghost text-xl normal-case'>
                    <Image src={logo} alt='Nexus Logo' width={50} height={50} />
                    Nexus
                </Link>
            </div>
            <div className='flex-none gap-2'>
                <form action={searchProducts}>
                    <div className='form-control'>
                        <input 
                            name='searchQuery' 
                            type='text' 
                            placeholder='Search' 
                            className='input input-bordered w-full min-w-[100px]' />
                    </div>
                </form>
                <ShoppingCartButton cart={cart} />
                <UserMenuButton session={session}/>
            </div>
        </div>
    </div>
  )
}
