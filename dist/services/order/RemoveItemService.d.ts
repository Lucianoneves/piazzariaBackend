interface ItemRequest {
    item_id: string;
}
declare class RemoveItemService {
    execute({ item_id }: ItemRequest): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order_id: string;
        product_id: string;
        amount: number;
    }>;
}
export { RemoveItemService };
//# sourceMappingURL=RemoveItemService.d.ts.map