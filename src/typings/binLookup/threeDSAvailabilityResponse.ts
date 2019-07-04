/**
 * Adyen BinLookup Service
 * The BIN Lookup API provides endpoints for retrieving information, such as [cost estimates](https://docs.adyen.com/features/cost-estimation), and 3D Secure supported version based on a given [BIN](https://docs.adyen.com/payments-basics/payment-glossary#bankidentificationnumberbin).
 *
 * OpenAPI spec version: 40
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { DSPublicKeyDetail } from './dSPublicKeyDetail';
import { ThreeDS2CardRangeDetail } from './threeDS2CardRangeDetail';


export interface ThreeDSAvailabilityResponse { 
    /**
     * List of Directory Server (DS) public keys.
     */
    dsPublicKeys?: Array<DSPublicKeyDetail>;
    /**
     * Indicator if 3D Secure 1 is supported.
     */
    threeDS1Supported?: boolean;
    /**
     * List of brand and card range pairs.
     */
    threeDS2CardRangeDetails?: Array<ThreeDS2CardRangeDetail>;
    /**
     * Indicator if 3D Secure 2 is supported.
     */
    threeDS2supported?: boolean;
}