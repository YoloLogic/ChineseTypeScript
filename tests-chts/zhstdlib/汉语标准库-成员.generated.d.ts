// 【生成物，请勿手改】由 tools/gen_zhstdlib_lib.ps1 从上游 lib + stdlib 译名表生成。
// 只做「成员改名」的增补：接口名与类型原样保留，英文用法照旧可用。

interface ClassAccessorDecoratorTarget<This, Value> {
    获取(this: This): Value;
    设置(this: This, value: Value): void;
}

interface ClassAccessorDecoratorResult<This, Value> {
    获取?(this: This): Value;
    设置?(this: This, value: Value): void;
}

interface AesCtrParams {
    长度: number;
}

interface AesDerivedKeyParams {
    长度: number;
}

interface AesKeyAlgorithm {
    长度: number;
}

interface AesKeyGenParams {
    长度: number;
}

interface AudioBufferOptions {
    长度: number;
}

interface AudioDecoderInit {
    报错: WebCodecsErrorCallback;
}

interface AudioEncoderInit {
    报错: WebCodecsErrorCallback;
}

interface AuthenticationExtensionsLargeBlobInputs {
    写入?: BufferSource;
}

interface AuthenticationExtensionsLargeBlobInputsJSON {
    写入?: Base64URLString;
}

interface AuthenticationExtensionsLargeBlobOutputs {
    转二进制块?: ArrayBuffer;
}

interface AuthenticationExtensionsLargeBlobOutputsJSON {
    转二进制块?: Base64URLString;
}

interface AuthenticationResponseJSON {
    种类: string;
}

interface BiquadFilterOptions {
    种类?: BiquadFilterType;
}

interface BlobPropertyBag {
    种类?: string;
}

interface CSSNumericType {
    长度?: number;
}

interface ClientQueryOptions {
    种类?: ClientTypes;
}

interface CookieInit {
    值内容: string;
}

interface CookieListItem {
    值内容?: string;
}

interface CookieStoreGetOptions {
    地址?: string;
}

interface DOMRectInit {
    高度?: number;
    宽度?: number;
}

interface DoubleRange {
    最大?: number;
    最小?: number;
}

interface EffectTiming {
    填充?: FillMode;
}

interface EncodedAudioChunkInit {
    种类: EncodedAudioChunkType;
}

interface EncodedVideoChunkInit {
    种类: EncodedVideoChunkType;
}

interface ErrorEventInit {
    报错?: any;
}

interface FileSystemFlags {
    创建?: boolean;
}

interface FileSystemGetDirectoryOptions {
    创建?: boolean;
}

interface FileSystemGetFileOptions {
    创建?: boolean;
}

interface FontFaceDescriptors {
    样式?: string;
}

interface GPUBindGroupDescriptor {
    条目: GPUBindGroupEntry[];
}

interface GPUBindGroupLayoutDescriptor {
    条目: GPUBindGroupLayoutEntry[];
}

interface GPUBufferBinding {
    大小?: GPUSize64;
}

interface GPUBufferBindingLayout {
    种类?: GPUBufferBindingType;
}

interface GPUBufferDescriptor {
    大小: GPUSize64;
}

interface GPUExtent3DDict {
    高度?: GPUIntegerCoordinate;
    宽度: GPUIntegerCoordinate;
}

interface GPUQuerySetDescriptor {
    种类: GPUQueryType;
}

interface GPUSamplerBindingLayout {
    种类?: GPUSamplerBindingType;
}

interface GPUTextureDescriptor {
    大小: GPUExtent3D;
}

interface GPUUncapturedErrorEventInit {
    报错: GPUError;
}

interface HmacImportParams {
    长度?: number;
}

interface HmacKeyAlgorithm {
    长度: number;
}

interface HmacKeyGenParams {
    长度?: number;
}

interface ImageDecoderInit {
    种类: string;
}

interface ImageEncodeOptions {
    种类?: string;
}

interface KeyboardEventInit {
    键名?: string;
    重复?: boolean;
}

interface MediaDecodingConfiguration {
    种类: MediaDecodingType;
}

interface MediaEncodingConfiguration {
    种类: MediaEncodingType;
}

interface MediaImage {
    源址: string;
    种类?: string;
}

interface MediaMetadataInit {
    标题?: string;
}

interface MediaQueryListEventInit {
    匹配选择器?: boolean;
}

interface MediaSettingsRange {
    最大?: number;
    最小?: number;
}

interface MediaTrackCapabilities {
    高度?: ULongRange;
    宽度?: ULongRange;
}

interface MediaTrackConstraintSet {
    高度?: ConstrainULong;
    宽度?: ConstrainULong;
}

interface MediaTrackSettings {
    高度?: number;
    宽度?: number;
}

interface MediaTrackSupportedConstraints {
    高度?: boolean;
    宽度?: boolean;
}

interface OfflineAudioContextOptions {
    长度: number;
}

interface OptionalEffectTiming {
    填充?: FillMode;
}

interface OscillatorOptions {
    种类?: OscillatorType;
}

interface PaymentCurrencyAmount {
    值内容: string;
}

interface PaymentDetailsUpdate {
    报错?: string;
}

interface PaymentValidationErrors {
    报错?: string;
}

interface PerformanceObserverInit {
    种类?: string;
}

interface PointerEventInit {
    高度?: number;
    宽度?: number;
}

interface PublicKeyCredentialDescriptor {
    种类: PublicKeyCredentialType;
}

interface PublicKeyCredentialDescriptorJSON {
    种类: string;
}

interface PublicKeyCredentialParameters {
    种类: PublicKeyCredentialType;
}

interface PushSubscriptionJSON {
    键列?: Record<string, string>;
}

interface QueuingStrategy<T = any> {
    大小?: QueuingStrategySize<T>;
}

interface RTCDtlsFingerprint {
    值内容?: string;
}

interface RTCEncodedVideoFrameMetadata {
    高度?: number;
    宽度?: number;
}

interface RTCErrorEventInit {
    报错: RTCError;
}

interface RTCLocalSessionDescriptionInit {
    种类?: RTCSdpType;
}

interface RTCPeerConnectionIceErrorEventInit {
    地址?: string;
}

interface RTCSessionDescriptionInit {
    种类: RTCSdpType;
}

interface RTCStats {
    种类: RTCStatsType;
}

interface ReadableStreamBYOBReaderReadOptions {
    最小?: number;
}

interface ReadableStreamReadDoneResult<T> {
    已完成: true;
    值内容: T | undefined;
}

interface ReadableStreamReadValueResult<T> {
    已完成: false;
    值内容: T;
}

interface RegistrationOptions {
    种类?: WorkerType;
}

interface RegistrationResponseJSON {
    种类: string;
}

interface Report {
    种类?: string;
    地址?: string;
}

interface RequestInit {
    头集合?: HeadersInit;
}

interface ResponseInit {
    头集合?: HeadersInit;
    状态码?: number;
    状态文本?: string;
}

interface SVGBoundingBoxOptions {
    填充?: boolean;
    描边?: boolean;
}

interface ShareData {
    转文本?: string;
    标题?: string;
    地址?: string;
}

interface SpeechRecognitionErrorEventInit {
    报错: SpeechRecognitionErrorCode;
}

interface SpeechSynthesisErrorEventInit {
    报错: SpeechSynthesisErrorCode;
}

interface StorageEventInit {
    键名?: string | null;
    地址?: string;
}

interface Transformer<I = any, O = any> {
    变换?: TransformerTransformCallback<I, O>;
}

interface ULongRange {
    最大?: number;
    最小?: number;
}

interface URLPatternInit {
    查找?: string;
}

interface URLPatternResult {
    查找: URLPatternComponentResult;
}

interface UnderlyingByteSource {
    种类: "bytes";
}

interface UnderlyingDefaultSource<R = any> {
    种类?: undefined;
}

interface UnderlyingSink<W = any> {
    中止?: UnderlyingSinkAbortCallback;
    关闭?: UnderlyingSinkCloseCallback;
    种类?: undefined;
    写入?: UnderlyingSinkWriteCallback<W>;
}

interface UnderlyingSource<R = any> {
    种类?: ReadableStreamType;
}

interface VideoConfiguration {
    高度: number;
    宽度: number;
}

interface VideoDecoderInit {
    报错: WebCodecsErrorCallback;
}

interface VideoEncoderConfig {
    高度: number;
    宽度: number;
}

interface VideoEncoderInit {
    报错: WebCodecsErrorCallback;
}

interface VideoFrameCallbackMetadata {
    高度: number;
    宽度: number;
}

interface WebTransportHash {
    值内容: BufferSource;
}

interface WorkerOptions {
    种类?: WorkerType;
}

interface WriteParams {
    大小?: number | null;
    种类: WriteCommandType;
}

interface AbortController {
    中止(reason?: any): void;
}

