<template>
  <footer class="footer">
    <div class="splitter container footer__inner">
      <span class="footer__name">&copy; 2021 MARCUS BILLMAN</span>
      <div class="splitter footer__links">
        <a class="footer__link" href="https://github.com/marcusbillman"
          >GitHub</a
        >
        <a class="footer__link" href="https://soundcloud.com/xfoxx37"
          >SoundCloud</a
        >
        <a class="footer__link" href="https://www.instagram.com/marcusbillman"
          >Instagram</a
        >
        <a class="footer__link" href="mailto:hello@marcusbillman.com">Email</a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/styles/breakpoints" as *;
@use "@/styles/colours" as *;

.footer {
  background: $white;
  margin-top: 20rem;
  padding: 4.8rem 0;
  &__inner {
    position: relative;
    justify-content: space-between;
    --splitter-spacing: 3.2rem;
    @include for-desktop-up {
      &::before {
        content: '';
        position: absolute;
        width: 363px;
        height: 226px;
        left: 1.6rem;
        bottom: calc(100% + 4.8rem);
        background-image: url('@/assets/squiggle-3.svg');
        pointer-events: none;
      }
    }
  }
  &__name {
    font-weight: 500;
  }
  &__link {
    display: block;
    --splitter-spacing: 1.6rem;
    @include for-desktop-up {
      --splitter-spacing: 3.2rem;
    }
  }
}
</style>
