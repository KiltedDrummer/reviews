
CREATE TABLE public.master_03
(
    id bigint NOT NULL,
    home_id bigint,
    reviews_id smallint,
    reviews_review text COLLATE pg_catalog."default",
    reviews_created character varying(100) COLLATE pg_catalog."default",
    reviews_user_id smallint
) PARTITION BY RANGE (home_id) 
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.master_03
    OWNER to "Nicholas";

-- Partitions SQL





    CREATE TABLE "public.00_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('1') TO ('100001');

  

    CREATE TABLE "public.02_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('200001') TO ('300001');

  

    CREATE TABLE "public.01_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('100001') TO ('200001');

  

    CREATE TABLE "public.04_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('400001') TO ('500001');

  

    CREATE TABLE "public.05_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('500001') TO ('600001');

  

    CREATE TABLE "public.03_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('300001') TO ('400001');

  

    CREATE TABLE "public.06_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('600001') TO ('700001');

  

    CREATE TABLE "public.07_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('700001') TO ('800001');

  

    CREATE TABLE "public.09_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('900001') TO ('1000001');

  

    CREATE TABLE "public.10_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('1000001') TO ('1100001');

  

    CREATE TABLE "public.8_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('800001') TO ('900001');

  

    CREATE TABLE "public.11_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('1100001') TO ('1200001');

  

    CREATE TABLE "public.12_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('1200001') TO ('1300001');

  

    CREATE TABLE "public.13_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('1300001') TO ('1400001');

  

    CREATE TABLE "public.14_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('1400001') TO ('1500001');

  

    CREATE TABLE "public.15_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('1500001') TO ('1600001');

  

    CREATE TABLE "public.16_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('1600001') TO ('1700001');

  

    CREATE TABLE "public.17_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('1700001') TO ('1800001');

  

    CREATE TABLE "public.18_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('1800001') TO ('1900001');

  

    CREATE TABLE "public.19_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('1900001') TO ('2000001');

  

    CREATE TABLE "public.20_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('2000001') TO ('2100001');

  

    CREATE TABLE "public.21_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('2100001') TO ('2200001');

  

    CREATE TABLE "public.22_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('2200001') TO ('2300001');

  

    CREATE TABLE "public.23_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('2300001') TO ('2400001');

  

    CREATE TABLE "public.24_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('2400001') TO ('2500001');

  

    CREATE TABLE "public.25_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('2500001') TO ('2600001');

  

    CREATE TABLE "public.26_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('2600001') TO ('2700001');

  

    CREATE TABLE "public.27_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('2700001') TO ('2800001');

  

    CREATE TABLE "public.28_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('2800001') TO ('2900001');

  

    CREATE TABLE "public.29_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('2900001') TO ('3000001');

  

    CREATE TABLE "public.30_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('3000001') TO ('3100001');

  

    CREATE TABLE "public.31_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('3100001') TO ('3200001');

  

    CREATE TABLE "public.32_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('3200001') TO ('3300001');

  

    CREATE TABLE "public.33_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('3300001') TO ('3400001');

  

    CREATE TABLE "public.34_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('3400001') TO ('3500001');

  

    CREATE TABLE "public.35_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('3500001') TO ('3600001');

  

    CREATE TABLE "public.36_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('3600001') TO ('3700001');

  

    CREATE TABLE "public.37_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('3700001') TO ('3800001');

  

    CREATE TABLE "public.38_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('3800001') TO ('3900001');

  

    CREATE TABLE "public.39_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('3900001') TO ('4000001');

  

    CREATE TABLE "public.40_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('4000001') TO ('4100001');

  

    CREATE TABLE "public.41_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('4100001') TO ('4200001');

  

    CREATE TABLE "public.42_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('4200001') TO ('4300001');

  

    CREATE TABLE "public.43_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('4300001') TO ('4400001');

  

    CREATE TABLE "public.44_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('4400001') TO ('4500001');

  

    CREATE TABLE "public.45_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('4500001') TO ('4600001');

  

    CREATE TABLE "public.46_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('4600001') TO ('4700001');

  

    CREATE TABLE "public.47_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('4700001') TO ('4800001');

  

    CREATE TABLE "public.48_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('4800001') TO ('4900001');

  

    CREATE TABLE "public.49_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('4900001') TO ('5000001');

  

    CREATE TABLE "public.50_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('5000001') TO ('5100001');

  

    CREATE TABLE "public.51_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('5100001') TO ('5200001');

  

    CREATE TABLE "public.52_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('5200001') TO ('5300001');

  

    CREATE TABLE "public.53_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('5300001') TO ('5400001');

  

    CREATE TABLE "public.54_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('5400001') TO ('5500001');

  

    CREATE TABLE "public.55_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('5500001') TO ('5600001');

  

    CREATE TABLE "public.56_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('5600001') TO ('5700001');

  

    CREATE TABLE "public.57_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('5700001') TO ('5800001');

  

    CREATE TABLE "public.58_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('5800001') TO ('5900001');

  

    CREATE TABLE "public.59_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('5900001') TO ('6000001');

  

    CREATE TABLE "public.60_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('6000001') TO ('6100001');

  

    CREATE TABLE "public.61_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('6100001') TO ('6200001');

  

    CREATE TABLE "public.62_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('6200001') TO ('6300001');

  

    CREATE TABLE "public.63_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('6300001') TO ('6400001');

  

    CREATE TABLE "public.64_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('6400001') TO ('6500001');

  

    CREATE TABLE "public.65_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('6500001') TO ('6600001');

  

    CREATE TABLE "public.66_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('6600001') TO ('6700001');

  

    CREATE TABLE "public.67_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('6700001') TO ('6800001');

  

    CREATE TABLE "public.68_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('6800001') TO ('6900001');

  

    CREATE TABLE "public.69_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('6900001') TO ('7000001');

  

    CREATE TABLE "public.70_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('7000001') TO ('7100001');

  

    CREATE TABLE "public.71_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('7100001') TO ('7200001');

  

    CREATE TABLE "public.72_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('7200001') TO ('7300001');

  

    CREATE TABLE "public.73_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('7300001') TO ('7400001');

  

    CREATE TABLE "public.74_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('7400001') TO ('7500001');

  

    CREATE TABLE "public.75_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('7500001') TO ('7600001');

  

    CREATE TABLE "public.76_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('7600001') TO ('7700001');

  

    CREATE TABLE "public.77_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('7700001') TO ('7800001');

  

    CREATE TABLE "public.78_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('7800001') TO ('7900001');

  

    CREATE TABLE "public.79_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('7900001') TO ('8000001');

  

    CREATE TABLE "public.80_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('8000001') TO ('8100001');

  

    CREATE TABLE "public.81_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('8100001') TO ('8200001');

  

    CREATE TABLE "public.82_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('8200001') TO ('8300001');

  

    CREATE TABLE "public.83_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('8300001') TO ('8400001');

  

    CREATE TABLE "public.84_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('8400001') TO ('8500001');

  

    CREATE TABLE "public.85_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('8500001') TO ('8600001');

  

    CREATE TABLE "public.86_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('8600001') TO ('8700001');

  

    CREATE TABLE "public.87_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('8700001') TO ('8800001');

  

    CREATE TABLE "public.88_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('8800001') TO ('8900001');

  

    CREATE TABLE "public.89_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('8900001') TO ('9000001');

  

    CREATE TABLE "public.90_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('9000001') TO ('9100001');

  

    CREATE TABLE "public.91_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('9100001') TO ('9200001');

  

    CREATE TABLE "public.92_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('9200001') TO ('9300001');

  

    CREATE TABLE "public.93_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('9300001') TO ('9400001');

  

    CREATE TABLE "public.94_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('9400001') TO ('9500001');

  

    CREATE TABLE "public.95_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('9500001') TO ('9600001');

  

    CREATE TABLE "public.96_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('9600001') TO ('9700001');

  

    CREATE TABLE "public.97_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('9700001') TO ('9800001');

  

    CREATE TABLE "public.98_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('9800001') TO ('9900001');

  

    CREATE TABLE "public.99_reviews" PARTITION OF public.master_03
    FOR VALUES FROM ('9900001') TO ('10000001');

  