interface ProductRequest {
    name: string;
    description: string;
    price: string;
    banner: string;
    categoryId: string;
}
declare class CreateProductService {
    static execute(arg0: {
        name: void;
        price: any;
        description: any;
        banner: string;
        category_id: any;
    }): void;
    execute({ name, price, description, banner, categoryId }: ProductRequest): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        description: string;
        category_id: string;
        banner: string;
    }>;
}
export { CreateProductService };
//# sourceMappingURL=CreateProductService.d.ts.map