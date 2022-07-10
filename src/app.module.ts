import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/config';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ArtistModule } from './modules/artist/artist.module';
import { MisicianModule } from './modules/misician/misician.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { SongModule } from './modules/song/song.module';
import { PlaylistModule } from './modules/playlist/playlist.module';
import { MisicModule } from './modules/misic/misic.module';
import { AlbumModule } from './modules/album/album.module';
import { MusicianAlbumModule } from './modules/musician-album/musician-album.module';
import { NotificationModule } from './modules/notification/notification.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config.db as TypeOrmModule),
    AuthModule,
    ProfileModule,
    ArtistModule,
    MisicianModule,
    FavoriteModule,
    SongModule,
    PlaylistModule,
    MisicModule,
    AlbumModule,
    MusicianAlbumModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
