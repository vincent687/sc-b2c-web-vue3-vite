<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Post } from '../../model/post'

defineProps<{ post: Post }>()

</script>

<template>
  <!--Container-->

  <!--Post Content-->

  <!--Lead Para-->

  <p class="py-6">
    {{ post.description }}
  </p>

  <!--Tags -->
  <div class="text-base md:text-sm text-gray-500 px-4 py-6">
    Tags:
    <a
      v-for="tag in post.tags"
      :key="tag.id"
      class="text-base md:text-sm text-green-500 no-underline hover:underline"
      >{{ tag.name }} .
    </a>
    <!-- <a href="#" class="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
      .
      <a href="#" class="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a> -->
  </div>

  <!--Next & Prev Links-->
  <div class="font-sans flex justify-between content-center px-4 pb-12">
    <div class="text-left">
      <span class="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span><br />
      <p
        ><a
          href="#"
          class="
            break-normal
            text-base
            md:text-sm
            text-green-500
            font-bold
            no-underline
            hover:underline
          "
          >Blog title</a
        ></p
      >
    </div>
    <div class="text-right">
      <span class="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span><br />
      <p
        ><a
          href="#"
          class="
            break-normal
            text-base
            md:text-sm
            text-green-500
            font-bold
            no-underline
            hover:underline
          "
          >Blog title</a
        ></p
      >
    </div>
  </div>
</template>
