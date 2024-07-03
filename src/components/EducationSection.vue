<template>
  <div class="container">
    <div class="row">
           <h1 class="education">Education</h1>
            <div class="row gap-2 justify-content-center" v-if="education?.length">
            <Card v-for="product in education" :key="product.id" id="card">
                <template #cardHeader>
                    <img :src="product.imageURL" :alt="product.degree" loading="lazy" class="img-fluid">
                </template>
                <template #cardBody>
                    <h5 class="card-title">{{ product.school }}
                    </h5>
                    <p class="shadow">{{ product.degree }}</p>
                    <p class="lead"> Year of graduation: {{ product.graduation_year }}</p>
                    <p> {{ product.location }}</p>
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
    // beforeCreate(){
    //    alert("Before create");
    // },
    // created(){ 
    //     alert("Created")
    // },
    // beforeMount(){
    //     alert("Before mount")
    // },
    mounted() {
        this.$store.dispatch('fetchEducation')
    },
    // updated(){

    // },
    // unmounted(){
    //     alert("unmounted")
    // }
}
</script>

<style scoped>
h1{
    color: #51c4df;
}
.education{
    color: white;
    text-shadow: 4px 4px 6px #51c4df;
    font-size: 3.5rem;
    text-decoration: underline;
    padding-bottom: 2rem;
}
.container{
    margin-top: 100px;
}
a{
    background-image: linear-gradient(to right, #002231, #51c4df);
    color: #51c4df;
    width: 50%;
    font-size: 1.5rem;
    transition: width 2s;
}
button:hover{
    color: white;
    width: 300px;
}
img{
    width: 400px;
    height: 400px;
}
.shadow{
    text-shadow: 4px 4px 6px #51c4df;
    font-size: 2rem;
    text-decoration: underline;
    padding-bottom: 2rem;
}
#card{
    border: 5px solid #51c4df;
   border-radius: 15px;
   margin-inline: 80px;
}
@media screen and (max-width: 600px) {
  #app{
    display: block;
   }
}

</style>
