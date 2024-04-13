<template>
  <div class="flex">
    <div class="py-5 border-b pl-3 bg-redx gap-y-2 flex flex-col bg-bluex w-100 text-black dark:text-[#ccc]">
      <div class="text-3xl ">
        Search Jobs
      </div>

      <div>
        Query and visualize your Vercel usage, traffic, and more with the fields below.
      </div>
    </div>

    <div class="py-5 border-b pl-3 bg-redx gap-y-4 flex flex-col bg-redx w-100 items-end justify-center pr-7x">
      <div class="flex gap-2">
        <SettingsButton light size="large">
          Applied Jobs
        </SettingsButton>

        <SettingsButton light size="large">
          My saved jobs
        </SettingsButton>
      </div>
    </div>
  </div>

  <div class="h-full grid grid-cols-12 gap-6 pt-5">
    <div class="lg:block hidden col-span-2">
      <div class="sticky top-24">
        <ProfileDrawer />
      </div>
    </div>

    <div class="col-span-12 lg:col-span-9">
      <VSheet class="sticky top-20 align-center" color="background" height="80">
        <div class="flex flex-col h-100 w-100 align-center justify-center">
          <div class="w-100 flex align-center  bg-greenx">
            <VSpacer />

            <SettingsButton class="mr-1" height="40">
              Search
            </SettingsButton>

            <SettingsButton append-icon="i-mdi:chevron-down" class="mr-1" height="40" light>
              Sort by relevance
            </SettingsButton>

            <VBtnToggle
              class=" rounded-lg"
              density="compact"
              divided
              mandatory
              style="height: 40px"
              variant="outlined"
            >
              <VBtn>
                <VIcon icon="i-mdi-format-list-bulleted-square" />
              </VBtn>
              <VBtn>
                <VIcon icon="i-mdi-dots-grid" />
              </VBtn>
            </VBtnToggle>
          </div>
        </div>
      </VSheet>

      <div>
        <RouterView />
      </div>
    </div>
  </div>
</template>
