<template>
  <div class="row">
    <div class="cols" v-for="book in getBookStore" :key="book.key">
      <router-link :to="{ name: 'Book-Details', params: { id: book.id } }">
        <img
          v-if="book.attributes.Image"
          :src="`http://localhost:1337${book.attributes.Image.data.attributes.url}`"
        />
        <img v-else :src="Image" />
        <h3>{{ book.attributes.Name }}</h3>
        <!-- <p>{{ book.attributes.Description }}</p> -->
        <h5>
          By :
          {{ book.attributes.Author }}
        </h5>
        <h5>
          Published at: <br />
          {{ book.attributes.publishedAt }}
        </h5>
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Book-Store",
  data() {
    return {
      image: "http://localhost:1337/uploads/2_2_5e6d9e80c1.png",
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
  /* padding: 10px 5px; */
  margin: 10px;
  width: 15vw;
  /* background: rgb(29 33 81); */
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
  /* margin-bottom: 10px; */
  font-size: 15px;
  text-align: left;
  /* color: #fff; */
}
h3,
h5 {
  margin: 10px 10px;
}
</style>
