<template>
  <div class="books">
    <div class="card">
      <div class="card-desc">
        <img :src="`http://localhost:1337${image}`" />
        <div>
          <h3>{{ bookById.Name }}</h3>
          <h5>By: {{ bookById.Author }}</h5>
          <h5>Published at: {{ bookById.publishedAt }}</h5>
        </div>
        <p>{{ bookById.Description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BookDetails",
  data() {
    return {
      image: [],
      bookById: [],
    };
  },
  async mounted() {
    const id = this.$route.params.id;
    await axios
      .get(`http://localhost:1337/api/books/${id}?populate=*`)
      .then((response) => {
        this.bookById = response.data.data.attributes;
        this.image = this.bookById.Image.data.attributes.url;
      });
  },
};
</script>
<style scoped>
.card {
  max-width: 80vw;
  margin: auto;
}
.card-title {
  display: flex;
  justify-content: space-around;
}
img {
  width: 20vw;
  height: 20vw;
}
h3 {
  font-size: 20px;
  color: #000;
}
h5 {
  font-size: 15px;
  font-style: italic;
  color: #716c69;
  margin: 5px !important;
}
p {
  font-size: 19px;
  color: #000;
  width: 50vw;
  padding-top: 20px;
  margin: auto;
  text-align: justify;
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
