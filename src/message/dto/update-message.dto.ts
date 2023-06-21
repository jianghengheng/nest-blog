import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageDto } from './create-message.dto';

export class UpdateCommentDto extends PartialType(CreateMessageDto) {}
