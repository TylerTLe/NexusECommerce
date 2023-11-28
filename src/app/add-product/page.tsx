import FormSubmitButton from '@/components/FormSubmitButton';
import prisma  from '@/lib/db/prisma';
import { redirect } from 'next/navigation';

export const metadata = {
    title: 'Add Product - Nexus',
};

async function addProduct(formData: FormData) {
    "use server";

    const name = formData.get('name')?.toString();
    const description = formData.get('description')?.toString();
    const imageUrl = formData.get('imageUrl')?.toString();
    const price = Number(formData.get('price') || 0);

    if (!name || !description || !imageUrl || !price) {
        throw Error('Missing required fields.');
    }

    await prisma.product.create({
        data: { name, description, imageUrl, price },
    });
    redirect("/");
}

export default function AddProductPage() {
    return (
        <div>
            <head>
            <link rel="icon" href="/src/app/favicon.ico" />
            </head>
            <h1 className="text-lg mb-3 font-bold">Add Product</h1>
            <form action={addProduct}>
            <input 
            required
            type="text"
            name="name"
            placeholder="Name" 
            className="input input-bordered w-full mb-3" />
            <textarea 
            required
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered w-full mb-3" />
            <input 
            required
            name="imageUrl"
            placeholder="Image URL"
            type="url"
            className="input input-bordered w-full mb-3" />
            <input 
            required
            type="number"
            name="price"
            placeholder="Price" 
            className="input input-bordered w-full mb-3" />
            <FormSubmitButton className="btn-block"> Add Product</FormSubmitButton>
            </form>
        </div>
    );
}

// 1:51:45