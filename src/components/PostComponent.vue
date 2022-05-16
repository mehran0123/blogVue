<template>
  <div>
    <h1 class="font-bold text-3xl">
      Post Component
    </h1><br>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">POST API FORM</h2>
        </div>
        <form class="mt-8 space-y-6" @submit="submitData"  method="post">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="password" class="sr-only">Name</label>
              <input id="password" name="text" type="text"  v-model="post.name" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name">
            </div>
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="country_code" type="email" v-model="post.email" autocomplete="email-address" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
            </div>
            <div>
              <label for="country-code" class="sr-only">Count Code</label>
              <input id="country-code" name="country_code" type="text" v-model="post.country_code" autocomplete="country_code" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Country Code">
            </div>
            <div>
              <label for="mobile-number" class="sr-only">Number</label>
              <input id="mobile-number" name="mobile-number" type="number" v-model="post.number" autocomplete="mobile-number" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mobile Number">
            </div>
            <div>
              <label for="country-of-residence" class="sr-only">Country Of Residence</label>
              <input id="country-of-residence" name="country-of-residence" type="text" v-model="post.country_of_residence" autocomplete="country-of-residence" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Country of Residence">
            </div>
          </div>
          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
             Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name:'PostComponent',
  data(){
        return {
          post:{
            name:null,
            email:null,
            country_code:null,
            number:null,
            country_of_residence:null

          }
        }
  },methods :{
    submitData(e){
    //  console.warn(this.post)
      this.axios.post('http://127.0.0.1:8000/api/enquire-now',this.post).then((res) => {
          console.warn(res);
         // alert(res);
      });
      e.event.preventDefault();
      console.warn('Data', this.post);

    }
  }
}
</script>