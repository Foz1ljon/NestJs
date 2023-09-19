import { BuilderService } from "./builder.service";
import { CreateBuilderDto } from "./dto/create-builder.dto";
import { Builder } from "./models/builder.model";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
export declare class BuilderController {
    private readonly builderService;
    constructor(builderService: BuilderService);
    createBuilder(createBuilderDto: CreateBuilderDto): Promise<Builder>;
    findAllBuilder(): Promise<Builder[]>;
    findById(id: string): Promise<Builder>;
    deleteById(id: string): Promise<number>;
    updateById(id: string, updateBuilderDto: UpdateBuilderDto): Promise<Builder>;
}
