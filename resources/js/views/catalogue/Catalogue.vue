<template  >   
    <div>
        <!-- <form class="liste-search" @submit.prevent> -->
        <!-- <form  class="liste-search" @submit.prevent="fetchCatalogue">
            <input placeholder="Recherche dans cellier" type="search" v-model="searchQuery">
        </form> -->
        <form class="liste-search">
      <input
        placeholder="Recherche dans catalogue"
        type="search"
        v-model="searchQuery"
        @input="handleInput"
      />
    </form>
       


        <div class="card" v-for="bouteille in filteredCatalogue" :key="bouteille.id">
        <div class="card-body">
          <img :src="bouteille.image" alt="img-bouteille">
            <picture class="modal"><img :src="bouteille.image" alt="img"></picture>
            <div class="card-info">
                <div class="card-info-title">
                    <h3 class="card-title">{{bouteille.nom}}</h3>
                    <p class="card-subtitle">{{bouteille.description}} {{bouteille.format}}</p>
                    <p class="card-subtitle">{{bouteille.pays}}</p>
                </div>
                <div class="card-info-client">
                    <p class="card-count">{{bouteille.prix_saq}}$</p>
                    <div class="card-footer">
                      <button  class="btn" value="">Buy Now</button>   
                      
                </div>
                </div>  
            </div> 
  
        </div>
        
        
    </div>
           
    </div> 
    <!-- <div class="product-card" v-for="bouteille in catalogue" :key="bouteille.id"> --> 
</template>

<!-- ПОИСК без АФИШАЖа КАТАЛОГА ПРИ ПЕРВОЙ ЗАГРУЗКЕ с 2 буквами   -->
<script>
import axios from "axios";

export default {
  data() {
    return {
      catalogue: [],
      searchQuery: "",
      searchDelay: 500, // задержка перед отправкой запроса
      searchTimerId: null, // id таймера задержки
    };
  },
  methods: {
    fetchCatalogue() {
      axios
        .get("api/bouteille", { params: { query: this.searchQuery } })
        .then((response) => {
          console.log(response.data);
          this.catalogue = response.data.data;
        })
        .catch((error) => console.log(error));
    },
    handleInput() {
      if (this.searchQuery.length >= 2) {

        // сбрасываем таймер, чтобы не отправлять запрос с предыдущей задержкой
        clearTimeout(this.searchTimerId);
        // запускаем новый таймер, чтобы отправить запрос через searchDelay миллисекунд
        this.searchTimerId = setTimeout(() => {
          this.fetchCatalogue();
        }, this.searchDelay);
      }
    
    },
  },
  computed: {
    filteredCatalogue() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) {
        return this.catalogue;
      }
      return this.catalogue.filter((bouteille) => {
        return (
          bouteille.nom.toLowerCase().includes(query) ||
          bouteille.pays.toLowerCase().includes(query) ||
          bouteille.format.toLowerCase().includes(query) ||
          bouteille.prix_saq.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>

<!-- ПОИСК без АФИШАЖа КАТАЛОГА ПРИ ПЕРВОЙ ЗАГРУЗКЕ НО СРАЗУ ПОСЛЕ ОДНОЙ БУКВЫ, НУЖНО ПОСЛЕ 2-3  -->
<!-- <script>
import axios from "axios";

export default {
  data() {
    return {
      catalogue: [],
      searchQuery: "",
      searchDelay: 500, // задержка перед отправкой запроса
      searchTimerId: null, // id таймера задержки
    };
  },
  methods: {
    fetchCatalogue() {
      axios
        .get("api/bouteille", { params: { query: this.searchQuery } })
        .then((response) => {
          console.log(response.data);
          this.catalogue = response.data.data;
        })
        .catch((error) => console.log(error));
    },
    handleInput() {
      // сбрасываем таймер, чтобы не отправлять запрос с предыдущей задержкой
      clearTimeout(this.searchTimerId);
      // запускаем новый таймер, чтобы отправить запрос через searchDelay миллисекунд
      this.searchTimerId = setTimeout(() => {
        this.fetchCatalogue();
      }, this.searchDelay);
    },
  },
  computed: {
    filteredCatalogue() {
      const query = this.searchQuery.toLowerCase().trim();
      if (!query) {
        return this.catalogue;
      }
      return this.catalogue.filter((bouteille) => {
        return (
          bouteille.nom.toLowerCase().includes(query) ||
          bouteille.pays.toLowerCase().includes(query) ||
          bouteille.format.toLowerCase().includes(query) ||
          bouteille.prix_saq.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script> -->


<!-- ПОИСК без АФИШАЖа КАТАЛОГА ПРИ ПЕРВОЙ ЗАГРУЗКЕ НО ТРЕБУЮЩИЙ ENTER  -->
<!-- <script>
import axios from 'axios'

export default {
  data() {
    return {
      catalogue: [],
      searchQuery: ''
    }
  },
  methods: {
    fetchCatalogue() {
      axios.get('api/bouteille', { params: { query: this.searchQuery } })
        .then(response => {
          console.log(response.data)
          this.catalogue = response.data.data
        })
        .catch(error => console.log(error))
    }
  },
  computed: {
    filteredCatalogue() {
      const query = this.searchQuery.toLowerCase().trim()
      if (!query) {
        return this.catalogue
      }
      return this.catalogue.filter(bouteille => {
        return (
          bouteille.nom.toLowerCase().includes(query) ||
          bouteille.pays.toLowerCase().includes(query) ||
          bouteille.format.toLowerCase().includes(query)||
          bouteille.prix_saq.toLowerCase().includes(query)
        )
      })
    }
  }
}
</script> -->

<!-- ПОИСК С АФИШАЖЕМ КАТАЛОГА ПРИ ПЕРВОЙ ЗАГРУЗКЕ -->
<!-- <script>
import axios from 'axios'

export default {
  data() {
    return {
      catalogue: [],
      searchQuery: ''
    }
  },
  mounted() {
    this.fetchCatalogue()
  },
  methods: {
    fetchCatalogue() {
      axios.get('api/bouteille')
      .then(response => {
        console.log(response.data)
        this.catalogue = response.data.data
        })
        .catch(error => console.log(error))
      }
  },
  //При создании вычисляемого свойства в Vue компоненте, мы должны использовать ключевое слово computed, чтобы компилятор Vue понимал, что это свойство должно быть вычислено и кешировано. Таким образом, это не произвольное имя, а ключевое слово, используемое для определения вычисляемых свойств в Vue.js.
  computed: {
    filteredCatalogue() {
      const query = this.searchQuery.toLowerCase().trim()
      if (!query) {
        return this.catalogue
      }
      return this.catalogue.filter(bouteille => {
        return (
          bouteille.nom.toLowerCase().includes(query) ||
          bouteille.pays.toLowerCase().includes(query) ||
          bouteille.format.toLowerCase().includes(query)||
          bouteille.prix_saq.toLowerCase().includes(query)
          )
        })
      }
    }
}
</script> -->

<style scoped></style>
<!-- <script>
import axios from 'axios'
export default {

    // name: "Welcome"
    data() {
            return {
                catalogue: [],
                searchQuery: ''
            }
        },
        mounted(){
            this.fetchCatalogue()
        },
        methods: {
            fetchCatalogue(){
                axios.get('api/bouteille ')
               
                .then(response => {
                    console.log(response.data);
                    this.catalogue = response.data.data;
                    })
                
                .catch(error =>console.log(error))
            }
            
        }
        // console.log(response.data);

}
</script> -->