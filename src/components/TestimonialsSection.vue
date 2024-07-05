<template>
  <div class="container">
    <div class="row">
      <h1 class="testimonials">Testimonials</h1>
    </div>
    <div class="row gap-3 justify-content-center" v-if="testimonials?.length">
      <Card v-for="value in testimonials" :key="value.id" id="card">
        <template #cardHeader>
          <img
            :src="value.profile"
            :alt="value.name"
            loading="lazy"
            class="img-fluid"
          />
        </template>
        <template #cardBody>
          <h2 class="card-title">{{ value.name }}</h2>
          <h4>{{ value.jobtitle }}</h4>
          <p>{{ value.review }}</p>
        </template>
      </Card>
    </div>
    <div v-else class="d-flex justify-content-center">
      <div class="spinner-border" role="status"></div>
    </div>
  </div>
</template>


<script>
import Card from "@/components/Card.vue";
export default {
  components: {
    Card,
  },
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },
};
</script>

<style scoped>
img {
  width: 5.5rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  margin-top: -2rem;
  border: 3px solid white;
}
#card {
  display: grid;
  gap: 2rem;
  background-color: transparent;
  border: 5px solid #51c4df;
  border-radius: 2rem;
}
.container {
  margin-top: 3rem;
}
.testimonials {
  color: white;
  text-shadow: 4px 4px 6px #51c4df;
  font-size: 3.5rem;
  text-decoration: underline;
  padding-bottom: 2rem;
}
p {
  color: white;
}
.card-title {
  color: white;
  text-shadow: 4px 4px 6px #51c4df;
  font-size: 2rem;
  padding-bottom: 2rem;
}
h4 {
  color: #51c4df;
  text-decoration: underline;
}
</style>
