import Photo from "./Photo";
import "../css/PhotoAlbum.css";
import PhotoToolBar from "./PhotoToolBar";
import { useState } from "react";
import PhotoUpload from "./PhotoUpload";

function PhotoAlbum() {
  const [uploadPhoto, setUploadPhoto] = useState(false);

  function showUploadBox() {
    setUploadPhoto((uploadPhoto) => !uploadPhoto);
  }
  return (
    <section className="photo-album-container">
      <PhotoToolBar showUploadBox={showUploadBox} />
      {uploadPhoto ? <PhotoUpload /> : null}
      <section className="photo-album">
        <Photo
          src={
            "https://lh3.googleusercontent.com/Zf-ZPZa8wJOIjVp2RVf0AJj2Dy8fTe6wsXaskl2MvKXQukZWvqQZPHCzJVvsHn94RaSvKBCVV4rwKTrqr1EeeQV9ty6utYhktzGPnAKyS4rApXUX-T4AxHH6wlB37Trh965rKO5UVPQxctRwYPlhGmKi_tZDpRIMJrJgcJ1ivzxTtiOU7H4y58kj5VA5VFzT5ltBUGz5HVZXkwK5cGcITYo7D6pdIAq563CRhsk4W4Vsmaydso1LybFc4-L7zXXXgPcj_AiZMQTV8a4k2vyv1585V2_ymFMGZ4_Q6Vtv5ZcSiZwadAKFPhPDgoyq2PCtt378xoeL9k5FkqrMKh6vixonZFIONs78K_u1CnAtQQfpcLibwnJpDVagWc_sWwyjYDP0p4C_PRxNQCX6kyiP13qtoAhMWtmtuwfuUc5pT6M-M29aNHq6BbhGkV5AihtTJdOg-hXIjl6GVlnRryw-ktfPrC3qQDK9ZFij5paVKdOGzoIt_BwrZQm6fiJ-gsTwGqAms99rykZ67uXItp4MtDcdOrNY0G1aWLrZ9aUvxVGW6o7A0Aj8IuXwk5z4E0WG-XCuTBDjfvbITj1djPUUaOT2gcHPfoVH_ggX9osojt3g3Dtv_L7jTzyg_31pnUTfoTmuIVhE4dEtH3fc0GvxTMF_RZLUQCIOrRCu2IfrYHP9ZBGRMHAN8hnSWpLIx1Wtnr6fJFVVT0A-OJ6d9EyrTgpQ=w948-h1263-no?authuser=0"
          }
        />
        <Photo
          src={
            "https://lh3.googleusercontent.com/nu5M27PSlCZEZP_mTgD1EnqLTA_nvfue7H_UeauhFn-oN_Vd7K_epPD2AUBarx_HUvmnt3P1Rxm6dYUCxtxMIU1kqqhSHE-_w0m1nROQiLqO4tP9bswpqifRhtUeo6srI6gltlZ8aw99yFoot0-mGPsfOgOalRVqeS7g7YycOFNyvwl8PvJ1gkiGBLRzLvkHAhRVPIhoblQwaXLVgANCMJUVye4jLYaG4qQAKVcXkhEo9bknfDuRirQmBjSN8_wwEEGRPXpKAFi_2JL1KVFGe0hb42AlLnWNRD6H4xZUDnCKfXKjTZ7K4t8xMC0luVXWcpkSk8BMDrPhHPvfCIUuh14y7fgkSPq3gHsdNLmxHqK5ZliG8pO4WbY_y3Onbst9efKqvmJ_kkOoxnxjWltcH1q6OiAw0pqE9YFVATwDubBt4v1lpd-gaQfiDMVVgIk-nf-iDnXK_Ja2s9ePfaSgXfPgImErM6wd0G5HEQ-uRUrynRukUsEWsSOi0ZVZWLz5EG0XSp6PQpWqCXoD0pLjjjXra4gvu591yKpC3JogxGk1S-fNdrEafxcNBbc8a8_OFTwfxlvxlf5L1Ur0r0LIWpmC0SKYqfu12zp-3xeiGCvhDb5A6VbDuK6kkwB23YGO2ToIpRvT21xHB2K-OXyGTRDS5y7RnDD8LgK7FXpVB1VRCE-H7pG86Ghmc_UNNQqTqgxaeX3Hs5MLMgAWnuFIr9Zp=w239-h179-no?authuser=0"
          }
        />
        <Photo
          src={
            "https://lh3.googleusercontent.com/52OVTNScUMkAMdTesH6V1FCVF5iBdjFn3FP4BFL3GkO35Eo1xdV3_koZHmawxRozJpauvQI7a9ief8jDmLIKbCyc40nKSSACVT-91F7ywzuPUTFpSfBTfGFX-kHPHVDJCKzeW1nUBWttya-XjfLaisNJIBs6sqoQNSXX-7DFWnCO1H4awyC9cFUO_AGpUCSfU8xvxP5PO_10YmKmtISMJ0eP6SUFRdcyr8gNhxB1mEVWz8h71Wev8CVAVz3RkAC9MXHjjuc8R5lj_-OyIXtJiuUW__Net2shzwrzmfYEfcMl7A6zIJ_XkJfJeIvRNTx6sQEL-9VHgBEyZsWUR-3MZsPJS6dOEqdjAldY7nkstsUQdbe1jrms2vfKBYsAJHjlyAnk5W-gzudEFMtc9ICK6LRYQfgKtkTncQQ3VlkfBF1TXHMgZJaIsombVISKq2ykB0-CY6yan53ahvAne3l7cL_pvNsVrlHNMrhdvAxNfHqGt1iL4NCVF2aGfSv88_V5TRSyJq-tbc6pxla09C_p2ijFm0yGcLF47xBZ7wRV9zxUB-kSoqfwgZJAniafkI2DE3_CDduDXBmuBux4EE42CU2FU8VXjedOGqgsKr5isvlvAUr4l5Wgos5aYSqQaDW0HDod-g97qFko6ceF0UNp69YnXy4GUolODh0iJ7qzXqJflUtEu2cRJs90oO3xcapmNmZrIG48DD9_7VeWOIvVzNIP=w948-h1263-no?authuser=0"
          }
        />
        <Photo
          src={
            "https://lh3.googleusercontent.com/rZhBkpgHSXdC_tuBjRjqF9h6PMX4KuQ7RZvnoUYet5Asx4yEd8XUKmVLRE5GbaVHx8qoaTsHxMT2rUdBsLhHehfveQQSqI99NE7iHvSZWnBcf_F1YB4ehOAOS74bd_NcNxjgJZjxgvyEDOKeBtfCdWA6WeNB1rg5YIU4QiR8mcsvL0dtatU2OZXz2Alh4t4qAnPjqv1oZ8vjOZaf-C8cJGavMpE5EQxe_NfqL9xohX7qFHcDL-QgzsQGmHkYtZiN7BjISa_dF_nJmkKSlDcK5OXBvahR_IlhFw4T5HwmepGVkf5JQU9QFqoQvurNTiVg7-hJKmP48FKUeO4XDviK_69O2i76H7mLUWbWG5fJDyyaH2iGv6XLJa8_zjFhviFbHWAm-ImHIdUnzo5zVESX8gAdxzFaO4DzQ0-g3MR9z8LrAFXc6e9FCEIsKc9LpChx58RYRL3rKBBEFPjW32YC8-po4hGp1Whza_v9nRP03yqwDwzv6bmPaG0oGXXvVOtbtXzZEQ79JL2nYRC46rEMbJrmfuYSmA7leyx5roY5hEwHz-d3y04OBS5rmsqNbCXbq0r_eA1kXWiGIlNoeMpJAzmMfb7kk8FO4F8EzSFtKYVnUyWa9dQzqrv8vKw5uN2aMFbtSUlnc_ZN6xH5FvDlhuQicfRNZmzD0Aeb8V2ta_RuXyJ6ShmZREv0h6rnpTfqgyczUbR47G5HVu5eQ69tOYh_=w948-h1263-no?authuser=0"
          }
        />
        <Photo
          src={
            "https://lh3.googleusercontent.com/iDk8YoA0DPHWKwZFXwJpvXzAwOZj93r2kEMCGoQE0frkl8Unyf9IYRNLd0kx5B7Bz_xEFVQ8oQeQQi7mSEHD89-NzTCxloEZfCct7VTa4dNkwkA3GqtDG9z-xomQvoCycbzDb5Q9r6PakmcvovzRd069rApjfLhKpACuIuKWtN01tsUnwz4FJQlxmqSemIH0-mPlMZkPLsJwAH-XwBUVhUhOoBeBkzOyAI3pzq3XvuJmsbdp8luvSBhkImcDqem6WTwEm8ctpcWCLksAjS82Qce3fqWs1Fi4WiZkciDaMAdXrdsPDrFviHUFyfr_sQD4xgq-W9zUQY2U7NLXKGeUPWgzUDecFtYG9inJAdlnVV7XY72N2VMVeVU7UxGYJUgF5HzTBNliDrg06ge_3emjdx65Gz37U_1qg8AaoAgFZOPHgg4JLGwutRa6kIeJRlZ0Q_1K1Y0C3wO8Imgl1n-V0mUp-f_RT5737xWAAJo3WqgZ9PgDbWqvxq3EufpjZQYdU8GtNNxdHwGSeAevuo_sCmwsyKsTws_z9asK944yD5X19j-1-7WO7KLwHaLTMDZSR2b9R-e_XqArtpVqobYUiUEkJxfW5mnoqCKYgjwGdZAgWxcB4B-G7dYh02sgCHNmATV-HZWAZRA98DHtbWMGTWBzdwAIf-Yhn1b06px1JgdW_4zRPCQdhOcbEmT4Gtf-9wLsHaCDhD3janJ12OtiU0J-=w948-h1263-no?authuser=0"
          }
        />
        <Photo
          src={
            "https://lh3.googleusercontent.com/tpOG4PphV2trOnA2HbfHrP8nehErMk9yA6miUEpqVDemmW4WzxulhRNjH6EJUPST08UDBajwwndtnoUP_iSz_HU862P8RLJEHhH0b02aJTHdf0XBM_Qm7QIZ2JoTCGnzNrQFrQtdcKZUsu3r0GrKBDDkMeN4n5SPwKchZuv7Ue62Gq8kVWZEnCJmNh6xS1jc2PC2W9iCeRfewzleeuRUa6XlVaGH7QsqWLv0iwTzWdl4ctY7EgPBk2YX0Kvy5FZa-QEGOQpipD-uN8c1h-OLdbaeiCcHLF7c1MG1vrFU7jQFbV2hMNj9kL4Fr-UkeICHR8LVJuIPwbGZ3nZC9LIWyypouCR1eAEUqRPvYmw4R0T5TLJM1A2Up5sgEtzln1i46LqGESS6vm1slxe0Bmfiyf1StGMgN0Mr41PDajbxBrPRcP5XHm6UCmHJBZ8ERmUKIxx2eIh2sMcU51O4H3kUQY1rJplyg0iT3RQaJ0crTMMc7vTllOrOHteytStM6yF-xhuzZK1jRKeFKLaJ7I_8W0gHQ4JLP3YYRkYBH-mDy2Otyz8uTrVlUI0OWbMM5TlwP-V3j4-YkKXhAcW1VBh7a-7dHkPHkwpDeNM670_pchOKMdRQ5qrQuC5PytWFAKV8cCn5DbmSEjO5ZS01KFVVPCE2oVKjAw2YULt2CInSM0QDNWF2xk49ab0_PcWw89f_TOtIuf67pUhklIE2-s8X4R9m=w1684-h1263-no?authuser=0"
          }
        />
        <Photo
          src={
            "https://lh3.googleusercontent.com/H1p3zn1rblCjywyjPIwu5mlFRuWBQnZw65nggVzX7Bk14hjJNEgvjFvAaqU6E7IHPlkmeO4g7_HobkyXTHqkejn9F_Id-XpYEK8zjP_nx3PTrc2Gdx_QPQDg6t1GWYcsI_9MG2Y0Iwr7sXcswig3f4FcYF0QJwW1JvIOVFoUDffDmVtEuIg8VX_811F2eAQZ70F1sVyK8hvul0vu-4-oiloRlq6mmu7B8WDU-Mug3GCuvHxzSBkMzzDX3NMmJerdVdrfrYSd0CRKtoONBVS4Uqj5ELktEoGS38YZpIAcL8Z_Z2PVwDQKvPhewT0Wnt2mAO2ff8ZPYhGT1ZQ5DHjlaQM629PdjW1VoTwcItFWuB2539BXu0F3eGAdm5Xe6wtN63hq3SrPzmmMsAj-AqjJ1bqdR0Za_UpWTbvTKsTvK10lP7lKblM9X80EvEwTIjEwWrclIToIGXQmQ_hX4eFYp6bmUe7ZBlAXCpTNUgQyHNtZMASAwWypN_En1RgOE8k6QjFSYOT3oNSb868gQrTMiRDZVawmHoP8AzTwsKQ3OfhO6jvfp7TgqvI8227X-tVJn5D1V05mj408C8eF_wh-dkCdMKvnsYQyC59a5lApg5AH4IvUVzYuZV7pfkFQPfptm97vvenX98b5ixbJ0krSNQEo6Ea25ZttIvTWejWd17ahNPNjP4yxF-37mTMU5IJDYcgQl1WN63Ndpm9I9GWamqv2=w948-h1263-no?authuser=0"
          }
        />
        <Photo
          src={
            "https://lh3.googleusercontent.com/QHkatVXLePVmwzekqkhwr2KifJlZL2eOhTF3VbEFokDoNMQ5B8BI7TcA55icvbbGfHdziKvDCHaU6iBlWhTz8NOgNJI0hHbgWPPxupP60gcqg4PkHOYFWtaGuc6xmX2LPet9OaVlInMrxmvlE0BG6-74y5F_fHNBm_qKYJcrBDZFy0y8GL-_KiiO9KqHlgULEwdaoOXZIY0i9CBAK2uUVziWrQiaq5JRMQZfgcdfNcxSKEXwvyuBdbE1FC7p6JFCPevXHbldV9GfzAoiF-7Z8ooZYcVlN2d4WHqPZRP_Q0ILCskLmn4QL9HXFEFlreVaCHbaXmvTyev5pNK46FOR2ZjxsCIeeZXuz5VccjZAMLpXBwgR-cmkKd8plwJsl2Q54YdAaqw9s-B0aTBR5dVd6bwNmrfD5-MYkljtNdJGALKaKpmHZ04VVX0Ieis84fHbfNNV-GstQBi7kYV47Z4NGoSqBDf-_nOM6aeocgPY2Z23C7hfH2pWctiKJ39gMNh7aBD_sf-i_F_n8kSxL8bRo5lxQKwI8XF7y7Rx3zAtTVIYnrlahYh7YrHPtZal8wz0D6CWCA8vQ2o-QQYW3AikxiSFR5k6ibF_Nka_UIZtW-16V1ucis5JpOd93SVcMS6YXz7Uy-62Gn2YS8qWKOb0r_BGB2krETbxmSqBKuTZsAErQiXn_IR4KEt07loh0LnTIuia5Pz3ywDiYzOqA4XE19zP=w1684-h1263-no?authuser=0"
          }
        />
        <Photo
          src={
            "https://lh3.googleusercontent.com/FZCKBZqVY3XvSWkQQNUElCOcMFgehtuIJEbkSKPaktVuxUkxcXTJDa80cXx6HXL34hBa7TtOjV2t0j5KHcgY0xhPVOZ438hL6ESOxMXcyPT1HS7Ot-JLyKR5xb2yoGV9EdfNEmw5S8kFjoa-OnWW7EnbzlYiQ22ETl0ewerkiU8CNnL8xHhQCXTmqXRcynVJ00Py4qWWeq4Rsw8FOGsFtsqrzcgrpxtxwAHWnJuy3lcOrOsev8ZpvrLT-1yvhT84uE7twYktUqaGF9AmCYUFiDl9gOv5uQ3XcnDky0uvRpwb49soygg-98F517Am7iX9_Vp4-dcon0gWS2UxEwf2tf5M92WpUTtkYRdvUyAVtpt1K7I5EuZgVsehbEYlao1Nkj_LReB9n7MxUdFFq7oZFlUwWZB2HzpSJyBvKvBbXOPuDuGj5xzOzzWnaD5kFkZ_2nXTqyrZd1Mbz1DY4Oga0Lr5ZHuptU_BvmeRGKhDYw-6xHYs2dL6UCI51jKkILxm6yj-c5MONQ3qV5X2BHdyRAtKCqsG3RbGBJ7Oq7EXLWEkJ408dupcQC8oYaqav6cRHbGmwOTH2Cha2ZVYHXD2TlETU3VqEFQw-EZ3ETfR2yeTCGmXu_eerPDE0xm__U6uugXLlW7vv2LsROTiSRcyIASGC6aumypeauGNC2_ywOS3J0SeE4pvPsptnTwj4Aq0pn4Fe4qlN5pM2DQ2hLiTJ9xx=w948-h1263-no?authuser=0"
          }
        />
        <Photo
          src={
            "https://lh3.googleusercontent.com/UNxee92MHyciSu02YDRX__PmKokTLhZGlOfeCG4ZIel7ok9FBMsHoosciFXq0B9T1KdibaqklPsCVZkPibva87gE2F9UoVUWZ9JWry8ZKzKmcXLj2t3EK0IzXxH5Kc3R8w0aetiWg1_SW331qpduZJybg5ZR3Zct0vWQu6rRhFcX1tZFLyDAC3YVIAep8O_MlA-7Morl0MPF35JMwliFeRs2Dhf3i04TWBKnOAGoEsV_RYVGL5L4rFp2AKiTCtRspKxDF488Q4fN66bhu8SiB4ofdtuNcQIx8rJ6nSxw8wJdfnNin4_x8Wl4n_eUuyj5bo21q5TDj5sk8JJqo6Oq5W1f-pz3dzCNQAMwN_qhsVm3wor-15RsoRX1ud6Q_Kleag1o-nRqaOEH6umBCB9QLOiIZ0FFyW7I9FTal035jLPYFIgaylg3YIZKq8XOiH_X99apr6ZJ_JPp5LD0xyAT_8H5hM5e2YKQujvTdZwk-JeE-xultJRu24Ne74apKG_-83DrJyyRTRcTmrjHKcr47ShMnESDw5z2nRe7BCkkHKxjdc8hM3henTBwITVtwLCPsq4k2aWSSSz8b7kspI0_a4EjUyaSXYFh0DzfYpfWZoSKVinHH8QyYBzO4U_bLgCE126BlTrDn58tb4OV7EXx0RMf2q6ZEIIIq1oXIgCfOCwtW0NzD8DC38Nd1bgxW21RBRKFOFFnjnfpY42yzwk_AIy4=w360-h640-no?authuser=0"
          }
        />
        <Photo
          src={
            "https://lh3.googleusercontent.com/LlsxzjsriRZJ9Hzs1ILQmIMyAOCoqVy5GgA4_76oXn4GIyPUijVFk_k0vz5BvJWFqH0iBBKKuSRUQHUhOUkg7F3ZjPN79rSnWjmmuMAPUFnAuX6HreNKhZHs_2z4glQterpY5v794Y06FeYwvGZRJ1c_ippsahI5d8L3ZN7rrX0YtLYFCeIaiOsl9vpJQ5BMVsW5TcIFj8tPXBjKAk51w39hMFsqnu7cIHoD1EP7JcAx4km6MUKAMCtosiGIz_XVVQ6EgsY5MHUnqmFTT-JjVaktPkdKfHSJ0sDdyfKtNs4se9DsJ2AKBCGpW6CuaxPvVarDHgByNPoB4LlwvUW_BtUYFFYK0EHq3phdPM2yFqCg3bYqbORD594kKy0OaJVJjQhoCiGzrrjzHoUmckYsk7DZ0EcUtdmKXP8gRfY2jdsLut0GNBbAQILfZ8BYr0I_vmoLo-CYSrpQqorsQ7GWBp_oas4uQHmBOzeYe1yJ_nJ1Lm_ZTm9JhlsnAmp_USQmgFRlmaxy2ShpW-S5qlwzaoDdm7rLGIeiVHOXLuovNc-eqzsSLGrFSWMd6EKcPKq1Bc7nRsEiIX_JpqjIFDv9D_tQlysE8HJmWng7U8nh7dM8uueyrg55tXNbKnqEP3yHsMnKAjDLatHo39_akqjbnOp9OAEeqdg6UCtAEJrCkPkf54WgvBiaQFBYr_639NRr3Y9jmHIYIU707mpxQQOUREf7=w948-h1263-no?authuser=0"
          }
        />
        <Photo
          src={
            "https://lh3.googleusercontent.com/5t5I07qVku4A9axFxi813G1pYP1MUtglXl6amHTKQC3zirvUAESnonpmAroYTCpMCpr6OrMFuVZjJz1Zw7QsDJTW7FYufbuBsuY8xHt7bB9tvfWnKNVns8HrvGHQhuh48wTEi79Cll0Kp4XLLlk0w6HL_KsSOr5sndF8kaDMJqxhIOpoJtKIk3_RYRO-hl7GMtrm0Y7Jlu_Rc_wrGgmG-wtsu55XcOG-dJtIGR67WRNmZvNms9EHZOVoJh2vXAgwtWxmtZ3eaOBJEFvS-2jK6VCnLEJ2wiVJZmiHL4ETZzpmG6L9T8YXBIbjqwt9elFODdWqE63nqF_1gIe6q5VejPRccCpj10vJuzz3SGAyf7dh_7HMz6Ktvx18UJTDtdWo-WPQdUYa8684dLj7CI8oUlwqbLvjKv5dBP6rjVr620T5G0h36-Z5GvLRcZSLo-7W8krRPMtGo9GwE-9k7QrugAEkvfg3j_BU6pARcs7EgNAeeXPD8sSIhXXOBomXMvBlfzxBLBZQpHckp3OHYBBX-DoHAou9jKEIiO5g9UJYCtd58hQcMH6_3wFir0IOymcTconpTqG2ylkVH5PdGclSfQl8UBw2UGQp7hl4YdtQdHEwZYDAODssa_Dlk80lf94eLD0SpE2ddGM9yWNPSnhkDyrDtvHk2IK3b8umR9TEMwoHa7KCgpLNmv6ml3iL-PrVbGv-IuiZVssfwJ7hlmY-QfGY=w2245-h1263-no?authuser=0"
          }
        />
        <Photo
          src={
            "https://lh3.googleusercontent.com/zvrOrrdz1EyVh9KPpQ-0xcHn4pV7IKJj7shII1WC9T0duFg57XT50IOQZVv17EKJZm1cxyd8PpQEOtxKpvYSVijq7xB_Z6zwGtNYc-TR7U958IKpWP-jqmqGlawo92gPNzdFKt4TvyOWedIWZ8G2qozcYdbidTcAXplwfdeQv5S79ALf0zs8GbzYZ3qW7x9a9SWRXWxKiT1zwQUWtALTVFOMg3QYlPVr5SWCE-ObYJzC7REyCKjgR9M9C4GnO3_qxVsBw5ZJ1R5Yl0ZIXqgrvphl_kBfwQAtNK1X4aFzYFLMn52soNo_-ZJo21n1sGpYqBnL0Xw6bT9CyARE_ScUEwWnhlahueyP-Zp_27AYf1fGNshhfTRXh7bBhZEJ7kEo252Xn44YXTj11D4rJHWaW2RvfFcHdrn7HUn4njgQCXHsWiguc8IVvOlru7IGpujZnzlNQ5_D4Yx-u7VAW8DUwIyvZYJo3ZbbvFYt7alGVIsWgEA4MQGRM_zDkGjVQcGNFhzBIT9rSXww1rR6cwCnAkinLxe2k3mjCgb4c2TD-hCjF0nOlsXRSritobJp-B-XXeC870QM-EfQZWxpQsbkXcHLk5XFK-uA_ELDSDDcCfXt9WIgHL7-JTnh0NssDYvqhNgULqyZ5vjA_7wPUGK43V1ZQ1Z88wefqG7m8-4f9lDO-LuoUl7LbP5aLByJZZleSE43xD68hKXz4_0dq1fO7a4Y=w948-h1263-no?authuser=0"
          }
        />
      </section>
    </section>
  );
}

export default PhotoAlbum;
