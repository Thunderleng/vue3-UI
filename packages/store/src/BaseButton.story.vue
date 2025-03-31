<script setup>
import { ref } from "vue";
import { logEvent } from "histoire/client";
import { Button } from "@zencold/content";

const text = ref("Click me");
</script>

<template>
  <Story>
    <Button @click="logEvent('click', $event)">
      {{ text }}
    </Button>

    <template #controls>
      <HstText title="default slot" v-model="text" />
    </template>
  </Story>
</template>
