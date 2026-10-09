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

interface CSSNumericType {
    长度?: number;
}

interface DoubleRange {
    最大?: number;
    最小?: number;
}

interface EffectTiming {
    填充?: FillMode;
}

interface ErrorEventInit {
    报错?: any;
}

interface GPUBufferBinding {
    大小?: GPUSize64;
}

interface GPUBufferDescriptor {
    大小: GPUSize64;
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

interface KeyboardEventInit {
    重复?: boolean;
}

interface MediaSettingsRange {
    最大?: number;
    最小?: number;
}

interface OfflineAudioContextOptions {
    长度: number;
}

interface OptionalEffectTiming {
    填充?: FillMode;
}

interface PaymentDetailsUpdate {
    报错?: string;
}

interface PaymentValidationErrors {
    报错?: string;
}

interface QueuingStrategy<T = any> {
    大小?: QueuingStrategySize<T>;
}

interface RTCErrorEventInit {
    报错: RTCError;
}

interface ReadableStreamBYOBReaderReadOptions {
    最小?: number;
}

interface SVGBoundingBoxOptions {
    填充?: boolean;
}

interface SpeechRecognitionErrorEventInit {
    报错: SpeechRecognitionErrorCode;
}

interface SpeechSynthesisErrorEventInit {
    报错: SpeechSynthesisErrorCode;
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

interface VideoDecoderInit {
    报错: WebCodecsErrorCallback;
}

interface VideoEncoderInit {
    报错: WebCodecsErrorCallback;
}

interface WriteParams {
    大小?: number | null;
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
    加事件监听<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AudioDecoder {
    加事件监听<K extends keyof AudioDecoderEventMap>(type: K, listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioDecoderEventMap>(type: K, listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AudioEncoder {
    加事件监听<K extends keyof AudioEncoderEventMap>(type: K, listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioEncoderEventMap>(type: K, listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
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

interface Blob {
    readonly 大小: number;
    截取(start?: number, end?: number, contentType?: string): Blob;
}

interface BroadcastChannel {
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

interface CSSKeyframesRule {
    readonly 长度: number;
}

interface CSSNumericArray {
    readonly 长度: number;
    逐个处理(callbackfn: (value: CSSNumericValue, key: number, parent: CSSNumericArray) => void, thisArg?: any): void;
}

interface CSSNumericValue {
    添加(...values: CSSNumberish[]): CSSNumericValue;
    最大(...values: CSSNumberish[]): CSSNumericValue;
    最小(...values: CSSNumberish[]): CSSNumericValue;
}

interface CSSPageDescriptors {
    大小: string;
}

interface CSSPerspective {
    长度: CSSPerspectiveValue;
}

interface CSSRuleList {
    readonly 长度: number;
}

interface CSSStyleDeclarationBase {
    readonly 长度: number;
}

interface CSSStyleProperties {
    全部: string;
    清空: string;
    填充: string;
    过滤: string;
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

interface CSSUnparsedValue {
    readonly 长度: number;
    逐个处理(callbackfn: (value: CSSUnparsedSegment, key: number, parent: CSSUnparsedValue) => void, thisArg?: any): void;
}

interface Cache {
    添加(request: RequestInfo | URL): Promise<void>;
    删除(request: RequestInfo | URL, options?: CacheQueryOptions): Promise<boolean>;
    匹配(request: RequestInfo | URL, options?: CacheQueryOptions): Promise<Response | undefined>;
    全匹配(request?: RequestInfo | URL, options?: CacheQueryOptions): Promise<ReadonlyArray<Response>>;
}

interface CacheStorage {
    删除(cacheName: string): Promise<boolean>;
    含有(cacheName: string): Promise<boolean>;
    匹配(request: RequestInfo | URL, options?: MultiCacheQueryOptions): Promise<Response | undefined>;
}

interface CanvasCaptureMediaStreamTrack {
    加事件监听<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: CanvasCaptureMediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: CanvasCaptureMediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface CanvasDrawPath {
    填充(fillRule?: CanvasFillRule): void;
    填充(path: Path2D, fillRule?: CanvasFillRule): void;
}

interface CanvasFilters {
    过滤: string;
}

interface CharacterData {
    readonly 长度: number;
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

interface CredentialsContainer {
    获取(options?: CredentialRequestOptions): Promise<Credential | null>;
}

interface CustomElementRegistry {
    获取(name: string): CustomElementConstructor | undefined;
}

interface CustomStateSet {
    逐个处理(callbackfn: (value: string, key: string, parent: CustomStateSet) => void, thisArg?: any): void;
}

interface DOMMatrixReadOnly {
    转字符串(): string;
}

interface DOMRectList {
    readonly 长度: number;
}

interface DOMStringList {
    readonly 长度: number;
}

interface DOMTokenList {
    readonly 长度: number;
    转字符串(): string;
    添加(...tokens: string[]): void;
    替换(token: string, newToken: string): boolean;
    逐个处理(callbackfn: (value: string, key: number, parent: DOMTokenList) => void, thisArg?: any): void;
}

interface DataTransferItemList {
    readonly 长度: number;
    添加(data: string, type: string): DataTransferItem | null;
    添加(data: File): DataTransferItem | null;
    清空(): void;
}

interface Document {
    readonly 全部: HTMLAllCollection;
    清空(): void;
    按编号取元素(elementId: string): HTMLElement | null;
    加事件监听<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface DocumentFragment {
    按编号取元素(elementId: string): HTMLElement | null;
}

interface Element {
    取属性(qualifiedName: string): string | null;
    设置属性(qualifiedName: string, value: string): void;
    加事件监听<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ErrorEvent {
    readonly 报错: any;
}

interface EventCounts {
    逐个处理(callbackfn: (value: number, key: string, parent: EventCounts) => void, thisArg?: any): void;
}

interface EventSource {
    加事件监听<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: (this: EventSource, event: MessageEvent) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: (this: EventSource, event: MessageEvent) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface EventTarget {
    加事件监听(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    去事件监听(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}

interface FileList {
    readonly 长度: number;
}

interface FileReader {
    readonly 报错: DOMException | null;
    加事件监听<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface FileSystemDirectoryHandle {
    解决(possibleDescendant: FileSystemHandle): Promise<string[] | null>;
}

interface FontFaceSet {
    逐个处理(callbackfn: (value: FontFace, key: FontFace, parent: FontFaceSet) => void, thisArg?: any): void;
    加事件监听<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface FormData {
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
}

interface GPUDevice {
    加事件监听<K extends keyof GPUDeviceEventMap>(type: K, listener: (this: GPUDevice, ev: GPUDeviceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof GPUDeviceEventMap>(type: K, listener: (this: GPUDevice, ev: GPUDeviceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface GPUSupportedFeatures {
    逐个处理(callbackfn: (value: string, key: string, parent: GPUSupportedFeatures) => void, thisArg?: any): void;
}

interface GPUUncapturedErrorEvent {
    readonly 报错: GPUError;
}

interface GlobalEventHandlers {
    加事件监听<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof GlobalEventHandlersEventMap>(type: K, listener: (this: GlobalEventHandlers, ev: GlobalEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLAllCollection {
    readonly 长度: number;
}

interface HTMLAnchorElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLAreaElement {
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
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLBaseElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLBodyElement {
    加事件监听<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLBodyElementEventMap>(type: K, listener: (this: HTMLBodyElement, ev: HTMLBodyElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLButtonElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLCanvasElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLCanvasElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLCollectionBase {
    readonly 长度: number;
}

interface HTMLDListElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLDataElement {
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
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLDialogElement {
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
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLEmbedElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLFieldSetElement {
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
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLFrameElement {
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
    转字符串(): string;
    查找: string;
}

interface HTMLIFrameElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLImageElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLInputElement {
    最大: string;
    最小: string;
    大小: number;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLInputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLLIElement {
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
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLMediaElement {
    readonly 报错: MediaError | null;
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
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLObjectElement {
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
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLOptionsCollection {
    长度: number;
    添加(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
}

interface HTMLOutputElement {
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
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLPreElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLProgressElement {
    最大: number;
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
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLSelectElement {
    长度: number;
    大小: number;
    添加(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLSlotElement {
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLSourceElement {
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
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableColElement {
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
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTitleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTrackElement {
    readonly 报错: 3;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTrackElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLUListElement {
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
    加事件监听<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Headers {
    删除(name: string): void;
    获取(name: string): string | null;
    含有(name: string): boolean;
    设置(name: string, value: string): void;
    逐个处理(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void;
}

interface Highlight {
    逐个处理(callbackfn: (value: AbstractRange, key: AbstractRange, parent: Highlight) => void, thisArg?: any): void;
}

interface HighlightRegistry {
    逐个处理(callbackfn: (value: Highlight, key: string, parent: HighlightRegistry) => void, thisArg?: any): void;
}

interface History {
    readonly 长度: number;
}

interface IDBCursor {
    删除(): IDBRequest<undefined>;
}

interface IDBDatabase {
    加事件监听<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
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
    加事件监听<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ImageTrackList {
    readonly 长度: number;
}

interface ImportMeta {
    解决(specifier: string): string;
}

interface KeyboardEvent {
    readonly 重复: boolean;
}

interface LargestContentfulPaint {
    readonly 大小: number;
}

interface Location {
    转字符串(): string;
    查找: string;
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
    加事件监听<K extends keyof MIDIPortEventMap>(type: K, listener: (this: MIDIOutput, ev: MIDIPortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MIDIPortEventMap>(type: K, listener: (this: MIDIOutput, ev: MIDIPortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MIDIOutputMap {
    逐个处理(callbackfn: (value: MIDIOutput, key: string, parent: MIDIOutputMap) => void, thisArg?: any): void;
}

interface MIDIPort {
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

interface MediaDevices {
    加事件监听<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaKeySession {
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
}

interface MediaQueryList {
    加事件监听<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
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
    加事件监听<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MimeTypeArray {
    readonly 长度: number;
}

interface NamedNodeMap {
    readonly 长度: number;
}

interface Navigation {
    加事件监听<K extends keyof NavigationEventMap>(type: K, listener: (this: Navigation, ev: NavigationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof NavigationEventMap>(type: K, listener: (this: Navigation, ev: NavigationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface NavigationHistoryEntry {
    加事件监听<K extends keyof NavigationHistoryEntryEventMap>(type: K, listener: (this: NavigationHistoryEntry, ev: NavigationHistoryEntryEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof NavigationHistoryEntryEventMap>(type: K, listener: (this: NavigationHistoryEntry, ev: NavigationHistoryEntryEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Node {
    追加子节点<T extends Node>(node: T): T;
    规范化(): void;
    移除子节点<T extends Node>(child: T): T;
}

interface NodeIterator {
    readonly 过滤: NodeFilter | null;
}

interface NodeList {
    readonly 长度: number;
    逐个处理(callbackfn: (value: Node, key: number, parent: NodeList) => void, thisArg?: any): void;
}

interface NodeListOf<TNode extends Node> {
    逐个处理(callbackfn: (value: TNode, key: number, parent: NodeListOf<TNode>) => void, thisArg?: any): void;
}

interface NonElementParentNode {
    按编号取元素(elementId: string): Element | null;
}

interface Notification {
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
    加事件监听<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface OscillatorNode {
    加事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ParentNode {
    查询选择器<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K] | null;
    查询选择器<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K] | null;
    查询选择器<K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K] | null;
    查询选择器<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): HTMLElementDeprecatedTagNameMap[K] | null;
    查询选择器<E extends Element = Element>(selectors: string): E | null;
}

interface PaymentRequest {
    加事件监听<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface PaymentResponse {
    加事件监听<K extends keyof PaymentResponseEventMap>(type: K, listener: (this: PaymentResponse, ev: PaymentResponseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PaymentResponseEventMap>(type: K, listener: (this: PaymentResponse, ev: PaymentResponseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Performance {
    此刻(): DOMHighResTimeStamp;
    加事件监听<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface PermissionStatus {
    加事件监听<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface PictureInPictureWindow {
    加事件监听<K extends keyof PictureInPictureWindowEventMap>(type: K, listener: (this: PictureInPictureWindow, ev: PictureInPictureWindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PictureInPictureWindowEventMap>(type: K, listener: (this: PictureInPictureWindow, ev: PictureInPictureWindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Plugin {
    readonly 长度: number;
}

interface PluginArray {
    readonly 长度: number;
}

interface RTCDTMFSender {
    加事件监听<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCDataChannel {
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

interface RTCErrorEvent {
    readonly 报错: RTCError;
}

interface RTCIceTransport {
    加事件监听<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCPeerConnection {
    加事件监听<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCSctpTransport {
    加事件监听<K extends keyof RTCSctpTransportEventMap>(type: K, listener: (this: RTCSctpTransport, ev: RTCSctpTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCSctpTransportEventMap>(type: K, listener: (this: RTCSctpTransport, ev: RTCSctpTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCStatsReport {
    逐个处理(callbackfn: (value: any, key: string, parent: RTCStatsReport) => void, thisArg?: any): void;
}

interface Range {
    转字符串(): string;
}

interface ReadableByteStreamController {
    报错(e?: any): void;
}

interface ReadableStreamDefaultController<R = any> {
    报错(e?: any): void;
}

interface RemotePlayback {
    加事件监听<K extends keyof RemotePlaybackEventMap>(type: K, listener: (this: RemotePlayback, ev: RemotePlaybackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RemotePlaybackEventMap>(type: K, listener: (this: RemotePlayback, ev: RemotePlaybackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGAElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGAElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
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
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGClipPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGComponentTransferFunctionElement {
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
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFilterElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGForeignObjectElement {
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
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGImageElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGImageElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGLengthList {
    readonly 长度: number;
    清空(): void;
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

interface SVGNumberList {
    readonly 长度: number;
    清空(): void;
}

interface SVGPathElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGPatternElement {
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGPointList {
    readonly 长度: number;
    清空(): void;
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
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGSVGElement {
    按编号取元素(elementId: string): Element | null;
    加事件监听<K extends keyof SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGSVGElementEventMap>(type: K, listener: (this: SVGSVGElement, ev: SVGSVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGScriptElement {
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
}

interface SVGStyleElement {
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

interface SVGTransformList {
    readonly 长度: number;
    清空(): void;
}

interface SVGUseElement {
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
}

interface ScreenOrientation {
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
}

interface SpeechRecognitionResultList {
    readonly 长度: number;
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
    加事件监听<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Storage {
    readonly 长度: number;
    清空(): void;
}

interface StylePropertyMap {
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

interface StyleSheetList {
    readonly 长度: number;
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
}

interface TransformStreamDefaultController<O = any> {
    报错(reason?: any): void;
}

interface TreeWalker {
    readonly 过滤: NodeFilter | null;
}

interface URL {
    转字符串(): string;
    查找: string;
}

interface URLPattern {
    readonly 查找: string;
    执行(input?: URLPatternInput, baseURL?: string | URL): URLPatternResult | null;
    测试(input?: URLPatternInput, baseURL?: string | URL): boolean;
}

interface URLSearchParams {
    readonly 大小: number;
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
    加事件监听<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface VideoDecoder {
    加事件监听<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface VideoEncoder {
    加事件监听<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ViewTransitionTypeSet {
    逐个处理(callbackfn: (value: string, key: string, parent: ViewTransitionTypeSet) => void, thisArg?: any): void;
}

interface VisualViewport {
    加事件监听<K extends keyof VisualViewportEventMap>(type: K, listener: (this: VisualViewport, ev: VisualViewportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof VisualViewportEventMap>(type: K, listener: (this: VisualViewport, ev: VisualViewportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface WGSLLanguageFeatures {
    逐个处理(callbackfn: (value: string, key: string, parent: WGSLLanguageFeatures) => void, thisArg?: any): void;
}

interface WakeLockSentinel {
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
}

interface WebGLRenderingContextBase {
    清空(mask: GLbitfield): void;
    readonly 替换: 0x1E01;
    readonly 重复: 0x2901;
}

interface WebSocket {
    加事件监听<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Window {
    readonly 长度: number;
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

interface WritableStreamDefaultController {
    报错(e?: any): void;
}

interface XMLDocument {
    加事件监听<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof DocumentEventMap>(type: K, listener: (this: XMLDocument, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface XMLHttpRequest {
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

interface Console {
    清空(): void;
    报错(...data: any[]): void;
    日志(...data: any[]): void;
    警告(...data: any[]): void;
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

interface GeneratorFunction {
    readonly 长度: number;
}

interface GeneratorFunctionConstructor {
    readonly 长度: number;
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
    获取?(target: T, p: string | symbol, receiver: any): any;
    含有?(target: T, p: string | symbol): boolean;
    设置?(target: T, p: string | symbol, newValue: any, receiver: any): boolean;
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

interface AsyncGeneratorFunction {
    readonly 长度: number;
}

interface AsyncGeneratorFunctionConstructor {
    readonly 长度: number;
}

interface Promise<T> {
    最终(onfinally?: (() => void) | undefined | null): Promise<T>;
}

interface String {
    去尾空白(): string;
    去头空白(): string;
}

interface BigInt {
    转字符串(radix?: number): string;
    本地转字符串(locales?: Intl.LocalesArgument, options?: BigIntToLocaleStringOptions): string;
    取值(): bigint;
}

interface BigInt64Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    全部满足(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => boolean, thisArg?: any): boolean;
    填充(value: bigint, start?: number, end?: number): this;
    过滤(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => any, thisArg?: any): BigInt64Array<ArrayBuffer>;
    找出(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => boolean, thisArg?: any): bigint | undefined;
    找出序号(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => boolean, thisArg?: any): number;
    逐个处理(callbackfn: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => void, thisArg?: any): void;
    包含(searchElement: bigint, fromIndex?: number): boolean;
    找序号(searchElement: bigint, fromIndex?: number): number;
    连接成串(separator?: string): string;
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
}

interface BigUint64Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    全部满足(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => boolean, thisArg?: any): boolean;
    填充(value: bigint, start?: number, end?: number): this;
    过滤(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => any, thisArg?: any): BigUint64Array<ArrayBuffer>;
    找出(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => boolean, thisArg?: any): bigint | undefined;
    找出序号(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => boolean, thisArg?: any): number;
    逐个处理(callbackfn: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => void, thisArg?: any): void;
    包含(searchElement: bigint, fromIndex?: number): boolean;
    找序号(searchElement: bigint, fromIndex?: number): number;
    连接成串(separator?: string): string;
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
}

interface Date {
    本地转字符串(locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions): string;
}

interface Number {
    本地转字符串(locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions): string;
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
    含有(value: T): boolean;
    readonly 大小: number;
}

interface Float16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    取第(index: number): number | undefined;
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
}

interface Symbol {
    转字符串(): string;
    取值(): symbol;
}

interface PropertyDescriptor {
    获取?(): any;
    设置?(v: any): void;
}

interface Object {
    转字符串(): string;
    本地转字符串(): string;
    取值(): Object;
    有自有属性(v: PropertyKey): boolean;
    是原型(v: Object): boolean;
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
    本地转字符串(): string;
    取值(): number;
    取时刻(): number;
    取年(): number;
    取月(): number;
    取日(): number;
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

