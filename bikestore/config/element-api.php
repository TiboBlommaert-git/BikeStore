<?php

use craft\elements\Entry;

return [
    'endpoints' => [
        'blogEntries.json' => function() {
            return [
                'elementType' => Entry::class,
                'criteria' => ['section' => 'blogPosts'],
                'transformer' => function(Entry $entry) {
                    return [
                        'title' => $entry->title,
                        'SectionOne' => $entry->SectionOne,
                        'SectionTwo' => $entry->sectionTwo,
                        'tussenTitel' => $entry->tussenTitel,
                        'featuredImage' => $entry->featureImage->one() ? $entry->featureImage->one()->url : null,
                    ];
                },
            ];
        },
        'bikeEntries.json' => function() {
            return [
                'elementType' => Entry::class,
                'criteria' => ['section' => 'bikeEntries'],
                'transformer' => function(Entry $entry) {
                    return [
                        'merk' => $entry->merk->one()->title,
                        'gewicht' => $entry->gewicht,
                        'maat' => $entry->maat,
                        'productImage' => $entry->productImage->one() ? $entry->productImage->one()->url : null,
                        'motor' => $entry->motor->one()->title,
                       'motorpositie' => $entry->motorpositie->label,
                       'productColours' => $entry->productColours,   
                       'productDescription' => $entry->productDescription,
                       'productprice' =>  $entry->productPrice->getAmount(),
                       'productTitle' => $entry->title,
                       'typefiets' => $entry->typefiets->one()->title,
                       'versnellingen' => $entry->versnellingen->label,
                       'accu' => $entry->accu,
                    ];
                },
            ];
        },
        'bikeEntries/<productTitle:{slug}>.json' => function($productTitle) {
            $productTitle = urldecode($productTitle); // Decode the URL-encoded product title
            return [
                'elementType' => Entry::class,
                'criteria' => ['section' => 'bikeEntries', 'title' => $productTitle],
                'one' => true,
                'transformer' => function(Entry $entry) {
                    return [
                        'merk' => $entry->merk->one()->title,
                        'gewicht' => $entry->gewicht,
                        'maat' => $entry->maat,
                        'productImage' => $entry->productImage->one() ? $entry->productImage->one()->url : null,
                        'motor' => $entry->motor->one()->title,
                        'motorpositie' => $entry->motorpositie->label,
                        'productColours' => $entry->productColours,   
                        'productDescription' => $entry->productDescription,
                        'productprice' =>  $entry->productPrice->getAmount(),
                        'productTitle' => $entry->title,
                        'typefiets' => $entry->typefiets->one()->title,
                        'versnellingen' => $entry->versnellingen->label,
                        'accu' => $entry->accu,
                    ];
                },
            ];
        },
    ]
    
];