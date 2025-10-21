interface SendOrderRequest {
    order_id: string;
}
declare class SendOrderService {
    execute({ order_id }: SendOrderRequest): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        table: number;
        draft: boolean;
        status: boolean;
    }>;
}
export { SendOrderService };
//# sourceMappingURL=SendOrderService.d.ts.map