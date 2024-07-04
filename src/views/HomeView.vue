<template>
  <div class="container-fluid">
    <section class="row vw-100 vh-100" id="landing">
      <LandingSection/>

    </section>
    <section class="row vw-100" id="about">
      <AboutSection/>

    </section>
    <section class="row vw-100" id="education">
      <EducationSection/>
    </section>

    <section class="row vw-100" id="resume">
      <SkillsSection/>
    </section>

    <section class="row vw-100" id="project">
      <ProjectsSection/>

    </section>
    <section class="row vw-100" id="testimonials">
    <TestimonialsSection/>
      
    </section>
    <section class="row vw-100" id="reachMe">
      <ReachMe/>
    </section>
    
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ReachMe from '@/components/ReachmeSection.vue'
export default {
  name: 'HomeView',
  components: {
    LandingSection,
    AboutSection,
    EducationSection,
    SkillsSection,
    ProjectsSection,
    TestimonialsSection,
    ReachMe
   
   
  }
}
</script>