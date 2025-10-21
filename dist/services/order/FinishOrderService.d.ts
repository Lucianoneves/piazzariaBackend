interface OrderRequest {
    order_id: string;
}
declare class FinishOrderService {
    execute({ order_id }: OrderRequest): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        table: number;
        draft: boolean;
        status: boolean;
    }>;
}
export { FinishOrderService };
//# sourceMappingURL=FinishOrderService.d.ts.map