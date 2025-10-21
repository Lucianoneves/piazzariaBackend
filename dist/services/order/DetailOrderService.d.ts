interface DetailRequest {
    order_id: string;
}
declare class DetailOrderService {
    execute({ order_id }: DetailRequest): Promise<({
        product: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            price: number;
            description: string;
            category_id: string;
            banner: string;
        };
        order: {
            name: string | null;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            table: number;
            draft: boolean;
            status: boolean;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order_id: string;
        product_id: string;
        amount: number;
    })[]>;
}
export { DetailOrderService };
//# sourceMappingURL=DetailOrderService.d.ts.map