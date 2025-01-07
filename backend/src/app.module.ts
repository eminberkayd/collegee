import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { NotificationsModule } from './notifications/notifications.module';
import { MessagesModule } from './messages/messages.module';
import { LikesModule } from './likes/likes.module';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule, CommentsModule, LikesModule, MessagesModule, NotificationsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
