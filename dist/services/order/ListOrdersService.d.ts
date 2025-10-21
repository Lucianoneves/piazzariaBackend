declare class ListOrdersService {
    execute(): Promise<{
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        table: number;
        draft: boolean;
        status: boolean;
    }[]>;
}
export { ListOrdersService };
//# sourceMappingURL=ListOrdersService.d.ts.map