interface AbortSignal {
    加事件监听<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AbstractWorker {
    加事件监听<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Animation {
    反转(): void;
    加事件监听<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AnimationFrameProvider {
    请求动画帧(callback: FrameRequestCallback): number;
}

interface Attr {
    值内容: string;
    get 文本内容(): string;
    set 文本内容(value: string | null);
}

interface AudioBuffer {
    readonly 长度: number;
}

interface AudioBufferSourceNode {
    加事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AudioContext {
    关闭(): Promise<void>;
    加事件监听<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AudioData {
    关闭(): void;
}

interface AudioDecoder {
    关闭(): void;
    重置(): void;
    加事件监听<K extends keyof AudioDecoderEventMap>(type: K, listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioDecoderEventMap>(type: K, listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AudioEncoder {
    关闭(): void;
    重置(): void;
    加事件监听<K extends keyof AudioEncoderEventMap>(type: K, listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioEncoderEventMap>(type: K, listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AudioParam {
    值内容: number;
}

interface AudioParamMap {
    逐个处理(callbackfn: (value: AudioParam, key: string, parent: AudioParamMap) => void, thisArg?: any): void;
}

interface AudioScheduledSourceNode {
    加事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AudioWorkletNode {
    加事件监听<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface BaseAudioContext {
    加事件监听<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface BiquadFilterNode {
    种类: BiquadFilterType;
}

interface Blob {
    readonly 大小: number;
    readonly 种类: string;
    转缓冲(): Promise<ArrayBuffer>;
    截取(start?: number, end?: number, contentType?: string): Blob;
    转文本(): Promise<string>;
}

interface Body {
    转缓冲(): Promise<ArrayBuffer>;
    转二进制块(): Promise<Blob>;
    转对象(): Promise<any>;
    转文本(): Promise<string>;
}

interface BroadcastChannel {
    关闭(): void;
    加事件监听<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ByteLengthQueuingStrategy {
    readonly 大小: QueuingStrategySize<ArrayBufferView>;
}

interface CSSAnimation {
    加事件监听<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSAnimation, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSAnimation, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface CSSFontFaceRule {
    get 样式(): CSSStyleDeclaration;
    set 样式(cssText: string);
}

interface CSSImportRule {
    readonly 链接: string;
}

interface CSSKeyframeRule {
    get 样式(): CSSStyleDeclaration;
    set 样式(cssText: string);
}

interface CSSKeyframesRule {
    readonly 长度: number;
}

interface CSSKeywordValue {
    值内容: string;
}

interface CSSMathClamp {
    readonly 值内容: CSSNumericValue;
}

interface CSSMathInvert {
    readonly 值内容: CSSNumericValue;
}

interface CSSMathMax {
    readonly 值列: CSSNumericArray;
}

interface CSSMathMin {
    readonly 值列: CSSNumericArray;
}

interface CSSMathNegate {
    readonly 值内容: CSSNumericValue;
}

interface CSSMathProduct {
    readonly 值列: CSSNumericArray;
}

interface CSSMathSum {
    readonly 值列: CSSNumericArray;
}

interface CSSNestedDeclarations {
    get 样式(): CSSStyleDeclaration;
    set 样式(cssText: string);
}

interface CSSNumericArray {
    readonly 长度: number;
    逐个处理(callbackfn: (value: CSSNumericValue, key: number, parent: CSSNumericArray) => void, thisArg?: any): void;
}

interface CSSNumericValue {
    添加(...values: CSSNumberish[]): CSSNumericValue;
    最大(...values: CSSNumberish[]): CSSNumericValue;
    最小(...values: CSSNumberish[]): CSSNumericValue;
    种类(): CSSNumericType;
}

interface CSSPageDescriptors {
    大小: string;
}

interface CSSPageRule {
    get 样式(): CSSPageDescriptors;
    set 样式(cssText: string);
}

interface CSSPerspective {
    长度: CSSPerspectiveValue;
}

interface CSSPositionTryDescriptors {
    高度: string;
    宽度: string;
}

interface CSSPositionTryRule {
    get 样式(): CSSPositionTryDescriptors;
    set 样式(cssText: string);
}

interface CSSRule {
    readonly 种类: number;
}

interface CSSRuleList {
    readonly 长度: number;
    取项(index: number): CSSRule | null;
}

interface CSSStyleDeclarationBase {
    readonly 长度: number;
    取项(index: number): string;
}

interface CSSStyleProperties {
    全部: string;
    清空: string;
    填充: string;
    过滤: string;
    高度: string;
    旋转: string;
    缩放: string;
    描边: string;
    变换: string;
    平移: string;
    宽度: string;
}

interface CSSStyleRule {
    get 样式(): CSSStyleDeclaration;
    set 样式(cssText: string);
}

interface CSSStyleSheet {
    替换(text: string): Promise<CSSStyleSheet>;
}

interface CSSStyleValue {
    转字符串(): string;
}

interface CSSTransformComponent {
    转字符串(): string;
}

interface CSSTransformValue {
    readonly 长度: number;
    逐个处理(callbackfn: (value: CSSTransformComponent, key: number, parent: CSSTransformValue) => void, thisArg?: any): void;
}

interface CSSTransition {
    加事件监听<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSTransition, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSTransition, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface CSSUnitValue {
    值内容: number;
}

interface CSSUnparsedValue {
    readonly 长度: number;
    逐个处理(callbackfn: (value: CSSUnparsedSegment, key: number, parent: CSSUnparsedValue) => void, thisArg?: any): void;
}

interface Cache {
    添加(request: RequestInfo | URL): Promise<void>;
    删除(request: RequestInfo | URL, options?: CacheQueryOptions): Promise<boolean>;
    键列(request?: RequestInfo | URL, options?: CacheQueryOptions): Promise<ReadonlyArray<Request>>;
    匹配(request: RequestInfo | URL, options?: CacheQueryOptions): Promise<Response | undefined>;
    全匹配(request?: RequestInfo | URL, options?: CacheQueryOptions): Promise<ReadonlyArray<Response>>;
}

interface CacheStorage {
    删除(cacheName: string): Promise<boolean>;
    含有(cacheName: string): Promise<boolean>;
    键列(): Promise<string[]>;
    匹配(request: RequestInfo | URL, options?: MultiCacheQueryOptions): Promise<Response | undefined>;
    打开(cacheName: string): Promise<Cache>;
}

interface CanvasCaptureMediaStreamTrack {
    加事件监听<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: CanvasCaptureMediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: CanvasCaptureMediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface CanvasDrawImage {
    绘制图像(image: CanvasImageSource, dx: number, dy: number): void;
    绘制图像(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    绘制图像(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}

interface CanvasDrawPath {
    开始路径(): void;
    填充(fillRule?: CanvasFillRule): void;
    填充(path: Path2D, fillRule?: CanvasFillRule): void;
    描边(): void;
    描边(path: Path2D): void;
}

interface CanvasFilters {
    过滤: string;
}

interface CanvasImageData {
    创建图像数据(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    创建图像数据(imageData: ImageData): ImageData;
    取图像数据(sx: number, sy: number, sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    放图像数据(imageData: ImageData, dx: number, dy: number): void;
    放图像数据(imageData: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
}

interface CanvasPath {
    画弧(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    闭合路径(): void;
    连线到(x: number, y: number): void;
    移到(x: number, y: number): void;
}

interface CanvasPattern {
    设变换(transform?: DOMMatrix2DInit): void;
}

interface CanvasRect {
    清矩形(x: number, y: number, w: number, h: number): void;
    填充矩形(x: number, y: number, w: number, h: number): void;
    描边矩形(x: number, y: number, w: number, h: number): void;
}

interface CanvasState {
    重置(): void;
    恢复(): void;
    保存(): void;
}

interface CanvasText {
    测量文本(text: string): TextMetrics;
}

interface CanvasTransform {
    重置变换(): void;
    旋转(angle: number): void;
    缩放(x: number, y: number): void;
    设变换(a: number, b: number, c: number, d: number, e: number, f: number): void;
    设变换(transform?: DOMMatrix2DInit): void;
    变换(a: number, b: number, c: number, d: number, e: number, f: number): void;
    平移(x: number, y: number): void;
}

interface CharacterData {
    readonly 长度: number;
    get 文本内容(): string;
    set 文本内容(value: string | null);
}

interface ChildNode {
    之后(...nodes: (Node | string)[]): void;
    之前(...nodes: (Node | string)[]): void;
    移除(): void;
    替换为(...nodes: (Node | string)[]): void;
}

interface Clipboard {
    写入(data: ClipboardItems): Promise<void>;
}

interface ConstantSourceNode {
    加事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ConvolverNode {
    规范化: boolean;
}

interface CookieStore {
    删除(name: string): Promise<void>;
    删除(options: CookieStoreDeleteOptions): Promise<void>;
    获取(name: string): Promise<CookieListItem | null>;
    获取(options?: CookieStoreGetOptions): Promise<CookieListItem | null>;
    设置(name: string, value: string): Promise<void>;
    设置(options: CookieInit): Promise<void>;
    加事件监听<K extends keyof CookieStoreEventMap>(type: K, listener: (this: CookieStore, ev: CookieStoreEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof CookieStoreEventMap>(type: K, listener: (this: CookieStore, ev: CookieStoreEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface CountQueuingStrategy {
    readonly 大小: QueuingStrategySize;
}

interface Credential {
    readonly 种类: string;
}

interface CredentialsContainer {
    创建(options?: CredentialCreationOptions): Promise<Credential | null>;
    获取(options?: CredentialRequestOptions): Promise<Credential | null>;
}

interface CryptoKey {
    readonly 种类: KeyType;
}

interface CustomElementRegistry {
    获取(name: string): CustomElementConstructor | undefined;
}

interface CustomStateSet {
    逐个处理(callbackfn: (value: string, key: string, parent: CustomStateSet) => void, thisArg?: any): void;
}

interface DOMMatrixReadOnly {
    旋转(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    缩放(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    转数据(): any;
    平移(tx?: number, ty?: number, tz?: number): DOMMatrix;
    转字符串(): string;
}

interface DOMPointReadOnly {
    转数据(): any;
}

interface DOMQuad {
    转数据(): any;
}

interface DOMRect {
    高度: number;
    宽度: number;
}

interface DOMRectList {
    readonly 长度: number;
    取项(index: number): DOMRect | null;
}

interface DOMRectReadOnly {
    readonly 高度: number;
    readonly 宽度: number;
    转数据(): any;
}

interface DOMStringList {
    readonly 长度: number;
    含节点(string: string): boolean;
    取项(index: number): string | null;
}

interface DOMTokenList {
    readonly 长度: number;
    值内容: string;
    转字符串(): string;
    添加(...tokens: string[]): void;
    含节点(token: string): boolean;
    取项(index: number): string | null;
    移除(...tokens: string[]): void;
    替换(token: string, newToken: string): boolean;
    逐个处理(callbackfn: (value: string, key: number, parent: DOMTokenList) => void, thisArg?: any): void;
}

interface DataTransferItem {
    readonly 种类: string;
}

interface DataTransferItemList {
    readonly 长度: number;
    添加(data: string, type: string): DataTransferItem | null;
    添加(data: File): DataTransferItem | null;
    清空(): void;
    移除(index: number): void;
}

interface DigitalCredential {
    转数据(): any;
}

interface Document {
    readonly 地址: string;
    readonly 全部: HTMLAllCollection;
    标题: string;
    收养节点<T extends Node>(node: T): T;
    清空(): void;
    关闭(): void;
    创建属性(localName: string): Attr;
    创建注释(data: string): Comment;
    创建元素<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
    创建元素<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementDeprecatedTagNameMap[K];
    创建元素(tagName: string, options?: ElementCreationOptions): HTMLElement;
    创建事件(eventInterface: "AnimationEvent"): AnimationEvent;
    创建事件(eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent;
    创建事件(eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
    创建事件(eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
    创建事件(eventInterface: "BlobEvent"): BlobEvent;
    创建事件(eventInterface: "ClipboardEvent"): ClipboardEvent;
    创建事件(eventInterface: "CloseEvent"): CloseEvent;
    创建事件(eventInterface: "CommandEvent"): CommandEvent;
    创建事件(eventInterface: "CompositionEvent"): CompositionEvent;
    创建事件(eventInterface: "ContentVisibilityAutoStateChangeEvent"): ContentVisibilityAutoStateChangeEvent;
    创建事件(eventInterface: "CookieChangeEvent"): CookieChangeEvent;
    创建事件(eventInterface: "CustomEvent"): CustomEvent;
    创建事件(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
    创建事件(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
    创建事件(eventInterface: "DragEvent"): DragEvent;
    创建事件(eventInterface: "ErrorEvent"): ErrorEvent;
    创建事件(eventInterface: "Event"): Event;
    创建事件(eventInterface: "Events"): Event;
    创建事件(eventInterface: "FocusEvent"): FocusEvent;
    创建事件(eventInterface: "FontFaceSetLoadEvent"): FontFaceSetLoadEvent;
    创建事件(eventInterface: "FormDataEvent"): FormDataEvent;
    创建事件(eventInterface: "GPUUncapturedErrorEvent"): GPUUncapturedErrorEvent;
    创建事件(eventInterface: "GamepadEvent"): GamepadEvent;
    创建事件(eventInterface: "HashChangeEvent"): HashChangeEvent;
    创建事件(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
    创建事件(eventInterface: "InputEvent"): InputEvent;
    创建事件(eventInterface: "KeyboardEvent"): KeyboardEvent;
    创建事件(eventInterface: "MIDIConnectionEvent"): MIDIConnectionEvent;
    创建事件(eventInterface: "MIDIMessageEvent"): MIDIMessageEvent;
    创建事件(eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
    创建事件(eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
    创建事件(eventInterface: "MediaQueryListEvent"): MediaQueryListEvent;
    创建事件(eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
    创建事件(eventInterface: "MessageEvent"): MessageEvent;
    创建事件(eventInterface: "MouseEvent"): MouseEvent;
    创建事件(eventInterface: "MouseEvents"): MouseEvent;
    创建事件(eventInterface: "NavigateEvent"): NavigateEvent;
    创建事件(eventInterface: "NavigationCurrentEntryChangeEvent"): NavigationCurrentEntryChangeEvent;
    创建事件(eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
    创建事件(eventInterface: "PageRevealEvent"): PageRevealEvent;
    创建事件(eventInterface: "PageSwapEvent"): PageSwapEvent;
    创建事件(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
    创建事件(eventInterface: "PaymentMethodChangeEvent"): PaymentMethodChangeEvent;
    创建事件(eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
    创建事件(eventInterface: "PictureInPictureEvent"): PictureInPictureEvent;
    创建事件(eventInterface: "PointerEvent"): PointerEvent;
    创建事件(eventInterface: "PopStateEvent"): PopStateEvent;
    创建事件(eventInterface: "ProgressEvent"): ProgressEvent;
    创建事件(eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
    创建事件(eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
    创建事件(eventInterface: "RTCDataChannelEvent"): RTCDataChannelEvent;
    创建事件(eventInterface: "RTCErrorEvent"): RTCErrorEvent;
    创建事件(eventInterface: "RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
    创建事件(eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
    创建事件(eventInterface: "RTCTrackEvent"): RTCTrackEvent;
    创建事件(eventInterface: "SecurityPolicyViolationEvent"): SecurityPolicyViolationEvent;
    创建事件(eventInterface: "SpeechRecognitionErrorEvent"): SpeechRecognitionErrorEvent;
    创建事件(eventInterface: "SpeechRecognitionEvent"): SpeechRecognitionEvent;
    创建事件(eventInterface: "SpeechSynthesisErrorEvent"): SpeechSynthesisErrorEvent;
    创建事件(eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
    创建事件(eventInterface: "StorageEvent"): StorageEvent;
    创建事件(eventInterface: "SubmitEvent"): SubmitEvent;
    创建事件(eventInterface: "TaskPriorityChangeEvent"): TaskPriorityChangeEvent;
    创建事件(eventInterface: "TextEvent"): TextEvent;
    创建事件(eventInterface: "ToggleEvent"): ToggleEvent;
    创建事件(eventInterface: "TouchEvent"): TouchEvent;
    创建事件(eventInterface: "TrackEvent"): TrackEvent;
    创建事件(eventInterface: "TransitionEvent"): TransitionEvent;
    创建事件(eventInterface: "UIEvent"): UIEvent;
    创建事件(eventInterface: "UIEvents"): UIEvent;
    创建事件(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
    创建事件(eventInterface: "WheelEvent"): WheelEvent;
    创建事件(eventInterface: string): Event;
    创建文本节点(data: string): Text;
    按编号取元素(elementId: string): HTMLElement | null;
    按类取元素组(classNames: string): HTMLCollectionOf<Element>;
    按名取元素(elementName: string): NodeListOf<HTMLElement>;
    按标签取元素<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    按标签取元素<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    按标签取元素<K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
    按标签取元素<K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
    按标签取元素(qualifiedName: string): HTMLCollectionOf<Element>;
    导入节点<T extends Node>(node: T, options?: boolean | ImportNodeOptions): T;
    打开(unused1?: string, unused2?: string): Document;
    打开(url: string | URL, name: string, features: string): WindowProxy | null;
    写入(...text: string[]): void;
    写入行(...text: string[]): void;
    get 文本内容(): null;
    加事件监听<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface DocumentFragment {
    按编号取元素(elementId: string): HTMLElement | null;
    get 文本内容(): string;
    set 文本内容(value: string | null);
}

interface DocumentType {
    get 文本内容(): null;
}

interface Element {
    get 类列表(): DOMTokenList;
    set 类列表(value: string);
    内部标记: string;
    最近祖先<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
    最近祖先<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
    最近祖先<K extends keyof MathMLElementTagNameMap>(selector: K): MathMLElementTagNameMap[K] | null;
    最近祖先<E extends Element = Element>(selectors: string): E | null;
    取属性(qualifiedName: string): string | null;
    取属性名(): string[];
    取边界矩形(): DOMRect;
    按类取元素组(classNames: string): HTMLCollectionOf<Element>;
    按标签取元素<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    按标签取元素<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    按标签取元素<K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
    按标签取元素<K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
    按标签取元素(qualifiedName: string): HTMLCollectionOf<Element>;
    有属性(qualifiedName: string): boolean;
    匹配选择器<K extends keyof HTMLElementTagNameMap>(selectors: K): this is HTMLElementTagNameMap[K];
    匹配选择器<K extends keyof SVGElementTagNameMap>(selectors: K): this is SVGElementTagNameMap[K];
    匹配选择器<K extends keyof MathMLElementTagNameMap>(selectors: K): this is MathMLElementTagNameMap[K];
    匹配选择器(selectors: string): boolean;
    删属性(qualifiedName: string): void;
    滚入视野(arg?: boolean | ScrollIntoViewOptions): void;
    设置属性(qualifiedName: string, value: string): void;
    切换属性(qualifiedName: string, force?: boolean): boolean;
    get 文本内容(): string;
    set 文本内容(value: string | null);
    加事件监听<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ElementCSSInlineStyle {
    get 样式(): CSSStyleDeclaration;
    set 样式(cssText: string);
}

interface EncodedAudioChunk {
    readonly 种类: EncodedAudioChunkType;
}

interface EncodedVideoChunk {
    readonly 种类: EncodedVideoChunkType;
}

interface ErrorEvent {
    readonly 报错: any;
}

interface Event {
    readonly 种类: string;
    阻止默认(): void;
    停止传播(): void;
}

interface EventCounts {
    逐个处理(callbackfn: (value: number, key: string, parent: EventCounts) => void, thisArg?: any): void;
}

interface EventSource {
    readonly 地址: string;
    关闭(): void;
    readonly 打开: 1;
    加事件监听<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: (this: EventSource, event: MessageEvent) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: (this: EventSource, event: MessageEvent) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface EventTarget {
    加事件监听(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    派发事件(event: Event): boolean;
    去事件监听(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}

interface FileList {
    readonly 长度: number;
    取项(index: number): File | null;
}

interface FileReader {
    readonly 报错: DOMException | null;
    中止(): void;
    readonly 已完成: 2;
    加事件监听<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface FileSystemDirectoryHandle {
    解决(possibleDescendant: FileSystemHandle): Promise<string[] | null>;
}

interface FileSystemWritableFileStream {
    写入(data: FileSystemWriteChunkType): Promise<void>;
}

interface FontFace {
    readonly 状态码: FontFaceLoadStatus;
    样式: string;
}

interface FontFaceSet {
    readonly 状态码: FontFaceSetLoadStatus;
    逐个处理(callbackfn: (value: FontFace, key: FontFace, parent: FontFaceSet) => void, thisArg?: any): void;
    加事件监听<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface FormData {
    后插(name: string, value: string | Blob): void;
    后插(name: string, value: string): void;
    后插(name: string, blobValue: Blob, filename?: string): void;
    删除(name: string): void;
    获取(name: string): FormDataEntryValue | null;
    含有(name: string): boolean;
    设置(name: string, value: string | Blob): void;
    设置(name: string, value: string): void;
    设置(name: string, blobValue: Blob, filename?: string): void;
    逐个处理(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}

interface GPUBuffer {
    readonly 大小: GPUSize64Out;
}

interface GPUCompilationMessage {
    readonly 长度: number;
    readonly 种类: GPUCompilationMessageType;
}

interface GPUDevice {
    加事件监听<K extends keyof GPUDeviceEventMap>(type: K, listener: (this: GPUDevice, ev: GPUDeviceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof GPUDeviceEventMap>(type: K, listener: (this: GPUDevice, ev: GPUDeviceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface GPUQuerySet {
    readonly 种类: GPUQueryType;
}

interface GPUQueue {
    提交(commandBuffers: GPUCommandBuffer[]): void;
}

interface GPUSupportedFeatures {
    逐个处理(callbackfn: (value: string, key: string, parent: GPUSupportedFeatures) => void, thisArg?: any): void;
}

interface GPUTexture {
    readonly 高度: GPUIntegerCoordinateOut;
    readonly 宽度: GPUIntegerCoordinateOut;
}

interface GPUUncapturedErrorEvent {
    readonly 报错: GPUError;
}

interface GamepadButton {
    readonly 值内容: number;
}

interface GamepadHapticActuator {
    重置(): Promise<GamepadHapticsResult>;
}

interface GeolocationCoordinates {
    转数据(): any;
}

interface GeolocationPosition {
    转数据(): any;
}

interface GlobalEventHandlers {
    加事件监听<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLAllCollection {
    readonly 长度: number;
    取项(nameOrIndex?: string): HTMLCollection | Element | null;
}

interface HTMLAnchorElement {
    转文本: string;
    种类: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLAreaElement {
    替代文本: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLAudioElement {
    加事件监听<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLAudioElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLBRElement {
    清空: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLBaseElement {
    链接: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLBodyElement {
    转文本: string;
    加事件监听<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLButtonElement {
    种类: "submit" | "reset" | "button";
    值内容: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLCanvasElement {
    高度: number;
    宽度: number;
    取上下文(contextId: "2d", options?: CanvasRenderingContext2DSettings): CanvasRenderingContext2D | null;
    取上下文(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null;
    取上下文(contextId: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext | null;
    取上下文(contextId: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext | null;
    取上下文(contextId: string, options?: any): RenderingContext | null;
    转二进制(callback: BlobCallback, type?: string, quality?: number): void;
    转数据地址(type?: string, quality?: number): string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLCollectionBase {
    readonly 长度: number;
    取项(index: number): Element | null;
}

interface HTMLCollectionOf<T extends Element> {
    取项(index: number): T | null;
}

interface HTMLDListElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLDataElement {
    值内容: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLDataListElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLDetailsElement {
    打开: boolean;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLDialogElement {
    打开: boolean;
    关闭(returnValue?: string): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDialogElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLDirectoryElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDirectoryElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLDivElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDivElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLDocument {
    加事件监听<K extends keyof DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof DocumentEventMap>(type: K, listener: (this: HTMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLElement {
    标题: string;
    平移: boolean;
    点击(): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLEmbedElement {
    高度: string;
    源址: string;
    种类: string;
    宽度: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLFieldSetElement {
    readonly 种类: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFieldSetElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLFontElement {
    大小: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFontElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLFormElement {
    readonly 长度: number;
    重置(): void;
    提交(): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLFrameElement {
    源址: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLFrameSetElement {
    加事件监听<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLHRElement {
    大小: string;
    宽度: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHRElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLHeadElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLHeadingElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHeadingElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLHtmlElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLHtmlElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLHyperlinkElementUtils {
    链接: string;
    转字符串(): string;
    查找: string;
}

interface HTMLIFrameElement {
    高度: string;
    源址: string;
    宽度: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLImageElement {
    替代文本: string;
    高度: number;
    源址: string;
    宽度: number;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLInputElement {
    替代文本: string;
    高度: number;
    最大: string;
    最小: string;
    大小: number;
    源址: string;
    种类: string;
    值内容: string;
    宽度: number;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLLIElement {
    种类: string;
    值内容: number;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLIElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLLabelElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLLegendElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLLinkElement {
    链接: string;
    种类: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLMapElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLMarqueeElement {
    高度: string;
    宽度: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLMediaElement {
    readonly 报错: MediaError | null;
    源址: string;
    加事件监听<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLMediaElementEventMap>(type: K, listener: (this: HTMLMediaElement, ev: HTMLMediaElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLMenuElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMenuElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLMetaElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLMeterElement {
    最大: number;
    最小: number;
    值内容: number;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLModElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLOListElement {
    种类: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLObjectElement {
    高度: string;
    种类: string;
    宽度: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLOptGroupElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLOptionElement {
    转文本: string;
    值内容: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLOptionsCollection {
    长度: number;
    添加(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    移除(index: number): void;
}

interface HTMLOrSVGElement {
    readonly 数据集: DOMStringMap;
    失焦(): void;
    聚焦(options?: FocusOptions): void;
}

interface HTMLOutputElement {
    readonly 种类: string;
    值内容: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLParagraphElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLParamElement {
    种类: string;
    值内容: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParamElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLPictureElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPictureElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLPreElement {
    宽度: number;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLProgressElement {
    最大: number;
    值内容: number;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLQuoteElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLScriptElement {
    源址: string;
    转文本: string;
    种类: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLSelectElement {
    长度: number;
    大小: number;
    readonly 种类: "select-one" | "select-multiple";
    值内容: string;
    添加(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    取项(index: number): HTMLOptionElement | null;
    移除(): void;
    移除(index: number): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLSlotElement {
    合入(...nodes: (Element | Text)[]): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLSourceElement {
    高度: number;
    源址: string;
    种类: string;
    宽度: number;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSourceElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLSpanElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSpanElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLStyleElement {
    种类: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableCaptionElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableCellElement {
    头集合: string;
    高度: string;
    宽度: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableColElement {
    宽度: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableColElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableDataCellElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableDataCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableElement {
    宽度: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableHeaderCellElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableHeaderCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableRowElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableSectionElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableSectionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTemplateElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTemplateElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTextAreaElement {
    readonly 种类: string;
    值内容: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTextAreaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTimeElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTimeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTitleElement {
    转文本: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTrackElement {
    源址: string;
    readonly 报错: 3;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLUListElement {
    种类: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLUnknownElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLUnknownElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLVideoElement {
    高度: number;
    宽度: number;
    加事件监听<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Headers {
    后插(name: string, value: string): void;
    删除(name: string): void;
    获取(name: string): string | null;
    含有(name: string): boolean;
    设置(name: string, value: string): void;
    逐个处理(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
}

interface Highlight {
    种类: HighlightType;
    逐个处理(callbackfn: (value: AbstractRange, key: AbstractRange, parent: Highlight) => void, thisArg?: any): void;
}

interface HighlightRegistry {
    逐个处理(callbackfn: (value: Highlight, key: string, parent: HighlightRegistry) => void, thisArg?: any): void;
}

interface History {
    readonly 长度: number;
}

interface IDBCursor {
    readonly 键名: IDBValidKey;
    删除(): IDBRequest<undefined>;
}

interface IDBCursorWithValue {
    readonly 值内容: any;
}

interface IDBDatabase {
    关闭(): void;
    加事件监听<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface IDBFactory {
    打开(name: string, version?: number): IDBOpenDBRequest;
}

interface IDBIndex {
    获取(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
}

interface IDBKeyRange {
    包含(key: any): boolean;
}

interface IDBObjectStore {
    添加(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
    清空(): IDBRequest<undefined>;
    删除(query: IDBValidKey | IDBKeyRange): IDBRequest<undefined>;
    获取(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
}

interface IDBOpenDBRequest {
    加事件监听<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface IDBRequest<T = any> {
    readonly 报错: DOMException | null;
    加事件监听<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface IDBTransaction {
    readonly 报错: DOMException | null;
    中止(): void;
    加事件监听<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ImageBitmap {
    readonly 高度: number;
    readonly 宽度: number;
    关闭(): void;
}

interface ImageData {
    readonly 高度: number;
    readonly 宽度: number;
}

interface ImageDecoder {
    readonly 种类: string;
    关闭(): void;
    重置(): void;
}

interface ImageTrackList {
    readonly 长度: number;
}

interface ImportMeta {
    地址: string;
    解决(specifier: string): string;
}

interface KeyboardEvent {
    readonly 键名: string;
    readonly 重复: boolean;
}

interface LargestContentfulPaint {
    readonly 大小: number;
    readonly 地址: string;
    转数据(): any;
}

interface Location {
    链接: string;
    转字符串(): string;
    查找: string;
    合入(url: string | URL): void;
    替换(url: string | URL): void;
}

interface MIDIAccess {
    加事件监听<K extends keyof MIDIAccessEventMap>(type: K, listener: (this: MIDIAccess, ev: MIDIAccessEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MIDIAccessEventMap>(type: K, listener: (this: MIDIAccess, ev: MIDIAccessEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MIDIInput {
    加事件监听<K extends keyof MIDIInputEventMap>(type: K, listener: (this: MIDIInput, ev: MIDIInputEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MIDIInputEventMap>(type: K, listener: (this: MIDIInput, ev: MIDIInputEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MIDIInputMap {
    逐个处理(callbackfn: (value: MIDIInput, key: string, parent: MIDIInputMap) => void, thisArg?: any): void;
}

interface MIDIOutput {
    发送(data: number[], timestamp?: DOMHighResTimeStamp): void;
    加事件监听<K extends keyof MIDIPortEventMap>(type: K, listener: (this: MIDIOutput, ev: MIDIPortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MIDIPortEventMap>(type: K, listener: (this: MIDIOutput, ev: MIDIPortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MIDIOutputMap {
    逐个处理(callbackfn: (value: MIDIOutput, key: string, parent: MIDIOutputMap) => void, thisArg?: any): void;
}

interface MIDIPort {
    readonly 种类: MIDIPortType;
    关闭(): Promise<MIDIPort>;
    打开(): Promise<MIDIPort>;
    加事件监听<K extends keyof MIDIPortEventMap>(type: K, listener: (this: MIDIPort, ev: MIDIPortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MIDIPortEventMap>(type: K, listener: (this: MIDIPort, ev: MIDIPortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MathMLElement {
    加事件监听<K extends keyof MathMLElementEventMap>(type: K, listener: (this: MathMLElement, ev: MathMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MathMLElementEventMap>(type: K, listener: (this: MathMLElement, ev: MathMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaDeviceInfo {
    转数据(): any;
}

interface MediaDevices {
    加事件监听<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaKeySession {
    关闭(): Promise<void>;
    移除(): Promise<void>;
    加事件监听<K extends keyof MediaKeySessionEventMap>(type: K, listener: (this: MediaKeySession, ev: MediaKeySessionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaKeySessionEventMap>(type: K, listener: (this: MediaKeySession, ev: MediaKeySessionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaKeyStatusMap {
    readonly 大小: number;
    获取(keyId: BufferSource): MediaKeyStatus | undefined;
    含有(keyId: BufferSource): boolean;
    逐个处理(callbackfn: (value: MediaKeyStatus, key: BufferSource, parent: MediaKeyStatusMap) => void, thisArg?: any): void;
}

interface MediaList {
    readonly 长度: number;
    转字符串(): string;
    取项(index: number): string | null;
}

interface MediaMetadata {
    标题: string;
}

interface MediaQueryList {
    readonly 匹配选择器: boolean;
    加事件监听<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaQueryListEvent {
    readonly 匹配选择器: boolean;
}

interface MediaRecorder {
    加事件监听<K extends keyof MediaRecorderEventMap>(type: K, listener: (this: MediaRecorder, ev: MediaRecorderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaRecorderEventMap>(type: K, listener: (this: MediaRecorder, ev: MediaRecorderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaSource {
    加事件监听<K extends keyof MediaSourceEventMap>(type: K, listener: (this: MediaSource, ev: MediaSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaSourceEventMap>(type: K, listener: (this: MediaSource, ev: MediaSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaStream {
    加事件监听<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaStreamTrack {
    加事件监听<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MessageEventTarget<T> {
    加事件监听<K extends keyof MessageEventTargetEventMap>(type: K, listener: (this: T, ev: MessageEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MessageEventTargetEventMap>(type: K, listener: (this: T, ev: MessageEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MessagePort {
    关闭(): void;
    加事件监听<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MimeType {
    readonly 种类: string;
}

interface MimeTypeArray {
    readonly 长度: number;
    取项(index: number): MimeType | null;
}

interface MutationRecord {
    readonly 后兄弟: Node | null;
    readonly 前兄弟: Node | null;
    readonly 种类: MutationRecordType;
}

interface NamedNodeMap {
    readonly 长度: number;
    取项(index: number): Attr | null;
}

interface Navigation {
    条目(): NavigationHistoryEntry[];
    加事件监听<K extends keyof NavigationEventMap>(type: K, listener: (this: Navigation, ev: NavigationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof NavigationEventMap>(type: K, listener: (this: Navigation, ev: NavigationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface NavigationDestination {
    readonly 键名: string;
    readonly 地址: string;
}

interface NavigationHistoryEntry {
    readonly 键名: string;
    readonly 地址: string | null;
    加事件监听<K extends keyof NavigationHistoryEntryEventMap>(type: K, listener: (this: NavigationHistoryEntry, ev: NavigationHistoryEntryEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof NavigationHistoryEntryEventMap>(type: K, listener: (this: NavigationHistoryEntry, ev: NavigationHistoryEntryEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Node {
    readonly 子节点列: NodeListOf<ChildNode>;
    readonly 首子节点: ChildNode | null;
    readonly 末子节点: ChildNode | null;
    readonly 后兄弟: ChildNode | null;
    readonly 节点名: string;
    readonly 节点种类: number;
    readonly 父节点: ParentNode | null;
    readonly 前兄弟: ChildNode | null;
    文本内容: string | null;
    追加子节点<T extends Node>(node: T): T;
    复制节点(subtree?: boolean): Node;
    含节点(other: Node | null): boolean;
    前插节点<T extends Node>(node: T, child: Node | null): T;
    规范化(): void;
    移除子节点<T extends Node>(child: T): T;
    替换子节点<T extends Node>(node: Node, child: T): T;
}

interface NodeIterator {
    readonly 过滤: NodeFilter | null;
}

interface NodeList {
    readonly 长度: number;
    取项(index: number): Node | null;
    逐个处理(callbackfn: (value: Node, key: number, parent: NodeList) => void, thisArg?: any): void;
}

interface NodeListOf<TNode extends Node> {
    取项(index: number): TNode;
    逐个处理(callbackfn: (value: TNode, key: number, parent: NodeListOf<TNode>) => void, thisArg?: any): void;
}

interface NonElementParentNode {
    按编号取元素(elementId: string): Element | null;
}

interface Notification {
    readonly 标题: string;
    关闭(): void;
    加事件监听<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface OfflineAudioContext {
    readonly 长度: number;
    加事件监听<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface OffscreenCanvas {
    高度: number;
    宽度: number;
    取上下文(contextId: "2d", options?: any): OffscreenCanvasRenderingContext2D | null;
    取上下文(contextId: "bitmaprenderer", options?: any): ImageBitmapRenderingContext | null;
    取上下文(contextId: "webgl", options?: any): WebGLRenderingContext | null;
    取上下文(contextId: "webgl2", options?: any): WebGL2RenderingContext | null;
    取上下文(contextId: OffscreenRenderingContextId, options?: any): OffscreenRenderingContext | null;
    加事件监听<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface OscillatorNode {
    种类: OscillatorType;
    加事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ParentNode {
    后插(...nodes: (Node | string)[]): void;
    前插(...nodes: (Node | string)[]): void;
    查询选择器<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    查询选择器<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
    查询选择器<K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K] | null;
    查询选择器<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): HTMLElementDeprecatedTagNameMap[K] | null;
    查询选择器<E extends Element = Element>(selectors: string): E | null;
    查全部选择器<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    查全部选择器<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    查全部选择器<K extends keyof MathMLElementTagNameMap>(selectors: K): NodeListOf<MathMLElementTagNameMap[K]>;
    查全部选择器<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>;
    查全部选择器<E extends Element = Element>(selectors: string): NodeListOf<E>;
}

interface PaymentAddress {
    转数据(): any;
}

interface PaymentRequest {
    中止(): Promise<void>;
    加事件监听<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface PaymentResponse {
    转数据(): any;
    加事件监听<K extends keyof PaymentResponseEventMap>(type: K, listener: (this: PaymentResponse, ev: PaymentResponseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PaymentResponseEventMap>(type: K, listener: (this: PaymentResponse, ev: PaymentResponseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Performance {
    此刻(): DOMHighResTimeStamp;
    转数据(): any;
    加事件监听<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface PerformanceEntry {
    转数据(): any;
}

interface PerformanceEventTiming {
    转数据(): any;
}

interface PerformanceNavigation {
    readonly 种类: number;
    转数据(): any;
}

interface PerformanceNavigationTiming {
    readonly 种类: NavigationTimingType;
    转数据(): any;
}

interface PerformancePaintTiming {
    转数据(): any;
}

interface PerformanceResourceTiming {
    转数据(): any;
}

interface PerformanceServerTiming {
    转数据(): any;
}

interface PerformanceTiming {
    转数据(): any;
}

interface PermissionStatus {
    加事件监听<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface PictureInPictureWindow {
    readonly 高度: number;
    readonly 宽度: number;
    加事件监听<K extends keyof PictureInPictureWindowEventMap>(type: K, listener: (this: PictureInPictureWindow, ev: PictureInPictureWindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PictureInPictureWindowEventMap>(type: K, listener: (this: PictureInPictureWindow, ev: PictureInPictureWindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Plugin {
    readonly 长度: number;
    取项(index: number): MimeType | null;
}

interface PluginArray {
    readonly 长度: number;
    取项(index: number): Plugin | null;
}

interface PointerEvent {
    readonly 高度: number;
    readonly 宽度: number;
}

interface PublicKeyCredential {
    转数据(): RegistrationResponseJSON | AuthenticationResponseJSON;
}

interface PushSubscription {
    转数据(): PushSubscriptionJSON;
}

interface RTCDTMFSender {
    加事件监听<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCDataChannel {
    关闭(): void;
    发送(data: string): void;
    发送(data: Blob): void;
    发送(data: ArrayBuffer): void;
    发送(data: ArrayBufferView<ArrayBuffer>): void;
    加事件监听<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCDataChannelEventMap>(type: K, listener: (this: RTCDataChannel, ev: RTCDataChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCDtlsTransport {
    加事件监听<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCEncodedVideoFrame {
    readonly 种类: EncodedVideoChunkType;
}

interface RTCErrorEvent {
    readonly 报错: RTCError;
}

interface RTCIceCandidate {
    readonly 种类: RTCIceCandidateType | null;
    转数据(): RTCIceCandidateInit;
}

interface RTCIceTransport {
    加事件监听<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCPeerConnection {
    关闭(): void;
    加事件监听<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCPeerConnectionIceErrorEvent {
    readonly 地址: string;
}

interface RTCRtpReceiver {
    变换: RTCRtpReceiverTransform | null;
}

interface RTCRtpSender {
    变换: RTCRtpSenderTransform | null;
}

interface RTCSctpTransport {
    加事件监听<K extends keyof RTCSctpTransportEventMap>(type: K, listener: (this: RTCSctpTransport, ev: RTCSctpTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCSctpTransportEventMap>(type: K, listener: (this: RTCSctpTransport, ev: RTCSctpTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCSessionDescription {
    readonly 种类: RTCSdpType;
    转数据(): RTCSessionDescriptionInit;
}

interface RTCStatsReport {
    逐个处理(callbackfn: (value: any, key: string, parent: RTCStatsReport) => void, thisArg?: any): void;
}

interface RadioNodeList {
    值内容: string;
}

interface Range {
    取边界矩形(): DOMRect;
    转字符串(): string;
}

interface ReadableByteStreamController {
    关闭(): void;
    报错(e?: any): void;
}

interface ReadableStreamDefaultController<R = any> {
    关闭(): void;
    报错(e?: any): void;
}

interface RemotePlayback {
    加事件监听<K extends keyof RemotePlaybackEventMap>(type: K, listener: (this: RemotePlayback, ev: RemotePlaybackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RemotePlaybackEventMap>(type: K, listener: (this: RemotePlayback, ev: RemotePlaybackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Request {
    readonly 头集合: Headers;
    readonly 地址: string;
}

interface Response {
    readonly 头集合: Headers;
    readonly 是成功: boolean;
    readonly 状态码: number;
    readonly 状态文本: string;
    readonly 种类: ResponseType;
    readonly 地址: string;
}

interface SVGAElement {
    种类: string;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGAngle {
    值内容: number;
}

interface SVGAnimateElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGAnimateMotionElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateMotionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateMotionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGAnimateTransformElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateTransformElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimateTransformElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGAnimationElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimationElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAnimationElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGCircleElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGCircleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGClipPathElement {
    readonly 变换: SVGAnimatedTransformList;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGComponentTransferFunctionElement {
    readonly 种类: SVGAnimatedEnumeration;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGComponentTransferFunctionElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGDefsElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDefsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGDescElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDescElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGDescElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGEllipseElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGEllipseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEBlendElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEBlendElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEColorMatrixElement {
    readonly 种类: SVGAnimatedEnumeration;
    readonly 值列: SVGAnimatedNumberList;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEColorMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEComponentTransferElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEComponentTransferElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFECompositeElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFECompositeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEConvolveMatrixElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEConvolveMatrixElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEDiffuseLightingElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDiffuseLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEDisplacementMapElement {
    readonly 缩放: SVGAnimatedNumber;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDisplacementMapElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEDistantLightElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDistantLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEDropShadowElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDropShadowElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEDropShadowElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEFloodElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFloodElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEFuncAElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEFuncBElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncBElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEFuncGElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEFuncRElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEFuncRElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEGaussianBlurElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEGaussianBlurElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEImageElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEMergeElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEMergeNodeElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMergeNodeElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEMorphologyElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEMorphologyElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEOffsetElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEOffsetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFEPointLightElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFEPointLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFESpecularLightingElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpecularLightingElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFESpotLightElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFESpotLightElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFETileElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETileElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFETurbulenceElement {
    readonly 种类: SVGAnimatedEnumeration;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFilterElement {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFilterPrimitiveStandardAttributes {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
}

interface SVGForeignObjectElement {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGForeignObjectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGGElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGGeometryElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGGradientElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGGraphicsElement {
    readonly 变换: SVGAnimatedTransformList;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGImageElement {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGLength {
    值内容: number;
}

interface SVGLengthList {
    readonly 长度: number;
    清空(): void;
    取条目(index: number): SVGLength;
    删条目(index: number): SVGLength;
}

interface SVGLineElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGLinearGradientElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGLinearGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGMPathElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGMarkerElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGMaskElement {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMaskElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGMetadataElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMetadataElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGNumber {
    值内容: number;
}

interface SVGNumberList {
    readonly 长度: number;
    清空(): void;
    取条目(index: number): SVGNumber;
    删条目(index: number): SVGNumber;
}

interface SVGPathElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGPatternElement {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGPointList {
    readonly 长度: number;
    清空(): void;
    取条目(index: number): DOMPoint;
    删条目(index: number): DOMPoint;
}

interface SVGPolygonElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolygonElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGPolylineElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPolylineElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGRadialGradientElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRadialGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGRectElement {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGSVGElement {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    按编号取元素(elementId: string): Element | null;
    加事件监听<K extends keyof SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGScriptElement {
    种类: string;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGScriptElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGSetElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSetElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGStopElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGStringList {
    readonly 长度: number;
    清空(): void;
    取条目(index: number): string;
    删条目(index: number): string;
}

interface SVGStyleElement {
    标题: string;
    种类: string;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStyleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGSwitchElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSwitchElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGSymbolElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGSymbolElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGTSpanElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTSpanElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGTextContentElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextContentElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGTextElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGTextPathElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGTextPositioningElement {
    readonly 旋转: SVGAnimatedNumberList;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPositioningElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGTitleElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTitleElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGTransform {
    readonly 种类: number;
}

interface SVGTransformList {
    readonly 长度: number;
    清空(): void;
    取条目(index: number): SVGTransform;
    删条目(index: number): SVGTransform;
}

interface SVGURIReference {
    readonly 链接: SVGAnimatedString;
}

interface SVGUseElement {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGUseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGUseElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGViewElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGViewElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGViewElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Sanitizer {
    获取(): SanitizerConfig;
    删属性(attribute: SanitizerAttribute): boolean;
}

interface Screen {
    readonly 高度: number;
    readonly 宽度: number;
}

interface ScreenOrientation {
    readonly 种类: OrientationType;
    加事件监听<K extends keyof ScreenOrientationEventMap>(type: K, listener: (this: ScreenOrientation, ev: ScreenOrientationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ScreenOrientationEventMap>(type: K, listener: (this: ScreenOrientation, ev: ScreenOrientationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ScriptProcessorNode {
    加事件监听<K extends keyof ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ScriptProcessorNodeEventMap>(type: K, listener: (this: ScriptProcessorNode, ev: ScriptProcessorNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Selection {
    readonly 种类: string;
    转字符串(): string;
}

interface ServiceWorker {
    加事件监听<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ServiceWorkerContainer {
    加事件监听<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ServiceWorkerRegistration {
    加事件监听<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ShadowRoot {
    内部标记: string;
    加事件监听<K extends keyof ShadowRootEventMap>(type: K, listener: (this: ShadowRoot, ev: ShadowRootEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ShadowRootEventMap>(type: K, listener: (this: ShadowRoot, ev: ShadowRootEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SharedWorker {
    加事件监听<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SourceBuffer {
    中止(): void;
    移除(start: number, end: number): void;
    加事件监听<K extends keyof SourceBufferEventMap>(type: K, listener: (this: SourceBuffer, ev: SourceBufferEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SourceBufferEventMap>(type: K, listener: (this: SourceBuffer, ev: SourceBufferEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SourceBufferList {
    readonly 长度: number;
    加事件监听<K extends keyof SourceBufferListEventMap>(type: K, listener: (this: SourceBufferList, ev: SourceBufferListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SourceBufferListEventMap>(type: K, listener: (this: SourceBufferList, ev: SourceBufferListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SpeechRecognitionErrorEvent {
    readonly 报错: SpeechRecognitionErrorCode;
}

interface SpeechRecognitionResult {
    readonly 长度: number;
    取项(index: number): SpeechRecognitionAlternative;
}

interface SpeechRecognitionResultList {
    readonly 长度: number;
    取项(index: number): SpeechRecognitionResult;
}

interface SpeechSynthesis {
    加事件监听<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SpeechSynthesisErrorEvent {
    readonly 报错: SpeechSynthesisErrorCode;
}

interface SpeechSynthesisUtterance {
    转文本: string;
    加事件监听<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Storage {
    readonly 长度: number;
    清空(): void;
    取条目(key: string): string | null;
    键名(index: number): string | null;
    删条目(key: string): void;
    设条目(key: string, value: string): void;
}

interface StorageEvent {
    readonly 键名: string | null;
    readonly 地址: string;
}

interface StylePropertyMap {
    后插(property: string, ...values: (CSSStyleValue | string)[]): void;
    清空(): void;
    删除(property: string): void;
    设置(property: string, ...values: (CSSStyleValue | string)[]): void;
}

interface StylePropertyMapReadOnly {
    readonly 大小: number;
    获取(property: string): undefined | CSSStyleValue;
    含有(property: string): boolean;
    逐个处理(callbackfn: (value: CSSStyleValue[], key: string, parent: StylePropertyMapReadOnly) => void, thisArg?: any): void;
}

interface StyleSheet {
    readonly 链接: string | null;
    readonly 标题: string | null;
    readonly 种类: string;
}

interface StyleSheetList {
    readonly 长度: number;
    取项(index: number): CSSStyleSheet | null;
}

interface SubtleCrypto {
    符号(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
}

interface TaskSignal {
    加事件监听<K extends keyof TaskSignalEventMap>(type: K, listener: (this: TaskSignal, ev: TaskSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof TaskSignalEventMap>(type: K, listener: (this: TaskSignal, ev: TaskSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface TextMetrics {
    readonly 宽度: number;
}

interface TextTrack {
    加事件监听<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface TextTrackCue {
    加事件监听<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: TextTrackCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface TextTrackCueList {
    readonly 长度: number;
}

interface TextTrackList {
    readonly 长度: number;
    加事件监听<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface TimeRanges {
    readonly 长度: number;
}

interface TouchList {
    readonly 长度: number;
    取项(index: number): Touch | null;
}

interface TransformStreamDefaultController<O = any> {
    报错(reason?: any): void;
}

interface TreeWalker {
    readonly 过滤: NodeFilter | null;
    首子节点(): Node | null;
    末子节点(): Node | null;
    后兄弟(): Node | null;
    父节点(): Node | null;
    前兄弟(): Node | null;
}

interface URL {
    链接: string;
    转字符串(): string;
    查找: string;
    转数据(): string;
}

interface URLPattern {
    readonly 查找: string;
    执行(input?: URLPatternInput, baseURL?: string | URL): URLPatternResult | null;
    测试(input?: URLPatternInput, baseURL?: string | URL): boolean;
}

interface URLSearchParams {
    readonly 大小: number;
    后插(name: string, value: string): void;
    删除(name: string, value?: string): void;
    获取(name: string): string | null;
    含有(name: string, value?: string): boolean;
    设置(name: string, value: string): void;
    排序(): void;
    转字符串(): string;
    逐个处理(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
}

interface VTTCue {
    大小: number;
    转文本: string;
    加事件监听<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface VTTRegion {
    宽度: number;
}

interface VideoColorSpace {
    转数据(): VideoColorSpaceInit;
}

interface VideoDecoder {
    关闭(): void;
    重置(): void;
    加事件监听<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface VideoEncoder {
    关闭(): void;
    重置(): void;
    加事件监听<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface VideoFrame {
    关闭(): void;
}

interface ViewTransitionTypeSet {
    逐个处理(callbackfn: (value: string, key: string, parent: ViewTransitionTypeSet) => void, thisArg?: any): void;
}

interface VisualViewport {
    readonly 高度: number;
    readonly 缩放: number;
    readonly 宽度: number;
    加事件监听<K extends keyof VisualViewportEventMap>(type: K, listener: (this: VisualViewport, ev: VisualViewportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof VisualViewportEventMap>(type: K, listener: (this: VisualViewport, ev: VisualViewportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface WGSLLanguageFeatures {
    逐个处理(callbackfn: (value: string, key: string, parent: WGSLLanguageFeatures) => void, thisArg?: any): void;
}

interface WakeLockSentinel {
    readonly 种类: WakeLockType;
    加事件监听<K extends keyof WakeLockSentinelEventMap>(type: K, listener: (this: WakeLockSentinel, ev: WakeLockSentinelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof WakeLockSentinelEventMap>(type: K, listener: (this: WakeLockSentinel, ev: WakeLockSentinelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface WebGL2RenderingContextBase {
    readonly 最小: 0x8007;
    readonly 最大: 0x8008;
}

interface WebGLActiveInfo {
    readonly 大小: GLint;
    readonly 种类: GLenum;
}

interface WebGLRenderingContextBase {
    清空(mask: GLbitfield): void;
    readonly 替换: 0x1E01;
    readonly 重复: 0x2901;
}

interface WebSocket {
    readonly 地址: string;
    关闭(code?: number, reason?: string): void;
    发送(data: BufferSource | Blob | string): void;
    readonly 打开: 1;
    加事件监听<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface WebTransport {
    关闭(closeInfo?: WebTransportCloseInfo): void;
}

interface Window {
    readonly 长度: number;
    状态码: string;
    失焦(): void;
    关闭(): void;
    聚焦(): void;
    移到(x: number, y: number): void;
    打开(url?: string | URL, target?: string, features?: string): WindowProxy | null;
    加事件监听<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface WindowEventHandlers {
    加事件监听<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Worker {
    加事件监听<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface WritableStream<W = any> {
    中止(reason?: any): Promise<void>;
    关闭(): Promise<void>;
}

interface WritableStreamDefaultController {
    报错(e?: any): void;
}

interface WritableStreamDefaultWriter<W = any> {
    中止(reason?: any): Promise<void>;
    关闭(): Promise<void>;
    写入(chunk?: W): Promise<void>;
}

interface XMLDocument {
    加事件监听<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface XMLHttpRequest {
    readonly 状态码: number;
    readonly 状态文本: string;
    中止(): void;
    取响应头(name: string): string | null;
    打开(method: string, url: string | URL): void;
    打开(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
    发送(body?: Document | XMLHttpRequestBodyInit | null): void;
    设请求头(name: string, value: string): void;
    readonly 已完成: 4;
    加事件监听<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface XMLHttpRequestEventTarget {
    加事件监听<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface XMLHttpRequestUpload {
    加事件监听<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface XSLTProcessor {
    重置(): void;
}

interface Console {
    清空(): void;
    报错(...data: any[]): void;
    日志(...data: any[]): void;
    警告(...data: any[]): void;
}

interface CSSNumericArray {
    条目(): ArrayIterator<[number, CSSNumericValue]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<CSSNumericValue>;
}

interface CSSTransformValue {
    条目(): ArrayIterator<[number, CSSTransformComponent]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<CSSTransformComponent>;
}

interface CSSUnparsedValue {
    条目(): ArrayIterator<[number, CSSUnparsedSegment]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<CSSUnparsedSegment>;
}

interface DOMTokenList {
    条目(): ArrayIterator<[number, string]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<string>;
}

interface FormData {
    条目(): FormDataIterator<[string, FormDataEntryValue]>;
    键列(): FormDataIterator<string>;
    值列(): FormDataIterator<FormDataEntryValue>;
}

interface GPUQueue {
    提交(commandBuffers: Iterable<GPUCommandBuffer>): void;
}

interface Headers {
    条目(): HeadersIterator<[string, string]>;
    键列(): HeadersIterator<string>;
    值列(): HeadersIterator<string>;
}

interface MIDIOutput {
    发送(data: Iterable<number>, timestamp?: DOMHighResTimeStamp): void;
}

interface MediaKeyStatusMap {
    条目(): MediaKeyStatusMapIterator<[BufferSource, MediaKeyStatus]>;
    键列(): MediaKeyStatusMapIterator<BufferSource>;
    值列(): MediaKeyStatusMapIterator<MediaKeyStatus>;
}

interface NodeList {
    条目(): ArrayIterator<[number, Node]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<Node>;
}

interface NodeListOf<TNode extends Node> {
    条目(): ArrayIterator<[number, TNode]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<TNode>;
}

interface StylePropertyMapReadOnly {
    条目(): StylePropertyMapReadOnlyIterator<[string, Iterable<CSSStyleValue>]>;
    键列(): StylePropertyMapReadOnlyIterator<string>;
    值列(): StylePropertyMapReadOnlyIterator<Iterable<CSSStyleValue>>;
}

interface URLSearchParams {
    条目(): URLSearchParamsIterator<[string, string]>;
    键列(): URLSearchParamsIterator<string>;
    值列(): URLSearchParamsIterator<string>;
}

interface FileSystemDirectoryHandle {
    条目(): FileSystemDirectoryHandleAsyncIterator<[string, FileSystemDirectoryHandle | FileSystemFileHandle]>;
    键列(): FileSystemDirectoryHandleAsyncIterator<string>;
    值列(): FileSystemDirectoryHandleAsyncIterator<FileSystemDirectoryHandle | FileSystemFileHandle>;
}

interface ReadableStream<R = any> {
    值列(options?: ReadableStreamIteratorOptions): ReadableStreamAsyncIterator<R>;
}

interface Map<K, V> {
    清空(): void;
    删除(key: K): boolean;
    逐个处理(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    获取(key: K): V | undefined;
    含有(key: K): boolean;
    设置(key: K, value: V): this;
    readonly 大小: number;
}

interface ReadonlyMap<K, V> {
    逐个处理(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;
    获取(key: K): V | undefined;
    含有(key: K): boolean;
    readonly 大小: number;
}

interface WeakMap<K extends WeakKey, V> {
    删除(key: K): boolean;
    获取(key: K): V | undefined;
    含有(key: K): boolean;
    设置(key: K, value: V): this;
}

interface Set<T> {
    添加(value: T): this;
    清空(): void;
    删除(value: T): boolean;
    逐个处理(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
    含有(value: T): boolean;
    readonly 大小: number;
}

interface ReadonlySet<T> {
    逐个处理(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void;
    含有(value: T): boolean;
    readonly 大小: number;
}

interface WeakSet<T extends WeakKey> {
    添加(value: T): this;
    删除(value: T): boolean;
    含有(value: T): boolean;
}

interface Array<T> {
    找出<S extends T>(predicate: (value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    找出(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
    找出序号(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
    填充(value: T, start?: number, end?: number): this;
    内部复制(target: number, start: number, end?: number): this;
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
}

interface Math {
    前导零位数(x: number): number;
    整数乘(x: number, y: number): number;
    符号(x: number): number;
    对数十(x: number): number;
    对数二(x: number): number;
    双曲余弦(x: number): number;
    双曲正弦(x: number): number;
    双曲正切(x: number): number;
    斜边长(...values: number[]): number;
    截断(x: number): number;
    单精度(x: number): number;
    立方根(x: number): number;
}

interface ObjectConstructor {
    合入<T extends {}, U>(target: T, source: U): T & U;
    合入<T extends {}, U, V>(target: T, source1: U, source2: V): T & U & V;
    合入<T extends {}, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
    合入(target: object, ...sources: any[]): any;
    取自有符号(o: any): symbol[];
    键列(o: {}): string[];
    设原型(o: any, proto: object | null): any;
}

interface ReadonlyArray<T> {
    找出<S extends T>(predicate: (value: T, index: number, obj: readonly T[]) => value is S, thisArg?: any): S | undefined;
    找出(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): T | undefined;
    找出序号(predicate: (value: T, index: number, obj: readonly T[]) => unknown, thisArg?: any): number;
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
}

interface String {
    取码点(pos: number): number | undefined;
    包含(searchString: string, position?: number): boolean;
    以结尾(searchString: string, endPosition?: number): boolean;
    规范化(form: "NFC" | "NFD" | "NFKC" | "NFKD"): string;
    规范化(form?: string): string;
    重复(count: number): string;
    以开头(searchString: string, position?: number): boolean;
}

interface Int8Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Uint8Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Int16Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Uint16Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Int32Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Uint32Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Float32Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Float64Array<TArrayBuffer extends ArrayBufferLike> {
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions): string;
}

interface Generator<T = unknown, TReturn = any, TNext = any> {
    下一个(...[value]: [] | [TNext]): IteratorResult<T, TReturn>;
}

interface GeneratorFunction {
    readonly 长度: number;
}

interface GeneratorFunctionConstructor {
    readonly 长度: number;
}

interface IteratorYieldResult<TYield> {
    已完成?: false;
    值内容: TYield;
}

interface IteratorReturnResult<TReturn> {
    已完成: true;
    值内容: TReturn;
}

interface Iterator<T, TReturn = any, TNext = any> {
    下一个(...[value]: [] | [TNext]): IteratorResult<T, TReturn>;
}

interface Array<T> {
    条目(): ArrayIterator<[number, T]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<T>;
}

interface ReadonlyArray<T> {
    条目(): ArrayIterator<[number, T]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<T>;
}

interface Map<K, V> {
    条目(): MapIterator<[K, V]>;
    键列(): MapIterator<K>;
    值列(): MapIterator<V>;
}

interface ReadonlyMap<K, V> {
    条目(): MapIterator<[K, V]>;
    键列(): MapIterator<K>;
    值列(): MapIterator<V>;
}

interface PromiseConstructor {
    全部<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]>; }>;
    竞速<T extends readonly unknown[] | []>(values: T): Promise<Awaited<T[number]>>;
    拒绝<T = never>(reason?: any): Promise<T>;
    解决(): Promise<void>;
    解决<T>(value: T): Promise<Awaited<T>>;
    解决<T>(value: T | PromiseLike<T>): Promise<Awaited<T>>;
}

interface ProxyHandler<T extends object> {
    定义属性?(target: T, property: string | symbol, attributes: PropertyDescriptor): boolean;
    获取?(target: T, p: string | symbol, receiver: any): any;
    取自有描述?(target: T, p: string | symbol): PropertyDescriptor | undefined;
    取原型?(target: T): object | null;
    含有?(target: T, p: string | symbol): boolean;
    是可扩展?(target: T): boolean;
    止扩展?(target: T): boolean;
    设置?(target: T, p: string | symbol, newValue: any, receiver: any): boolean;
    设原型?(target: T, v: object | null): boolean;
}

interface SymbolConstructor {
    readonly 匹配: unique symbol;
    readonly 替换: unique symbol;
    readonly 查找: unique symbol;
    readonly 拆分: unique symbol;
}

interface String {
    匹配(matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null;
    替换(searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string;
    替换(searchValue: { [Symbol.replace](string: string, replacer: (substring: string, ...args: any[]) => string): string; }, replacer: (substring: string, ...args: any[]) => string): string;
    查找(searcher: { [Symbol.search](string: string): number; }): number;
    拆分(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];
}

interface Array<T> {
    包含(searchElement: T, fromIndex?: number): boolean;
}

interface ReadonlyArray<T> {
    包含(searchElement: T, fromIndex?: number): boolean;
}

interface Int8Array<TArrayBuffer extends ArrayBufferLike> {
    包含(searchElement: number, fromIndex?: number): boolean;
}

interface Uint8Array<TArrayBuffer extends ArrayBufferLike> {
    包含(searchElement: number, fromIndex?: number): boolean;
}

interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike> {
    包含(searchElement: number, fromIndex?: number): boolean;
}

interface Int16Array<TArrayBuffer extends ArrayBufferLike> {
    包含(searchElement: number, fromIndex?: number): boolean;
}

interface Uint16Array<TArrayBuffer extends ArrayBufferLike> {
    包含(searchElement: number, fromIndex?: number): boolean;
}

interface Int32Array<TArrayBuffer extends ArrayBufferLike> {
    包含(searchElement: number, fromIndex?: number): boolean;
}

interface Uint32Array<TArrayBuffer extends ArrayBufferLike> {
    包含(searchElement: number, fromIndex?: number): boolean;
}

interface Float32Array<TArrayBuffer extends ArrayBufferLike> {
    包含(searchElement: number, fromIndex?: number): boolean;
}

interface Float64Array<TArrayBuffer extends ArrayBufferLike> {
    包含(searchElement: number, fromIndex?: number): boolean;
}

interface ObjectConstructor {
    值列<T>(o: { [s: string]: T; } | ArrayLike<T>): T[];
    值列(o: {}): any[];
    条目<T>(o: { [s: string]: T; } | ArrayLike<T>): [string, T][];
    条目(o: {}): [string, any][];
}

interface SharedArrayBuffer {
    截取(begin?: number, end?: number): SharedArrayBuffer;
}

interface Atomics {
    添加(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number, value: number): number;
}

interface String {
    前补(targetLength: number, padString?: string): string;
    后补(targetLength: number, padString?: string): string;
}

interface AsyncGenerator<T = unknown, TReturn = any, TNext = any> {
    下一个(...[value]: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
}

interface AsyncGeneratorFunction {
    readonly 长度: number;
}

interface AsyncGeneratorFunctionConstructor {
    readonly 长度: number;
}

interface AsyncIterator<T, TReturn = any, TNext = any> {
    下一个(...[value]: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
}

interface Promise<T> {
    最终(onfinally?: (() => void) | undefined | null): Promise<T>;
}

interface ObjectConstructor {
    由条目<T = any>(entries: Iterable<readonly [PropertyKey, T]>): { [k: string]: T; };
    由条目(entries: Iterable<readonly any[]>): any;
}

interface String {
    去尾空白(): string;
    去头空白(): string;
}

interface BigIntToLocaleStringOptions {
    样式?: string;
}

interface BigInt {
    转字符串(radix?: number): string;
    本地转字符串(locales?: Intl.LocalesArgument, options?: BigIntToLocaleStringOptions): string;
    取值(): bigint;
}

interface BigInt64Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    内部复制(target: number, start: number, end?: number): this;
    条目(): ArrayIterator<[number, bigint]>;
    全部满足(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => boolean, thisArg?: any): boolean;
    填充(value: bigint, start?: number, end?: number): this;
    过滤(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => any, thisArg?: any): BigInt64Array<ArrayBuffer>;
    找出(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => boolean, thisArg?: any): bigint | undefined;
    找出序号(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => boolean, thisArg?: any): number;
    逐个处理(callbackfn: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => void, thisArg?: any): void;
    包含(searchElement: bigint, fromIndex?: number): boolean;
    找序号(searchElement: bigint, fromIndex?: number): number;
    连接成串(separator?: string): string;
    键列(): ArrayIterator<number>;
    末次序号(searchElement: bigint, fromIndex?: number): number;
    readonly 长度: number;
    映射(callbackfn: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => bigint, thisArg?: any): BigInt64Array<ArrayBuffer>;
    归纳(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array<TArrayBuffer>) => bigint): bigint;
    归纳<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array<TArrayBuffer>) => U, initialValue: U): U;
    反向归纳(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigInt64Array<TArrayBuffer>) => bigint): bigint;
    反向归纳<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigInt64Array<TArrayBuffer>) => U, initialValue: U): U;
    反转(): this;
    设置(array: ArrayLike<bigint>, offset?: number): void;
    截取(start?: number, end?: number): BigInt64Array<ArrayBuffer>;
    存在满足(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => boolean, thisArg?: any): boolean;
    排序(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
    本地转字符串(locales?: string | string[], options?: Intl.NumberFormatOptions): string;
    转字符串(): string;
    取值(): BigInt64Array<TArrayBuffer>;
    值列(): ArrayIterator<bigint>;
}

interface BigUint64Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    内部复制(target: number, start: number, end?: number): this;
    条目(): ArrayIterator<[number, bigint]>;
    全部满足(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => boolean, thisArg?: any): boolean;
    填充(value: bigint, start?: number, end?: number): this;
    过滤(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => any, thisArg?: any): BigUint64Array<ArrayBuffer>;
    找出(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => boolean, thisArg?: any): bigint | undefined;
    找出序号(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => boolean, thisArg?: any): number;
    逐个处理(callbackfn: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => void, thisArg?: any): void;
    包含(searchElement: bigint, fromIndex?: number): boolean;
    找序号(searchElement: bigint, fromIndex?: number): number;
    连接成串(separator?: string): string;
    键列(): ArrayIterator<number>;
    末次序号(searchElement: bigint, fromIndex?: number): number;
    readonly 长度: number;
    映射(callbackfn: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => bigint, thisArg?: any): BigUint64Array<ArrayBuffer>;
    归纳(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array<TArrayBuffer>) => bigint): bigint;
    归纳<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array<TArrayBuffer>) => U, initialValue: U): U;
    反向归纳(callbackfn: (previousValue: bigint, currentValue: bigint, currentIndex: number, array: BigUint64Array<TArrayBuffer>) => bigint): bigint;
    反向归纳<U>(callbackfn: (previousValue: U, currentValue: bigint, currentIndex: number, array: BigUint64Array<TArrayBuffer>) => U, initialValue: U): U;
    反转(): this;
    设置(array: ArrayLike<bigint>, offset?: number): void;
    截取(start?: number, end?: number): BigUint64Array<ArrayBuffer>;
    存在满足(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => boolean, thisArg?: any): boolean;
    排序(compareFn?: (a: bigint, b: bigint) => number | bigint): this;
    本地转字符串(locales?: string | string[], options?: Intl.NumberFormatOptions): string;
    转字符串(): string;
    取值(): BigUint64Array<TArrayBuffer>;
    值列(): ArrayIterator<bigint>;
}

interface Date {
    本地转字符串(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
    本地日期串(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
    本地时刻串(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
}

interface Number {
    本地转字符串(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
}

interface PromiseFulfilledResult<T> {
    状态码: "fulfilled";
    值内容: T;
}

interface PromiseRejectedResult {
    状态码: "rejected";
}

interface Atomics {
    添加(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, value: bigint): bigint;
}

interface String {
    全匹配(regexp: RegExp): RegExpStringIterator<RegExpExecArray>;
    本地比较(that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions): number;
}

interface SymbolConstructor {
    readonly 全匹配: unique symbol;
}

interface String {
    全替换(searchValue: string | RegExp, replaceValue: string): string;
    全替换(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;
}

interface Array<T> {
    取第(index: number): T | undefined;
}

interface ReadonlyArray<T> {
    取第(index: number): T | undefined;
}

interface Int8Array<TArrayBuffer extends ArrayBufferLike> {
    取第(index: number): number | undefined;
}

interface Uint8Array<TArrayBuffer extends ArrayBufferLike> {
    取第(index: number): number | undefined;
}

interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike> {
    取第(index: number): number | undefined;
}

interface Int16Array<TArrayBuffer extends ArrayBufferLike> {
    取第(index: number): number | undefined;
}

interface Uint16Array<TArrayBuffer extends ArrayBufferLike> {
    取第(index: number): number | undefined;
}

interface Int32Array<TArrayBuffer extends ArrayBufferLike> {
    取第(index: number): number | undefined;
}

interface Uint32Array<TArrayBuffer extends ArrayBufferLike> {
    取第(index: number): number | undefined;
}

interface Float32Array<TArrayBuffer extends ArrayBufferLike> {
    取第(index: number): number | undefined;
}

interface Float64Array<TArrayBuffer extends ArrayBufferLike> {
    取第(index: number): number | undefined;
}

interface BigInt64Array<TArrayBuffer extends ArrayBufferLike> {
    取第(index: number): bigint | undefined;
}

interface BigUint64Array<TArrayBuffer extends ArrayBufferLike> {
    取第(index: number): bigint | undefined;
}

interface String {
    取第(index: number): string | undefined;
}

interface PromiseWithResolvers<T> {
    解决: (value: T | PromiseLike<T>) => void;
    拒绝: (reason?: any) => void;
}

interface ReadonlySetLike<T> {
    键列(): Iterator<T>;
    含有(value: T): boolean;
    readonly 大小: number;
}

interface Float16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    取第(index: number): number | undefined;
    内部复制(target: number, start: number, end?: number): this;
    全部满足(predicate: (value: number, index: number, array: this) => unknown, thisArg?: any): boolean;
    填充(value: number, start?: number, end?: number): this;
    过滤(predicate: (value: number, index: number, array: this) => any, thisArg?: any): Float16Array<ArrayBuffer>;
    找出(predicate: (value: number, index: number, obj: this) => boolean, thisArg?: any): number | undefined;
    找出序号(predicate: (value: number, index: number, obj: this) => boolean, thisArg?: any): number;
    逐个处理(callbackfn: (value: number, index: number, array: this) => void, thisArg?: any): void;
    包含(searchElement: number, fromIndex?: number): boolean;
    找序号(searchElement: number, fromIndex?: number): number;
    连接成串(separator?: string): string;
    末次序号(searchElement: number, fromIndex?: number): number;
    readonly 长度: number;
    映射(callbackfn: (value: number, index: number, array: this) => number, thisArg?: any): Float16Array<ArrayBuffer>;
    归纳(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number): number;
    归纳(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number, initialValue: number): number;
    归纳<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: this) => U, initialValue: U): U;
    反向归纳(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number): number;
    反向归纳(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: this) => number, initialValue: number): number;
    反向归纳<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: this) => U, initialValue: U): U;
    反转(): this;
    设置(array: ArrayLike<number>, offset?: number): void;
    截取(start?: number, end?: number): Float16Array<ArrayBuffer>;
    存在满足(predicate: (value: number, index: number, array: this) => unknown, thisArg?: any): boolean;
    排序(compareFn?: (a: number, b: number) => number): this;
    本地转字符串(locales?: string | string[], options?: Intl.NumberFormatOptions): string;
    转字符串(): string;
    取值(): this;
    条目(): ArrayIterator<[number, number]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<number>;
}

interface Symbol {
    转字符串(): string;
    取值(): symbol;
}

interface PropertyDescriptor {
    值内容?: any;
    获取?(): any;
    设置?(v: any): void;
}

interface Object {
    转字符串(): string;
    本地转字符串(): string;
    取值(): Object;
    有自有属性(v: PropertyKey): boolean;
    是原型(v: Object): boolean;
    属性可枚举(v: PropertyKey): boolean;
}

interface ObjectConstructor {
    取原型(o: any): any;
    取自有描述(o: any, p: PropertyKey): PropertyDescriptor | undefined;
    取自有属性名(o: any): string[];
    创建(o: object | null): any;
    创建(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;
    定义属性<T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): T;
    密封<T>(o: T): T;
    冻结<T extends Function>(f: T): T;
    冻结<T extends { [idx: string]: U | null | undefined | object; }, U extends string | bigint | number | boolean | symbol>(o: T): Readonly<T>;
    冻结<T>(o: T): Readonly<T>;
    止扩展<T>(o: T): T;
    是密封(o: any): boolean;
    是冻结(o: any): boolean;
    是可扩展(o: any): boolean;
    键列(o: object): string[];
}

interface Function {
    转字符串(): string;
    readonly 长度: number;
}

interface IArguments {
    长度: number;
}

interface String {
    转字符串(): string;
    取字符(pos: number): string;
    取字符码(index: number): number;
    拼接(...strings: string[]): string;
    找序号(searchString: string, position?: number): number;
    末次序号(searchString: string, position?: number): number;
    本地比较(that: string): number;
    匹配(regexp: string | RegExp): RegExpMatchArray | null;
    替换(searchValue: string | RegExp, replaceValue: string): string;
    替换(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;
    查找(regexp: string | RegExp): number;
    截取(start?: number, end?: number): string;
    拆分(separator: string | RegExp, limit?: number): string[];
    取子串(start: number, end?: number): string;
    转小写(): string;
    转大写(): string;
    去空白(): string;
    readonly 长度: number;
    取值(): string;
}

interface Boolean {
    取值(): boolean;
}

interface Number {
    转字符串(radix?: number): string;
    定点(fractionDigits?: number): string;
    指数记法(fractionDigits?: number): string;
    定精度(precision?: number): string;
    取值(): number;
}

interface Math {
    绝对值(x: number): number;
    反余弦(x: number): number;
    反正弦(x: number): number;
    反正切(x: number): number;
    反正切二(y: number, x: number): number;
    向上取整(x: number): number;
    余弦(x: number): number;
    指数(x: number): number;
    向下取整(x: number): number;
    日志(x: number): number;
    最大(...values: number[]): number;
    最小(...values: number[]): number;
    乘方(x: number, y: number): number;
    随机(): number;
    四舍五入(x: number): number;
    正弦(x: number): number;
    平方根(x: number): number;
    正切(x: number): number;
}

interface Date {
    转字符串(): string;
    转日期串(): string;
    转时刻串(): string;
    本地转字符串(): string;
    本地日期串(): string;
    本地时刻串(): string;
    取值(): number;
    取时刻(): number;
    取年(): number;
    取世界年(): number;
    取月(): number;
    取日(): number;
    取星期(): number;
    取时(): number;
    取分(): number;
    取秒(): number;
    取毫秒(): number;
    取时区偏移(): number;
    设时刻(time: number): number;
    设毫秒(ms: number): number;
    设秒(sec: number, ms?: number): number;
    设分(min: number, sec?: number, ms?: number): number;
    设时(hours: number, min?: number, sec?: number, ms?: number): number;
    设日(date: number): number;
    设月(month: number, date?: number): number;
    设年(year: number, month?: number, date?: number): number;
    转国际串(): string;
    转数据(key?: any): string;
}

interface DateConstructor {
    解析(s: string): number;
    此刻(): number;
}

interface RegExp {
    执行(string: string): RegExpExecArray | null;
    测试(string: string): boolean;
}

interface JSON {
    解析(text: string, reviver?: (this: any, key: string, value: any) => any): any;
    序列化(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    序列化(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
}

interface ReadonlyArray<T> {
    readonly 长度: number;
    转字符串(): string;
    本地转字符串(): string;
    拼接(...items: ConcatArray<T>[]): T[];
    拼接(...items: (T | ConcatArray<T>)[]): T[];
    连接成串(separator?: string): string;
    截取(start?: number, end?: number): T[];
    找序号(searchElement: T, fromIndex?: number): number;
    末次序号(searchElement: T, fromIndex?: number): number;
    全部满足<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): this is readonly S[];
    全部满足(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;
    存在满足(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): boolean;
    逐个处理(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;
    映射<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[];
    过滤<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[];
    过滤(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[];
    归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;
    归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;
    归纳<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;
    反向归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T): T;
    反向归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: readonly T[]) => T, initialValue: T): T;
    反向归纳<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U, initialValue: U): U;
}

interface ConcatArray<T> {
    readonly 长度: number;
    连接成串(separator?: string): string;
    截取(start?: number, end?: number): T[];
}

interface Array<T> {
    长度: number;
    转字符串(): string;
    本地转字符串(): string;
    末尾弹出(): T | undefined;
    追加(...items: T[]): number;
    拼接(...items: ConcatArray<T>[]): T[];
    拼接(...items: (T | ConcatArray<T>)[]): T[];
    连接成串(separator?: string): string;
    反转(): T[];
    开头弹出(): T | undefined;
    截取(start?: number, end?: number): T[];
    排序(compareFn?: (a: T, b: T) => number): this;
    剪接(start: number, deleteCount?: number): T[];
    剪接(start: number, deleteCount: number, ...items: T[]): T[];
    开头插入(...items: T[]): number;
    找序号(searchElement: T, fromIndex?: number): number;
    末次序号(searchElement: T, fromIndex?: number): number;
    全部满足<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): this is S[];
    全部满足(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    存在满足(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
    逐个处理(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    映射<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    过滤<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    过滤(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    归纳<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    反向归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    反向归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    反向归纳<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
}

interface TypedPropertyDescriptor<T> {
    值内容?: T;
    获取?: () => T;
    设置?: (value: T) => void;
}

interface PromiseLike<T> {
    然后<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): PromiseLike<TResult1 | TResult2>;
}

interface Promise<T> {
    然后<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
}

interface ArrayLike<T> {
    readonly 长度: number;
}

interface SuppressedError {
    报错: any;
}

