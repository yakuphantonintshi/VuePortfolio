<template>
  <div class="container">
    <div class="row">
           <h1 class="education">Education</h1>
            <div class="row gap-1 justify-content-center" v-if="education?.length">
            <Card v-for="product in education" :key="product.id" id="card">
                <template #cardHeader>
                    <img :src="product.imageURL" :alt="product.degree" loading="lazy" class="img-fluid">
                </template>
                <template #cardBody>
                    <h5 class="card-title">{{ product.school }}
                    </h5>
                    <p class="shadow"  id="lead">{{ product.degree }}</p>
                    <p> {{ product.graduation_year }}</p>
                    <!-- <p> <i class="bi bi-geo-alt"></i>: {{ product.location }}</p> -->
                    <a :href="product.certificate" class="btn btn-dark" target="_blank"><i class="bi bi-download"></i> Certificate</a>
                </template>
            </Card>
        </div>
        <div v-else class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
    components: {
        Card
    },
    computed: {
        education() {
            return this.$store.state.education
        }
    },
    mounted() {
        this.$store.dispatch('fetchEducation')
    },
}
</script>

<style scoped>
.card-title{
    height: 50px;
}
p{
    margin-block: 1.5rem;
}
#lead{
    text-decoration: underline;
}
:is(h5, p){
    color: white;
}
.education{
    color: white;
    text-shadow: 4px 4px 6px #51C4DF;
    font-size: 3.5rem;
    text-decoration: underline;
    padding-bottom: 2rem;
}
.container{
    background-color:#002231;
    margin-top: 5.5rem;
}
a{
    background-image: linear-gradient(to right, #002231, #51C4DF);
    color: white;
    font-size: 1rem;
    transition: width 2s;
    margin-top: 1.2rem;
}
/* button:hover{
    color: white;
    width: 300px;
} */

img{
    padding-top: 1rem;
    width: 200px;
    height: 200px;
}
.shadow{
    text-shadow: 4px 4px 6px #51C4DF;
    font-size: 1.3rem;
    text-decoration: underline;
}
#card{
    background-color: transparent;
   margin-inline: 50px;
   width: 300px;
}
#card:hover{
    border: .8px solid #51C4DF;
}
@media screen and (max-width: 600px) {
  #app{
    display: block;
   }
}
@media screen and (max-width: 400px) {
  #card{
    width: 300px;
   }
   .btn{
    width: 200px;
   }
   .img-fluid{
    width: 200px;
    height: 300px;
   }
}

</style>
