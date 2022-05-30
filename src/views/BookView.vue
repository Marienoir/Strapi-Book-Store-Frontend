<template>
  <div class="row">
    <div class="cols" v-for="book in getBookStore" :key="book.key">
      <router-link :to="{ name: 'BookDetails', params: { id: book.id } }">
        <img
          :src="`http://localhost:1337${book.attributes.Image.data.attributes.url}`"
        />
        <h3>{{ book.attributes.Name }}</h3>
        <h5>
          By :
          {{ book.attributes.Author }}
        </h5>
        <h5>
          Published at: <br />
          {{ book.attributes.publishedAt }}
        </h5>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BookStore",
  data() {
    return {
      bookStore: [],
    };
  },
  mounted() {
    this.getAllBooks();
  },
  computed: {
    ...mapGetters(["getBookStore"]),
  },
  methods: {
    ...mapActions(["getAllBooks"]),
  },
};
</script>
<style scoped>
.row {
  margin: 0px 10px;
  display: flex;
  text-align: justify;
}
.cols {
  margin: 10px;
  width: 15vw;
  box-shadow: 4px 4px 4px #ae9f9f;
}
img {
  width: 100%;
  height: 150px;
}
a {
  text-decoration: none;
  color: #201c1c;
}
p {
  font-size: 15px;
  text-align: left;
}
h3,
h5 {
  margin: 10px 10px;
}
</style>
