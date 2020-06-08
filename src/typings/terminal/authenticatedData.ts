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


import { AlgorithmIdentifier } from './algorithmIdentifier';
import { AnyType } from './anyType';
import { EncapsulatedContent } from './encapsulatedContent';

export class AuthenticatedData {
    'encapsulatedContent': EncapsulatedContent;
    'keyTransportOrKEK'?: Array<AnyType>;
    'mAC': AnyType;
    'mACAlgorithm': AlgorithmIdentifier;
    'version'?: AuthenticatedData.VersionEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "encapsulatedContent",
            "baseName": "EncapsulatedContent",
            "type": "EncapsulatedContent"
        },
        {
            "name": "keyTransportOrKEK",
            "baseName": "KeyTransportOrKEK",
            "type": "Array<AnyType>"
        },
        {
            "name": "mAC",
            "baseName": "MAC",
            "type": "AnyType"
        },
        {
            "name": "mACAlgorithm",
            "baseName": "MACAlgorithm",
            "type": "AlgorithmIdentifier"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "AuthenticatedData.VersionEnum"
        }    ];

    static getAttributeTypeMap() {
        return AuthenticatedData.attributeTypeMap;
    }
}

export namespace AuthenticatedData {
    export enum VersionEnum {
        V0 = <any> 'V0',
        V1 = <any> 'V1',
        V2 = <any> 'V2',
        V3 = <any> 'V3',
        V4 = <any> 'V4',
        V5 = <any> 'V5'
    }
}
