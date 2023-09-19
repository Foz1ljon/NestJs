import { Builder } from "./models/builder.model";
import { CreateBuilderDto } from "./dto/create-builder.dto";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
export declare class BuilderService {
    private builderRepo;
    constructor(builderRepo: typeof Builder);
    createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder>;
    findAllBuilder(): Promise<Builder[]>;
    findById(id: number): Promise<Builder>;
    deleteById(id: number): Promise<number>;
    updateByID(id: number, updateBuilderDto: UpdateBuilderDto): Promise<Builder>;
}
