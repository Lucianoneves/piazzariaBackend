interface OrderRequest {
    table: number;
    name: string | null;
}
declare class CreateOrderService {
    execute({ table, name }: OrderRequest): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        table: number;
        draft: boolean;
        status: boolean;
    }>;
}
export { CreateOrderService };
//# sourceMappingURL=CreateOrderService.d.ts.map