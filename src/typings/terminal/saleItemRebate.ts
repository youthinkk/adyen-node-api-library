/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



export class SaleItemRebate {
    'eanUpc'?: string;
    'itemAmount'?: number;
    'itemID': number;
    'productCode': string;
    'quantity'?: number;
    'rebateLabel'?: string;
    'unitOfMeasure'?: SaleItemRebate.UnitOfMeasureEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "eanUpc",
            "baseName": "EanUpc",
            "type": "string"
        },
        {
            "name": "itemAmount",
            "baseName": "ItemAmount",
            "type": "number"
        },
        {
            "name": "itemID",
            "baseName": "ItemID",
            "type": "number"
        },
        {
            "name": "productCode",
            "baseName": "ProductCode",
            "type": "string"
        },
        {
            "name": "quantity",
            "baseName": "Quantity",
            "type": "number"
        },
        {
            "name": "rebateLabel",
            "baseName": "RebateLabel",
            "type": "string"
        },
        {
            "name": "unitOfMeasure",
            "baseName": "UnitOfMeasure",
            "type": "SaleItemRebate.UnitOfMeasureEnum"
        }    ];

    static getAttributeTypeMap() {
        return SaleItemRebate.attributeTypeMap;
    }
}

export namespace SaleItemRebate {
    export enum UnitOfMeasureEnum {
        Case = <any> 'Case',
        Centilitre = <any> 'Centilitre',
        Centimetre = <any> 'Centimetre',
        Foot = <any> 'Foot',
        Gram = <any> 'Gram',
        Inch = <any> 'Inch',
        Kilogram = <any> 'Kilogram',
        Kilometre = <any> 'Kilometre',
        Litre = <any> 'Litre',
        Meter = <any> 'Meter',
        Mile = <any> 'Mile',
        Other = <any> 'Other',
        Ounce = <any> 'Ounce',
        Pint = <any> 'Pint',
        Pound = <any> 'Pound',
        Quart = <any> 'Quart',
        UKGallon = <any> 'UKGallon',
        USGallon = <any> 'USGallon',
        Yard = <any> 'Yard'
    }
}