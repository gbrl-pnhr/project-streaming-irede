<template>
  <div :style="divStyle" class="bg-no-repeat bg-scroll bg-cover bg-center min-h-screen">
    <div class="bg-gradient-to-r from-black to-transparent h-screen">
      <div v-if="details.videos?.results[0].key !== undefined"
        class="flex flex-col p-4 md:flex-row md:gap-8 md:p-6 lg:gap-16 lg:p-16">
        <div>
          <div class="text-[32px] font-extrabold text-white md:text-[40px] lg:text-[48px]">
            <div> {{ details.title }} </div>
            <div> {{ details.name }} </div>
          </div>
          <div class="text-[16px] text-white md:text-[18px] lg:text-[24px]">
            <div v-if="$route.params.typemedia == 'tv'">
              <a> {{ details.first_air_date?.split("-")[0] }} | </a>
              <a style="color: rgb(20, 120, 0)">
                {{ details.number_of_episodes }} episódios
              </a>
            </div>
            <div v-else>
              <a> {{ details.release_date?.split("-")[0] }} | </a>
              <a style="color: rgb(20, 120, 0)">
                {{ details.runtime }} min
              </a>
            </div>
            <p>popularidade: {{ details.popularity }}</p>
            <br />
          </div>
          <div class="text-[16px] text-white text-justify md:text-[18px] lg:text-[24px]">
            {{ details.overview }} <br /><br />
          </div>
          <button-favorite :start-favorite="isFavorite" :text-is-favorite="'Esta Favoritado'"
            :text-not-favorite="'Ainda não favoritado'" @onClickFavoriteButton="onClickFavoriteButton" />
        </div>
        <div>
          <div class="flex justify-center m-4 md:mx-8 md:my-32 lg:mx-16 lg:my-44 lg:scale-125">
            <iframe class="rounded-xl transform transition duration-500 hover:scale-[1.1]" width="352" height="198"
              :src="`https://www.youtube.com/embed/${details.videos?.results[0].key}`" title="Apresentação"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
      <div v-else class="text-[48px] text-center text-blue-950 p-[150px] flex justify-center min-h-screen">
        Desculpe! <br />
        Pagina Não Encontrada
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { StreamingService } from './streaming.service';
import { Streamings } from '../models/streaming.model';
import { FavoritesService } from './Favorites/favorite.service';
export default {
  data() {
    return {
      details: {} as Streamings,
    }
  },
  mounted() {
    this.getSeries() 
  },
  computed: {
    serieService(): StreamingService {
      return new StreamingService();
    },
    localService(): FavoritesService {
      return new FavoritesService();
    },
    urlImage(): string {
      return 'https://image.tmdb.org/t/p/original' + (this.details.backdrop_path ?? this.details.backdrop_path)
    },
    divStyle(): any {
      return {
        backgroundImage: `url(${this.urlImage})`
      };
    },
    typemedia(): string {
      return String(this.$route.params.media)
    },
    streamId(): number {
      return Number(this.$route.params.id)
    },
    isFavorite(): boolean{
      return this.localService.getFavorite(Number(this.$route.params.id),String(this.$route.params.media))
    }
  },
  methods: {
    getSeries(page?: number) {
      this.serieService.streamings
        .subscribe({
          next: (response: any) => {
            this.details = response;
          }
        });
      this.serieService.getDetailStreaming(this.streamId, this.typemedia);
    },
    onClickFavoriteButton() {
      this.details.media_type = String(this.$route.params.media)
      if (this.isFavorite) {
        this.localService.removeFavorite(this.details);
      } else {
        this.localService.addFavorite(this.details);
      }
    },    
  },
}

</script>
