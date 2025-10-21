interface ProductRequest {
    category_id: string;
}
declare class ListByCategoryService {
    execute({ category_id }: ProductRequest): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        description: string;
        category_id: string;
        banner: string;
    }[]>;
}
export { ListByCategoryService };
//# sourceMappingURL=ListByCategoryService.d.ts.map