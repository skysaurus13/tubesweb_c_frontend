<template>
    <v-main>
        <v-item-group>
            <v-container>
                <v-row>
                    <v-card :loading="loading" class="my-6 primary" max-width="374">
                        <v-img height="250" class="mt-5"
                            src="https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaXZlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></v-img>

                        <v-card-title style="justify-content: center" class="white mt-5"><strong> CEPAT
                            </strong></v-card-title>

                        <v-card-text class="white">
                            <div class=" text-subtitle-1 black--text">
                                NGanterWe memberikan layanan pengiriman paket secara CEPAT
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>
                    </v-card>

                    <v-card :loading="loading" class="ml-5 my-6 primary" max-width="374">
                        <v-img height="250" class="mt-5"
                            src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVsaXZlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"></v-img>

                        <v-card-title style="justify-content: center" class="mt-5 white"><strong> TEPAT
                            </strong></v-card-title>

                        <v-card-text class="white">
                            <div class="black--text text-subtitle-1">
                                NGanterWe memberikan layanan pengiriman paket secara TEPAT
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                    </v-card>

                    <v-card :loading="loading" class="ml-5 my-6 primary" max-width="374">
                        <v-img height="250" class="mt-5"
                            src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbGl2ZXJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></v-img>

                        <v-card-title style="justify-content: center" class="mt-5 white"><strong> AKURAT
                            </strong></v-card-title>

                        <v-card-text class="white">
                            <div class="black--text text-subtitle-1">
                                NGanterWe memberikan layanan pengiriman paket secara AKURAT
                            </div>
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                    </v-card>

                </v-row>
            </v-container>
        </v-item-group>
    </v-main>
</template>
<style>
.text {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
</style>
<script>
export default {
    data: () => ({
        loading: false,
        selection: 1,
    }),
};
</script>