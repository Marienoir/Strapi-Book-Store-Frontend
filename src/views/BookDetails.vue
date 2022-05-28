<template>
  <div class="books">
    <div class="card">
      <img
        v-if="book.attributes.Image"
        :src="`http://localhost:1337${book.attributes.Image.data.attributes.url}`"
      />
      <img v-else :src="Image" />
      <div class="card-desc">
        <h3 class="title">{{ selectedBooks }}</h3>
        <!-- <p class="descrxxtedBooks.attributes.publishedAt  }}</h4> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Book-Details",
  data() {
    return {
      image: "http://localhost:1337/uploads/2_2_5e6d9e80c1.png",
    };
  },
  // mounted() {
  //   this.getAllBooks();
  // },
  methods: {
    ...mapActions(["getBookById"]),
  },
  computed: {
    ...mapGetters(["getBookId"]),
    selectedBooks() {
      const id = this.$route.params.id;
      const selectedBooks = this.getBookId(id);
      console.log(this.getBookId);
      return selectedBooks;
    },
  },
};
</script>
<style scoped>
.card {
  max-width: 80vw;
  margin: 50px auto;
  background: rgb(233, 233, 240);
  padding: 30px;
  flex-direction: row;
}
img {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
}
h3 {
  font-size: 25px;
  font-weight: bold;
}
h4 {
  font-size: 15px;
}
button {
  padding: 15px;
  background: blue;
  border: none;
  color: #fff;
  width: 100%;
}
.card-desc {
  margin: 0px 50px;
}
.title,
.author {
  padding: 5px;
}
</style>
