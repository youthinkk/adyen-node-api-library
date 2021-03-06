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


import { SoundActionType } from "./soundActionType";
import { SoundContent } from "./soundContent";

export class SoundRequest {
    "responseMode"?: SoundRequest.ResponseModeEnum;
    "soundAction": SoundActionType;
    "soundContent": SoundContent;
    "soundVolume"?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: {name: string, baseName: string, type: string}[] = [
        {
            "name": "responseMode",
            "baseName": "ResponseMode",
            "type": "SoundRequest.ResponseModeEnum"
        },
        {
            "name": "soundAction",
            "baseName": "SoundAction",
            "type": "SoundActionType"
        },
        {
            "name": "soundContent",
            "baseName": "SoundContent",
            "type": "SoundContent"
        },
        {
            "name": "soundVolume",
            "baseName": "SoundVolume",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SoundRequest.attributeTypeMap;
    }
}

export namespace SoundRequest {
    export enum ResponseModeEnum {
        Immediate = "Immediate" as any,
        NotRequired = "NotRequired" as any,
        PrintEnd = "PrintEnd" as any,
        SoundEnd = "SoundEnd" as any
    }
}
