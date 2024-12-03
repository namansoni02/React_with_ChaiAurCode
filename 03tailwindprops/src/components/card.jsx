import React from 'react'


function Card() {

  return (
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-4">
<img class="w-24 h-24 rounded-full" src="https://m.media-amazon.com/images/I/71MGlGqoFWL.jpg" alt="" width="384" height="600"></img>
<div class="pt-6 space-y-4">
  <blockquote>
    <p class="text-lg">
      “Tailwind CSS is the only framework that I've seen scale
      on large teams. It’s easy to customize, adapts to any design,
      and the build size is tiny.”
    </p>
  </blockquote>
  <figcaption>
    <div>
      Sarah Dayan
    </div>
    <div>
      Staff Engineer, Algolia
    </div>
  </figcaption>
</div>
</figure>

  )
}

export default Card