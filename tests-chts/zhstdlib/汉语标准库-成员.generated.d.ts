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

interface AacEncoderConfig {
    格式化?: AacBitstreamFormat;
}

interface AddEventListenerOptions {
    信号?: AbortSignal;
}

interface AddressErrors {
    城市?: string;
    国家?: string;
    接收方?: string;
    地区?: string;
}

interface AesCtrParams {
    计数器: BufferSource;
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

interface Algorithm {
    名称: string;
}

interface AnalyserOptions {
    变换长度?: number;
    最大分贝?: number;
    最小分贝?: number;
}

interface AnimationEventInit {
    动画名?: string;
    已过时间?: number;
    伪元素?: string;
}

interface AssignedNodesOptions {
    展平化?: boolean;
}

interface AudioBufferOptions {
    长度: number;
    声道数?: number;
    采样率: number;
}

interface AudioBufferSourceOptions {
    缓冲?: AudioBuffer | null;
    失谐?: number;
    循环?: boolean;
    循环终点?: number;
    循环起点?: number;
}

interface AudioConfiguration {
    比特率?: number;
    声道集?: string;
    采样频率?: number;
}

interface AudioContextOptions {
    采样率?: number;
}

interface AudioDataCopyToOptions {
    格式化?: AudioSampleFormat;
}

interface AudioDataInit {
    数据: BufferSource;
    格式化: AudioSampleFormat;
    声道数: number;
    帧数: number;
    采样率: number;
    时间戳: number;
    转移?: ArrayBuffer[];
}

interface AudioDecoderConfig {
    编解码器: string;
    声道数: number;
    采样率: number;
}

interface AudioDecoderInit {
    报错: WebCodecsErrorCallback;
}

interface AudioEncoderConfig {
    高级音频编码?: AacEncoderConfig;
    比特率?: number;
    编解码器: string;
    声道数: number;
    采样率: number;
}

interface AudioEncoderInit {
    报错: WebCodecsErrorCallback;
}

interface AuthenticationExtensionsClientInputs {
    应用标识?: string;
}

interface AuthenticationExtensionsClientInputsJSON {
    应用标识?: string;
}

interface AuthenticationExtensionsClientOutputs {
    应用标识?: boolean;
}

interface AuthenticationExtensionsClientOutputsJSON {
    应用标识?: boolean;
}

interface AuthenticationExtensionsLargeBlobInputs {
    读取?: boolean;
    写入?: BufferSource;
}

interface AuthenticationExtensionsLargeBlobInputsJSON {
    读取?: boolean;
    写入?: Base64URLString;
}

interface AuthenticationExtensionsLargeBlobOutputs {
    转二进制块?: ArrayBuffer;
}

interface AuthenticationExtensionsLargeBlobOutputsJSON {
    转二进制块?: Base64URLString;
}

interface AuthenticationExtensionsPRFOutputs {
    已启用?: boolean;
}

interface AuthenticationExtensionsPRFOutputsJSON {
    已启用?: boolean;
}

interface AuthenticationResponseJSON {
    编号: string;
    原始编号: Base64URLString;
    种类: string;
}

interface AuthenticatorAssertionResponseJSON {
    认证器数据: Base64URLString;
    签名数据: Base64URLString;
    用户句柄?: Base64URLString;
}

interface AuthenticatorAttestationResponseJSON {
    证明对象: Base64URLString;
    认证器数据: Base64URLString;
}

interface AvcEncoderConfig {
    格式化?: AvcBitstreamFormat;
}

interface BiquadFilterOptions {
    失谐?: number;
    频率?: number;
    增益值?: number;
    种类?: BiquadFilterType;
}

interface BlobEventInit {
    数据: Blob;
    时间码?: DOMHighResTimeStamp;
}

interface BlobPropertyBag {
    种类?: string;
}

interface CSSNumericType {
    角度?: number;
    弹性?: number;
    频率?: number;
    长度?: number;
    百分比?: number;
}

interface CSSStyleSheetInit {
    已禁用?: boolean;
    媒体?: MediaList | string;
}

interface CanvasRenderingContext2DSettings {
    透明度?: boolean;
    色彩空间?: PredefinedColorSpace;
    已失同步?: boolean;
}

interface ClientQueryOptions {
    种类?: ClientTypes;
}

interface ClipboardEventInit {
    剪贴板数据?: DataTransfer | null;
}

interface CloseEventInit {
    是干净?: boolean;
}

interface CommandEventInit {
    来源?: Element | null;
}

interface CompositionEventInit {
    数据?: string;
}

interface ComputedEffectTiming {
    活动时长?: CSSNumberish;
    结束时刻?: CSSNumberish;
    进度?: number | null;
    起始时刻?: CSSNumberish;
}

interface ComputedKeyframe {
    合成: CompositeOperationOrAuto;
    缓动: string;
    偏移: number | null;
}

interface ConstantSourceOptions {
    偏移?: number;
}

interface ConstrainBooleanOrDOMStringParameters {
    精确?: boolean | string;
}

interface ConstrainBooleanParameters {
    精确?: boolean;
}

interface ConstrainDOMStringParameters {
    精确?: string | string[];
}

interface ConstrainDoubleRange {
    精确?: number;
}

interface ConstrainULongRange {
    精确?: number;
}

interface ContentVisibilityAutoStateChangeEventInit {
    已跳过?: boolean;
}

interface ConvolverOptions {
    缓冲?: AudioBuffer | null;
}

interface CookieChangeEventInit {
    已变更?: CookieList;
    已删除?: CookieList;
}

interface CookieInit {
    网域?: string | null;
    过期时间?: DOMHighResTimeStamp | null;
    名称: string;
    已分区?: boolean;
    值内容: string;
}

interface CookieListItem {
    名称?: string;
    值内容?: string;
}

interface CookieStoreDeleteOptions {
    网域?: string | null;
    名称: string;
    已分区?: boolean;
}

interface CookieStoreGetOptions {
    名称?: string;
    地址?: string;
}

interface CredentialCreationOptions {
    信号?: AbortSignal;
}

interface CredentialRequestOptions {
    信号?: AbortSignal;
}

interface CurrentUserDetailsOptions {
    名称: string;
}

interface CustomEventInit<T = any> {
    细节?: T;
}

interface DOMPointInit {
    横坐标?: number;
    纵坐标?: number;
    深度坐标?: number;
}

interface DOMRectInit {
    高度?: number;
    宽度?: number;
    横坐标?: number;
    纵坐标?: number;
}

interface DelayOptions {
    延迟时长?: number;
}

interface DeviceMotionEventAccelerationInit {
    横坐标?: number | null;
    纵坐标?: number | null;
    深度坐标?: number | null;
}

interface DeviceMotionEventInit {
    加速度?: DeviceMotionEventAccelerationInit;
    间隔?: number;
    旋转速率?: DeviceMotionEventRotationRateInit;
}

interface DeviceMotionEventRotationRateInit {
    透明度?: number | null;
    伽马?: number | null;
}

interface DeviceOrientationEventInit {
    绝对?: boolean;
    透明度?: number | null;
    伽马?: number | null;
}

interface DoubleRange {
    最大?: number;
    最大限制?: number;
    最小?: number;
    最小限制?: number;
}

interface DragEventInit {
    数据传送?: DataTransfer | null;
}

interface DynamicsCompressorOptions {
    拐点?: number;
    比率?: number;
    释放?: number;
    阈值?: number;
}

interface EcdsaParams {
    散列: HashAlgorithmIdentifier;
}

interface EffectTiming {
    方向?: PlaybackDirection;
    时长?: number | CSSNumericValue | string;
    缓动?: string;
    填充?: FillMode;
    迭代次数?: number;
}

interface EncodedAudioChunkInit {
    数据: AllowSharedBufferSource;
    时长?: number;
    时间戳: number;
    转移?: ArrayBuffer[];
    种类: EncodedAudioChunkType;
}

interface EncodedVideoChunkInit {
    数据: AllowSharedBufferSource;
    时长?: number;
    时间戳: number;
    种类: EncodedVideoChunkType;
}

interface ErrorEventInit {
    列号?: number;
    报错?: any;
    文件名?: string;
    行号?: number;
    消息?: string;
}

interface EventInit {
    会冒泡?: boolean;
    可取消?: boolean;
    可穿透?: boolean;
}

interface EventListenerOptions {
    采集?: boolean;
}

interface EventModifierInit {
    替代键?: boolean;
}

interface FileSystemFlags {
    创建?: boolean;
    独占?: boolean;
}

interface FileSystemGetDirectoryOptions {
    创建?: boolean;
}

interface FileSystemGetFileOptions {
    创建?: boolean;
}

interface FocusEventInit {
    相关目标?: EventTarget | null;
}

interface FontFaceDescriptors {
    显示方式?: FontDisplay;
    特性设置?: string;
    拉伸度?: string;
    样式?: string;
    字符范围?: string;
    字重?: string;
}

interface FormDataEventInit {
    表单数据: FormData;
}

interface GPUBindGroupDescriptor {
    条目: GPUBindGroupEntry[];
}

interface GPUBindGroupLayoutDescriptor {
    条目: GPUBindGroupLayoutEntry[];
}

interface GPUBindGroupLayoutEntry {
    缓冲?: GPUBufferBindingLayout;
    采样器?: GPUSamplerBindingLayout;
    纹理?: GPUTextureBindingLayout;
}

interface GPUBlendState {
    透明度: GPUBlendComponent;
}

interface GPUBufferBinding {
    缓冲: GPUBuffer;
    偏移?: GPUSize64;
    大小?: GPUSize64;
}

interface GPUBufferBindingLayout {
    种类?: GPUBufferBindingType;
}

interface GPUBufferDescriptor {
    大小: GPUSize64;
    用量: GPUBufferUsageFlags;
}

interface GPUCanvasConfiguration {
    透明度模式?: GPUCanvasAlphaMode;
    色彩空间?: PredefinedColorSpace;
    设备: GPUDevice;
    格式化: GPUTextureFormat;
    用量?: GPUTextureUsageFlags;
}

interface GPUCanvasToneMapping {
    模式?: GPUCanvasToneMappingMode;
}

interface GPUColorTargetState {
    混合?: GPUBlendState;
    格式化: GPUTextureFormat;
}

interface GPUCopyExternalImageDestInfo {
    色彩空间?: PredefinedColorSpace;
}

interface GPUCopyExternalImageSourceInfo {
    垂直翻转?: boolean;
    源点?: GPUOrigin2D;
    来源: GPUCopyExternalImageSource;
}

interface GPUDepthStencilState {
    格式化: GPUTextureFormat;
}

interface GPUExtent3DDict {
    高度?: GPUIntegerCoordinate;
    宽度: GPUIntegerCoordinate;
}

interface GPUExternalTextureDescriptor {
    色彩空间?: PredefinedColorSpace;
    来源: HTMLVideoElement | VideoFrame;
}

interface GPUObjectDescriptorBase {
    标签?: string;
}

interface GPUOrigin2DDict {
    横坐标?: GPUIntegerCoordinate;
    纵坐标?: GPUIntegerCoordinate;
}

interface GPUOrigin3DDict {
    横坐标?: GPUIntegerCoordinate;
    纵坐标?: GPUIntegerCoordinate;
    深度坐标?: GPUIntegerCoordinate;
}

interface GPUPrimitiveState {
    拓扑?: GPUPrimitiveTopology;
}

interface GPUProgrammableStage {
    常量集?: Record<string, GPUPipelineConstantValue>;
}

interface GPUQuerySetDescriptor {
    种类: GPUQueryType;
}

interface GPURenderPassColorAttachment {
    视图: GPUTexture | GPUTextureView;
}

interface GPURenderPassDepthStencilAttachment {
    视图: GPUTexture | GPUTextureView;
}

interface GPURenderPipelineDescriptor {
    图元?: GPUPrimitiveState;
}

interface GPUSamplerBindingLayout {
    种类?: GPUSamplerBindingType;
}

interface GPUStorageTextureBindingLayout {
    格式化: GPUTextureFormat;
}

interface GPUTexelCopyBufferInfo {
    缓冲: GPUBuffer;
}

interface GPUTexelCopyBufferLayout {
    偏移?: GPUSize64;
}

interface GPUTexelCopyTextureInfo {
    源点?: GPUOrigin3D;
    纹理: GPUTexture;
}

interface GPUTextureDescriptor {
    格式化: GPUTextureFormat;
    大小: GPUExtent3D;
    用量: GPUTextureUsageFlags;
}

interface GPUTextureViewDescriptor {
    格式化?: GPUTextureFormat;
    用量?: GPUTextureUsageFlags;
}

interface GPUUncapturedErrorEventInit {
    报错: GPUError;
}

interface GPUVertexAttribute {
    格式化: GPUVertexFormat;
    偏移: GPUSize64;
}

interface GPUVertexBufferLayout {
    属性集: GPUVertexAttribute[];
}

interface GPUVertexState {
    缓冲集?: (GPUVertexBufferLayout | null)[];
}

interface GainOptions {
    增益值?: number;
}

interface GamepadEffectParameters {
    时长?: number;
}

interface GamepadEventInit {
    手柄?: Gamepad | null;
}

interface GetRootNodeOptions {
    可穿透?: boolean;
}

interface HashChangeEventInit {
    新地址?: string;
    旧地址?: string;
}

interface HkdfParams {
    散列: HashAlgorithmIdentifier;
    附加信息: BufferSource;
    盐值: BufferSource;
}

interface HmacImportParams {
    散列: HashAlgorithmIdentifier;
    长度?: number;
}

interface HmacKeyAlgorithm {
    散列: KeyAlgorithm;
    长度: number;
}

interface HmacKeyGenParams {
    散列: HashAlgorithmIdentifier;
    长度?: number;
}

interface IDBDatabaseInfo {
    名称?: string;
}

interface IDBObjectStoreParameters {
    自动递增?: boolean;
    键路径?: string | string[] | null;
}

interface IDBTransactionOptions {
    持久性?: IDBTransactionDurability;
}

interface ImageBitmapRenderingContextSettings {
    透明度?: boolean;
}

interface ImageDataSettings {
    色彩空间?: PredefinedColorSpace;
}

interface ImageDecodeResult {
    图像: VideoFrame;
}

interface ImageDecoderInit {
    数据: ImageBufferSource;
    转移?: ArrayBuffer[];
    种类: string;
}

interface ImageEncodeOptions {
    种类?: string;
}

interface InputEventInit {
    数据?: string | null;
    数据传送?: DataTransfer | null;
    输入类型?: string;
    正在组字?: boolean;
}

interface IntersectionObserverInit {
    根元素?: Element | Document | null;
    根边距?: string;
    阈值?: number | number[];
}

interface JsonWebKey {
    横坐标?: string;
    纵坐标?: string;
}

interface KeyAlgorithm {
    名称: string;
}

interface KeySystemTrackConfiguration {
    健壮性?: string;
}

interface KeyboardEventInit {
    字符码?: number;
    正在组字?: boolean;
    键名?: string;
    键码?: number;
    重复?: boolean;
}

interface Keyframe {
    合成?: CompositeOperationOrAuto;
    缓动?: string;
    偏移?: number | null;
}

interface KeyframeAnimationOptions {
    编号?: string;
    时间线?: AnimationTimeline | null;
}

interface KeyframeEffectOptions {
    合成?: CompositeOperation;
    迭代合成?: IterationCompositeOperation;
    伪元素?: string | null;
}

interface LockInfo {
    模式?: LockMode;
    名称?: string;
}

interface LockManagerSnapshot {
    待处理?: LockInfo[];
}

interface LockOptions {
    模式?: LockMode;
    信号?: AbortSignal;
}

interface MIDIConnectionEventInit {
    端口?: MIDIPort;
}

interface MIDIMessageEventInit {
    数据?: Uint8Array<ArrayBuffer>;
}

interface MIDIOptions {
    系统专用?: boolean;
}

interface MediaCapabilitiesKeySystemConfiguration {
    密钥系统: string;
}

interface MediaDecodingConfiguration {
    种类: MediaDecodingType;
}

interface MediaElementAudioSourceOptions {
    媒体元素: HTMLMediaElement;
}

interface MediaEncodingConfiguration {
    种类: MediaEncodingType;
}

interface MediaImage {
    尺寸表?: string;
    源址: string;
    种类?: string;
}

interface MediaKeyMessageEventInit {
    消息: ArrayBuffer;
    消息类型: MediaKeyMessageType;
}

interface MediaKeySystemConfiguration {
    标签?: string;
}

interface MediaKeySystemMediaCapability {
    健壮性?: string;
}

interface MediaMetadataInit {
    专辑?: string;
    艺术家?: string;
    插图?: MediaImage[];
    标题?: string;
}

interface MediaPositionState {
    时长?: number;
    位置?: number;
}

interface MediaQueryListEventInit {
    匹配选择器?: boolean;
    媒体?: string;
}

interface MediaRecorderOptions {
    媒体类型?: string;
}

interface MediaSessionActionDetails {
    动作: MediaSessionAction;
}

interface MediaSettingsRange {
    最大?: number;
    最大限制?: number;
    最小?: number;
    最小限制?: number;
    步长?: number;
}

interface MediaStreamTrackEventInit {
    轨道: MediaStreamTrack;
}

interface MediaTrackCapabilities {
    高度?: ULongRange;
    采样率?: ULongRange;
    宽度?: ULongRange;
}

interface MediaTrackConstraintSet {
    高度?: ConstrainULong;
    采样率?: ConstrainULong;
    宽度?: ConstrainULong;
}

interface MediaTrackConstraints {
    高级?: MediaTrackConstraintSet[];
}

interface MediaTrackSettings {
    高度?: number;
    采样率?: number;
    手电筒?: boolean;
    宽度?: number;
}

interface MediaTrackSupportedConstraints {
    高度?: boolean;
    采样率?: boolean;
    宽度?: boolean;
}

interface MessageEventInit<T = any> {
    数据?: T;
    末事件编号?: string;
    源点?: string;
    端口集?: MessagePort[];
    来源?: MessageEventSource | null;
}

interface MouseEventInit {
    按钮?: number;
    按钮集?: number;
    客户横坐标?: number;
    客户纵坐标?: number;
    移动横量?: number;
    移动纵量?: number;
    相关目标?: EventTarget | null;
    屏幕横坐标?: number;
    屏幕纵坐标?: number;
}

interface MutationObserverInit {
    属性集?: boolean;
}

interface NavigateEventInit {
    可拦截?: boolean;
    输出端: NavigationDestination;
    下载请求?: string | null;
    表单数据?: FormData | null;
    哈希变化?: boolean;
    附加信息?: any;
    信号: AbortSignal;
    用户发起?: boolean;
}

interface NavigationInterceptOptions {
    处理器?: NavigationInterceptHandler;
    滚动?: NavigationScrollBehavior;
}

interface NavigationNavigateOptions {
    状态?: any;
}

interface NavigationOptions {
    附加信息?: any;
}

interface NavigationPreloadState {
    已启用?: boolean;
}

interface NavigationReloadOptions {
    状态?: any;
}

interface NavigationUpdateCurrentEntryOptions {
    状态: any;
}

interface NotificationOptions {
    徽标?: string;
    主体?: string;
    数据?: any;
    书写方向?: NotificationDirection;
    图标?: string;
    语言?: string;
    需交互?: boolean;
    静默?: boolean | null;
}

interface OfflineAudioContextOptions {
    长度: number;
    声道数?: number;
    采样率: number;
}

interface OptionalEffectTiming {
    方向?: PlaybackDirection;
    时长?: number | string;
    缓动?: string;
    填充?: FillMode;
    迭代次数?: number;
}

interface OpusEncoderConfig {
    复杂度?: number;
    格式化?: OpusBitstreamFormat;
    丢包百分比?: number;
}

interface OscillatorOptions {
    失谐?: number;
    频率?: number;
    种类?: OscillatorType;
}

interface PageTransitionEventInit {
    已保持?: boolean;
    已持久化?: boolean;
}

interface PannerOptions {
    锥内角?: number;
    锥外角?: number;
    锥外增益?: number;
    距离模型?: DistanceModelType;
    最大距离?: number;
    声像模型?: PanningModelType;
    参考距离?: number;
    衰减因子?: number;
}

interface PayerErrors {
    邮箱?: string;
    名称?: string;
}

interface PaymentCurrencyAmount {
    货币: string;
    值内容: string;
}

interface PaymentDetailsBase {
    修饰键集?: PaymentDetailsModifier[];
}

interface PaymentDetailsInit {
    编号?: string;
    总量: PaymentItem;
}

interface PaymentDetailsModifier {
    数据?: any;
    总量?: PaymentItem;
}

interface PaymentDetailsUpdate {
    报错?: string;
    总量?: PaymentItem;
}

interface PaymentItem {
    数额: PaymentCurrencyAmount;
    标签: string;
    待处理?: boolean;
}

interface PaymentMethodData {
    数据?: any;
}

interface PaymentShippingOption {
    数额: PaymentCurrencyAmount;
    编号: string;
    标签: string;
    已选中?: boolean;
}

interface PaymentValidationErrors {
    报错?: string;
    付款方?: PayerErrors;
}

interface Pbkdf2Params {
    散列: HashAlgorithmIdentifier;
    迭代次数: number;
    盐值: BufferSource;
}

interface PerformanceMarkOptions {
    细节?: any;
    起始时刻?: DOMHighResTimeStamp;
}

interface PerformanceMeasureOptions {
    细节?: any;
    时长?: DOMHighResTimeStamp;
    开始?: string | DOMHighResTimeStamp;
}

interface PerformanceObserverInit {
    缓冲区间?: boolean;
    种类?: string;
}

interface PermissionDescriptor {
    名称: PermissionName;
}

interface PlaneLayout {
    偏移: number;
}

interface PointerEventInit {
    高度角?: number;
    高度?: number;
    主指针?: boolean;
    指针编号?: number;
    指针类型?: string;
    压力?: number;
    倾斜横角?: number;
    倾斜纵角?: number;
    扭转角?: number;
    宽度?: number;
}

interface PopStateEventInit {
    状态?: any;
}

interface ProgressEventInit {
    长度可算?: boolean;
    已加载?: number;
    总量?: number;
}

interface PromiseRejectionEventInit {
    承诺对象: Promise<any>;
}

interface PropertyDefinition {
    名称: string;
}

interface PropertyIndexedKeyframes {
    合成?: CompositeOperationOrAuto | CompositeOperationOrAuto[];
    缓动?: string | string[];
    偏移?: number | (number | null)[];
}

interface PublicKeyCredentialCreationOptions {
    挑战: BufferSource;
    扩展?: AuthenticationExtensionsClientInputs;
}

interface PublicKeyCredentialCreationOptionsJSON {
    挑战: Base64URLString;
    扩展?: AuthenticationExtensionsClientInputsJSON;
    提示列表?: string[];
}

interface PublicKeyCredentialDescriptor {
    编号: BufferSource;
    种类: PublicKeyCredentialType;
}

interface PublicKeyCredentialDescriptorJSON {
    编号: Base64URLString;
    种类: string;
}

interface PublicKeyCredentialEntity {
    名称: string;
}

interface PublicKeyCredentialParameters {
    种类: PublicKeyCredentialType;
}

interface PublicKeyCredentialRequestOptions {
    允许凭据?: PublicKeyCredentialDescriptor[];
    挑战: BufferSource;
    扩展?: AuthenticationExtensionsClientInputs;
}

interface PublicKeyCredentialRequestOptionsJSON {
    允许凭据?: PublicKeyCredentialDescriptorJSON[];
    挑战: Base64URLString;
    扩展?: AuthenticationExtensionsClientInputsJSON;
    提示列表?: string[];
}

interface PublicKeyCredentialRpEntity {
    编号?: string;
}

interface PublicKeyCredentialUserEntity {
    编号: BufferSource;
}

interface PublicKeyCredentialUserEntityJSON {
    编号: Base64URLString;
    名称: string;
}

interface PushSubscriptionJSON {
    端点?: string;
    过期时刻?: EpochTimeStamp | null;
    键列?: Record<string, string>;
}

interface PushSubscriptionOptionsInit {
    仅用户可见?: boolean;
}

interface QueuingStrategy<T = any> {
    高水位?: number;
    大小?: QueuingStrategySize<T>;
}

interface QueuingStrategyInit {
    高水位: number;
}

interface RTCCertificateExpiration {
    过期时间?: number;
}

interface RTCDataChannelEventInit {
    通道: RTCDataChannel;
}

interface RTCDataChannelInit {
    编号?: number;
    最大包时长?: number;
    最大重传?: number;
    已协商?: boolean;
    有序?: boolean;
    协议?: string;
}

interface RTCDtlsFingerprint {
    算法?: string;
    值内容?: string;
}

interface RTCEncodedFrameMetadata {
    媒体类型?: string;
}

interface RTCEncodedVideoFrameMetadata {
    依赖集?: number[];
    高度?: number;
    时间戳?: number;
    宽度?: number;
}

interface RTCErrorEventInit {
    报错: RTCError;
}

interface RTCIceCandidateInit {
    候选?: string;
    用户名片段?: string | null;
}

interface RTCIceCandidatePairStats {
    已提名?: boolean;
    状态: RTCStatsIceCandidatePairState;
}

interface RTCIceServer {
    凭据项?: string;
    地址集: string | string[];
    用户名?: string;
}

interface RTCLocalSessionDescriptionInit {
    会话描述?: string;
    种类?: RTCSdpType;
}

interface RTCOutboundRtpStreamStats {
    活动?: boolean;
}

interface RTCPeerConnectionIceErrorEventInit {
    端口?: number | null;
    地址?: string;
}

interface RTCPeerConnectionIceEventInit {
    候选?: RTCIceCandidate | null;
}

interface RTCReceivedRtpStreamStats {
    抖动?: number;
}

interface RTCRtpCodec {
    声道集?: number;
    媒体类型: string;
}

interface RTCRtpContributingSource {
    来源: number;
    时间戳: DOMHighResTimeStamp;
}

interface RTCRtpEncodingParameters {
    活动?: boolean;
    优先级?: RTCPriorityType;
}

interface RTCRtpHeaderExtensionParameters {
    已加密?: boolean;
    编号: number;
}

interface RTCRtpSendParameters {
    编码集: RTCRtpEncodingParameters[];
}

interface RTCRtpStreamStats {
    类别: string;
}

interface RTCRtpTransceiverInit {
    方向?: RTCRtpTransceiverDirection;
    流列?: MediaStream[];
}

interface RTCSessionDescriptionInit {
    会话描述?: string;
    种类: RTCSdpType;
}

interface RTCStats {
    编号: string;
    时间戳: DOMHighResTimeStamp;
    种类: RTCStatsType;
}

interface RTCTrackEventInit {
    接收器: RTCRtpReceiver;
    流列?: MediaStream[];
    轨道: MediaStreamTrack;
    收发器: RTCRtpTransceiver;
}

interface ReadableStreamBYOBReaderReadOptions {
    最小?: number;
    最小限制?: number;
}

interface ReadableStreamGetReaderOptions {
    模式?: ReadableStreamReaderMode;
}

interface ReadableStreamReadDoneResult<T> {
    已完成: true;
    值内容: T | undefined;
}

interface ReadableStreamReadValueResult<T> {
    已完成: false;
    值内容: T;
}

interface ReadableWritablePair<R = any, W = any> {
    可读: ReadableStream<R>;
    可写: WritableStream<W>;
}

interface RegistrationOptions {
    作用域?: string;
    种类?: WorkerType;
    更新缓存方式?: ServiceWorkerUpdateViaCache;
}

interface RegistrationResponseJSON {
    编号: string;
    原始编号: Base64URLString;
    种类: string;
}

interface Report {
    主体?: ReportBody | null;
    种类?: string;
    地址?: string;
}

interface ReportingObserverOptions {
    缓冲区间?: boolean;
    类型列?: string[];
}

interface RequestInit {
    主体?: BodyInit | null;
    缓存?: RequestCache;
    凭据?: RequestCredentials;
    头集合?: HeadersInit;
    完整性?: string;
    保持活动?: boolean;
    提交方法?: string;
    模式?: RequestMode;
    优先级?: RequestPriority;
    重定向?: RequestRedirect;
    来源页?: string;
    来源页策略?: ReferrerPolicy;
    信号?: AbortSignal | null;
}

interface ResizeObserverOptions {
    盒模型?: ResizeObserverBoxOptions;
}

interface ResponseInit {
    头集合?: HeadersInit;
    状态码?: number;
    状态文本?: string;
}

interface RsaHashedImportParams {
    散列: HashAlgorithmIdentifier;
}

interface RsaHashedKeyAlgorithm {
    散列: KeyAlgorithm;
}

interface RsaHashedKeyGenParams {
    散列: HashAlgorithmIdentifier;
}

interface RsaOaepParams {
    标签?: BufferSource;
}

interface SVGBoundingBoxOptions {
    已裁剪?: boolean;
    填充?: boolean;
    标记集?: boolean;
    描边?: boolean;
}

interface SanitizerAttributeNamespace {
    名称: string;
}

interface SanitizerConfig {
    属性集?: SanitizerAttribute[];
    元素集合?: SanitizerElementWithAttributes[];
}

interface SanitizerElementNamespace {
    名称: string;
}

interface SanitizerElementNamespaceWithAttributes {
    属性集?: SanitizerAttribute[];
}

interface SchedulerPostTaskOptions {
    优先级?: TaskPriority;
    信号?: AbortSignal;
}

interface ScrollIntoViewOptions {
    块区?: ScrollLogicalPosition;
}

interface ScrollTimelineOptions {
    轴向?: ScrollAxis;
    来源?: Element | null;
}

interface ScrollToOptions {
    左侧?: number;
    顶部?: number;
}

interface SecurityPolicyViolationEventInit {
    处置方式?: SecurityPolicyViolationEventDisposition;
    来源页?: string;
}

interface ShadowRootInit {
    可克隆?: boolean;
    委托焦点?: boolean;
    模式: ShadowRootMode;
    可序列化?: boolean;
    插槽分配?: SlotAssignmentMode;
}

interface ShareData {
    文件列?: File[];
    转文本?: string;
    标题?: string;
    地址?: string;
}

interface ShowPopoverOptions {
    来源?: HTMLElement;
}

interface SpeechRecognitionErrorEventInit {
    报错: SpeechRecognitionErrorCode;
    消息?: string;
}

interface SpeechSynthesisErrorEventInit {
    报错: SpeechSynthesisErrorCode;
}

interface SpeechSynthesisEventInit {
    字符序号?: number;
    字符长度?: number;
    已过时间?: number;
    名称?: string;
    话语: SpeechSynthesisUtterance;
}

interface StartViewTransitionOptions {
    类型列?: string[] | null;
    更新?: ViewTransitionUpdateCallback | null;
}

interface StaticRangeInit {
    终点容器: Node;
    终点偏移: number;
    结束偏移: number;
    起点容器: Node;
    起始偏移: number;
}

interface StereoPannerOptions {
    声像?: number;
}

interface StorageEstimate {
    用量?: number;
}

interface StorageEventInit {
    键名?: string | null;
    新值?: string | null;
    旧值?: string | null;
    存储区?: Storage | null;
    地址?: string;
}

interface StreamPipeOptions {
    信号?: AbortSignal;
}

interface StructuredSerializeOptions {
    转移?: Transferable[];
}

interface SubmitEventInit {
    提交者?: HTMLElement | null;
}

interface TaskControllerInit {
    优先级?: TaskPriority;
}

interface TaskSignalAnyInit {
    优先级?: TaskPriority | TaskSignal;
}

interface TextDecodeOptions {
    数据流?: boolean;
}

interface TextDecoderOptions {
    遇错即止?: boolean;
    忽略序标记?: boolean;
}

interface TextEncoderEncodeIntoResult {
    读取: number;
}

interface TimelineRangeOffset {
    偏移?: CSSNumericValue;
}

interface ToggleEventInit {
    新状态?: string;
    旧状态?: string;
    来源?: Element | null;
}

interface TogglePopoverOptions {
    触控力度?: boolean;
}

interface TouchEventInit {
    变化触控集?: Touch[];
    目标触控集?: Touch[];
    触控集?: Touch[];
}

interface TouchInit {
    高度角?: number;
    客户横坐标?: number;
    客户纵坐标?: number;
    触控力度?: number;
    标识: number;
    页面横坐标?: number;
    页面纵坐标?: number;
    旋转角?: number;
    屏幕横坐标?: number;
    屏幕纵坐标?: number;
    目标: EventTarget;
}

interface TrackEventInit {
    轨道?: TextTrack | null;
}

interface Transformer<I = any, O = any> {
    冲刷?: TransformerFlushCallback<O>;
    开始?: TransformerStartCallback<O>;
    变换?: TransformerTransformCallback<I, O>;
}

interface TransitionEventInit {
    已过时间?: number;
    伪元素?: string;
}

interface UIEventInit {
    细节?: number;
    视图?: Window | null;
    键序号?: number;
}

interface ULongRange {
    最大?: number;
    最大限制?: number;
    最小?: number;
    最小限制?: number;
}

interface URLPatternComponentResult {
    分组集: Record<string, string | undefined>;
}

interface URLPatternInit {
    散列?: string;
    主机名?: string;
    密码?: string;
    路径名?: string;
    端口?: string;
    协议?: string;
    查找?: string;
    用户名?: string;
}

interface URLPatternResult {
    散列: URLPatternComponentResult;
    主机名: URLPatternComponentResult;
    密码: URLPatternComponentResult;
    路径名: URLPatternComponentResult;
    端口: URLPatternComponentResult;
    协议: URLPatternComponentResult;
    查找: URLPatternComponentResult;
    用户名: URLPatternComponentResult;
}

interface UnderlyingByteSource {
    取消?: UnderlyingSourceCancelCallback;
    拉取?: (controller: ReadableByteStreamController) => void | PromiseLike<void>;
    开始?: (controller: ReadableByteStreamController) => any;
    种类: "bytes";
}

interface UnderlyingDefaultSource<R = any> {
    取消?: UnderlyingSourceCancelCallback;
    拉取?: (controller: ReadableStreamDefaultController<R>) => void | PromiseLike<void>;
    开始?: (controller: ReadableStreamDefaultController<R>) => any;
    种类?: undefined;
}

interface UnderlyingSink<W = any> {
    中止?: UnderlyingSinkAbortCallback;
    关闭?: UnderlyingSinkCloseCallback;
    开始?: UnderlyingSinkStartCallback;
    种类?: undefined;
    写入?: UnderlyingSinkWriteCallback<W>;
}

interface UnderlyingSource<R = any> {
    取消?: UnderlyingSourceCancelCallback;
    拉取?: UnderlyingSourcePullCallback<R>;
    开始?: UnderlyingSourceStartCallback<R>;
    种类?: ReadableStreamType;
}

interface VideoColorSpaceInit {
    原色集?: VideoColorPrimaries | null;
    转移?: VideoTransferCharacteristics | null;
}

interface VideoConfiguration {
    比特率: number;
    帧率: number;
    高度: number;
    宽度: number;
}

interface VideoDecoderConfig {
    编解码器: string;
    编码高?: number;
    编码宽?: number;
    色彩空间?: VideoColorSpaceInit;
}

interface VideoDecoderInit {
    报错: WebCodecsErrorCallback;
}

interface VideoEncoderConfig {
    透明度?: AlphaOption;
    高级视频编码?: AvcEncoderConfig;
    比特率?: number;
    编解码器: string;
    内容提示?: string;
    显示高?: number;
    显示宽?: number;
    帧率?: number;
    高度: number;
    宽度: number;
}

interface VideoEncoderEncodeOptions {
    高级视频编码?: VideoEncoderEncodeOptionsForAvc;
}

interface VideoEncoderEncodeOptionsForAvc {
    量化器?: number | null;
}

interface VideoEncoderInit {
    报错: WebCodecsErrorCallback;
}

interface VideoFrameBufferInit {
    编码高: number;
    编码宽: number;
    色彩空间?: VideoColorSpaceInit;
    显示高?: number;
    显示宽?: number;
    时长?: number;
    格式化: VideoPixelFormat;
    时间戳: number;
    可见矩形?: DOMRectInit;
}

interface VideoFrameCallbackMetadata {
    高度: number;
    宽度: number;
}

interface VideoFrameCopyToOptions {
    色彩空间?: PredefinedColorSpace;
    格式化?: VideoPixelFormat;
    矩形?: DOMRectInit;
}

interface VideoFrameInit {
    透明度?: AlphaOption;
    显示高?: number;
    显示宽?: number;
    时长?: number;
    时间戳?: number;
    可见矩形?: DOMRectInit;
}

interface ViewTimelineOptions {
    轴向?: ScrollAxis;
    主体元素?: Element;
}

interface WaveShaperOptions {
    曲线?: number[] | Float32Array;
    过采样?: OverSampleType;
}

interface WebGLContextAttributes {
    透明度?: boolean;
    抗锯齿?: boolean;
    深度?: boolean;
    已失同步?: boolean;
    模板缓冲?: boolean;
}

interface WebTransportErrorOptions {
    来源?: WebTransportErrorSource;
}

interface WebTransportHash {
    算法: string;
    值内容: BufferSource;
}

interface WebTransportOptions {
    允许池化?: boolean;
    协议集?: string[];
}

interface WheelEventInit {
    滚动模式?: number;
    滚动横量?: number;
    滚动纵量?: number;
    滚动纵深?: number;
}

interface WorkerOptions {
    凭据?: RequestCredentials;
    名称?: string;
    种类?: WorkerType;
}

interface WorkletOptions {
    凭据?: RequestCredentials;
}

interface WriteParams {
    数据?: BufferSource | Blob | string | null;
    位置?: number | null;
    大小?: number | null;
    种类: WriteCommandType;
}

interface ARIAMixin {
    角色: string | null;
}

interface AbortController {
    readonly 信号: AbortSignal;
    中止(reason?: any): void;
}

interface AbortSignal {
    readonly 已中止: boolean;
    中止时: ((this: AbortSignal, ev: Event) => any) | null;
    已中止则抛(): void;
    加事件监听<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AbstractRange {
    readonly 折叠态: boolean;
    readonly 终点容器: Node;
    readonly 终点偏移: number;
    readonly 结束偏移: number;
    readonly 起点容器: Node;
    readonly 起始偏移: number;
}

interface AbstractWorker {
    出错时: ((this: AbstractWorker, ev: ErrorEvent) => any) | null;
    加事件监听<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AnalyserNode {
    变换长度: number;
    readonly 频段数: number;
    最大分贝: number;
    最小分贝: number;
    取字节频谱(array: Uint8Array<ArrayBuffer>): void;
}

interface Animatable {
    播放动画(keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeAnimationOptions): Animation;
    取动画列(options?: GetAnimationsOptions): Animation[];
}

interface Animation {
    效果: AnimationEffect | null;
    编号: string;
    readonly 待处理: boolean;
    readonly 就绪: Promise<Animation>;
    readonly 替换状态: AnimationReplaceState;
    起始时刻: CSSNumberish | null;
    时间线: AnimationTimeline | null;
    取消(): void;
    完成(): void;
    暂停(): void;
    持久化(): void;
    播放(): void;
    反转(): void;
    加事件监听<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AnimationEffect {
    取计算时序(): ComputedEffectTiming;
    取时序(): EffectTiming;
    更新时序(timing?: OptionalEffectTiming): void;
}

interface AnimationEvent {
    readonly 动画名: string;
    readonly 已过时间: number;
    readonly 伪元素: string;
}

interface AnimationFrameProvider {
    取消动画帧(handle: number): void;
    请求动画帧(callback: FrameRequestCallback): number;
}

interface AnimationTimeline {
    readonly 时长: CSSNumberish | null;
}

interface Attr {
    readonly 本地名: string;
    readonly 名称: string;
    readonly 属主文档: Document;
    readonly 属主元素: Element | null;
    readonly 已指定: boolean;
    值内容: string;
    get 文本内容(): string;
    set 文本内容(value: string | null);
}

interface AudioBuffer {
    readonly 时长: number;
    readonly 长度: number;
    readonly 声道数: number;
    readonly 采样率: number;
    从声道复制(destination: Float32Array<ArrayBuffer>, channelNumber: number, bufferOffset?: number): void;
    复制到声道(source: Float32Array<ArrayBuffer>, channelNumber: number, bufferOffset?: number): void;
    取声道数据(channel: number): Float32Array<ArrayBuffer>;
}

interface AudioBufferSourceNode {
    缓冲: AudioBuffer | null;
    readonly 失谐: AudioParam;
    循环: boolean;
    循环终点: number;
    循环起点: number;
    开始(when?: number, offset?: number, duration?: number): void;
    加事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AudioContext {
    readonly 基础延迟: number;
    readonly 输出延迟: number;
    关闭(): Promise<void>;
    取输出时刻(): AudioTimestamp;
    继续(): Promise<void>;
    挂起(): Promise<void>;
    加事件监听<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AudioData {
    readonly 时长: number;
    readonly 格式化: AudioSampleFormat | null;
    readonly 声道数: number;
    readonly 帧数: number;
    readonly 采样率: number;
    readonly 时间戳: number;
    分配大小(options: AudioDataCopyToOptions): number;
    复制(): AudioData;
    关闭(): void;
    复制到(destination: AllowSharedBufferSource, options: AudioDataCopyToOptions): void;
}

interface AudioDecoder {
    readonly 解码队列长度: number;
    readonly 状态: CodecState;
    关闭(): void;
    解码(chunk: EncodedAudioChunk): void;
    冲刷(): Promise<void>;
    重置(): void;
    加事件监听<K extends keyof AudioDecoderEventMap>(type: K, listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioDecoderEventMap>(type: K, listener: (this: AudioDecoder, ev: AudioDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AudioEncoder {
    readonly 编码队列长度: number;
    readonly 状态: CodecState;
    关闭(): void;
    编码(data: AudioData): void;
    冲刷(): Promise<void>;
    重置(): void;
    加事件监听<K extends keyof AudioEncoderEventMap>(type: K, listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioEncoderEventMap>(type: K, listener: (this: AudioEncoder, ev: AudioEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AudioNode {
    readonly 上下文: BaseAudioContext;
    连接(destinationNode: AudioNode, output?: number, input?: number): AudioNode;
    连接(destinationParam: AudioParam, output?: number): void;
    断开(): void;
    断开(output: number): void;
    断开(destinationNode: AudioNode): void;
    断开(destinationNode: AudioNode, output: number): void;
    断开(destinationNode: AudioNode, output: number, input: number): void;
    断开(destinationParam: AudioParam): void;
    断开(destinationParam: AudioParam, output: number): void;
}

interface AudioParam {
    readonly 默认值: number;
    值内容: number;
    设时值(value: number, startTime: number): AudioParam;
}

interface AudioParamMap {
    逐个处理(callbackfn: (value: AudioParam, key: string, parent: AudioParamMap) => void, thisArg?: any): void;
}

interface AudioScheduledSourceNode {
    播放结束时: ((this: AudioScheduledSourceNode, ev: Event) => any) | null;
    开始(when?: number): void;
    停止(when?: number): void;
    加事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: AudioScheduledSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AudioWorkletNode {
    readonly 参数集: AudioParamMap;
    readonly 端口: MessagePort;
    加事件监听<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioWorkletNodeEventMap>(type: K, listener: (this: AudioWorkletNode, ev: AudioWorkletNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface AuthenticatorAssertionResponse {
    readonly 认证器数据: ArrayBuffer;
    readonly 签名数据: ArrayBuffer;
    readonly 用户句柄: ArrayBuffer | null;
}

interface AuthenticatorAttestationResponse {
    readonly 证明对象: ArrayBuffer;
    取公钥(): ArrayBuffer | null;
    取传输方式(): string[];
}

interface BaseAudioContext {
    readonly 音频工作线程: AudioWorklet;
    readonly 输出端: AudioDestinationNode;
    readonly 监听器: AudioListener;
    readonly 采样率: number;
    readonly 状态: AudioContextState;
    创建分析器(): AnalyserNode;
    创建滤波器(): BiquadFilterNode;
    创建缓冲(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer;
    创建缓冲源(): AudioBufferSourceNode;
    创建声道合并(numberOfInputs?: number): ChannelMergerNode;
    创建声道分离(numberOfOutputs?: number): ChannelSplitterNode;
    创建常量源(): ConstantSourceNode;
    创建卷积器(): ConvolverNode;
    创建延迟(maxDelayTime?: number): DelayNode;
    创建压缩器(): DynamicsCompressorNode;
    创建增益(): GainNode;
    创建振荡器(): OscillatorNode;
    创建声像器(): PannerNode;
    创建整形器(): WaveShaperNode;
    解码音频(audioData: ArrayBuffer, successCallback?: DecodeSuccessCallback | null, errorCallback?: DecodeErrorCallback | null): Promise<AudioBuffer>;
    加事件监听<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof BaseAudioContextEventMap>(type: K, listener: (this: BaseAudioContext, ev: BaseAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface BeforeUnloadEvent {
    返回值: any;
}

interface BiquadFilterNode {
    readonly 失谐: AudioParam;
    readonly 频率: AudioParam;
    readonly 增益值: AudioParam;
    种类: BiquadFilterType;
}

interface Blob {
    readonly 大小: number;
    readonly 种类: string;
    转缓冲(): Promise<ArrayBuffer>;
    字节(): Promise<Uint8Array<ArrayBuffer>>;
    截取(start?: number, end?: number, contentType?: string): Blob;
    数据流(): ReadableStream<Uint8Array<ArrayBuffer>>;
    转文本(): Promise<string>;
}

interface BlobEvent {
    readonly 数据: Blob;
    readonly 时间码: DOMHighResTimeStamp;
}

interface Body {
    readonly 主体: ReadableStream<Uint8Array<ArrayBuffer>> | null;
    转缓冲(): Promise<ArrayBuffer>;
    转二进制块(): Promise<Blob>;
    字节(): Promise<Uint8Array<ArrayBuffer>>;
    表单数据(): Promise<FormData>;
    转对象(): Promise<any>;
    转文本(): Promise<string>;
}

interface BroadcastChannel {
    readonly 名称: string;
    收消息时: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    消息出错时: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
    关闭(): void;
    发消息(message: any): void;
    加事件监听<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ByteLengthQueuingStrategy {
    readonly 高水位: number;
    readonly 大小: QueuingStrategySize<ArrayBufferView>;
}

interface CSSAnimation {
    readonly 动画名: string;
    加事件监听<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSAnimation, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSAnimation, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface CSSContainerRule {
    readonly 容器名: string;
}

interface CSSCounterStyleRule {
    名称: string;
}

interface CSSFontFaceRule {
    get 样式(): CSSStyleDeclaration;
    set 样式(cssText: string);
}

interface CSSFontPaletteValuesRule {
    readonly 名称: string;
}

interface CSSGroupingRule {
    readonly 规则集: CSSRuleList;
    删除规则(index: number): void;
    插入规则(rule: string, index?: number): number;
}

interface CSSImportRule {
    readonly 链接: string;
    get 媒体(): MediaList;
    set 媒体(mediaText: string);
}

interface CSSKeyframeRule {
    get 样式(): CSSStyleDeclaration;
    set 样式(cssText: string);
}

interface CSSKeyframesRule {
    readonly 规则集: CSSRuleList;
    readonly 长度: number;
    名称: string;
    删除规则(select: string): void;
}

interface CSSKeywordValue {
    值内容: string;
}

interface CSSLayerBlockRule {
    readonly 名称: string;
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

interface CSSMediaRule {
    get 媒体(): MediaList;
    set 媒体(mediaText: string);
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
    除以(...values: CSSNumberish[]): CSSNumericValue;
    等于(...value: CSSNumberish[]): boolean;
    最大(...values: CSSNumberish[]): CSSNumericValue;
    最大限制(...values: CSSNumberish[]): CSSNumericValue;
    最小(...values: CSSNumberish[]): CSSNumericValue;
    最小限制(...values: CSSNumberish[]): CSSNumericValue;
    乘以(...values: CSSNumberish[]): CSSNumericValue;
    相减(...values: CSSNumberish[]): CSSNumericValue;
    转换为(unit: string): CSSUnitValue;
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
    自身对齐: string;
    底部: string;
    高度: string;
    左侧: string;
    右侧: string;
    顶部: string;
    宽度: string;
}

interface CSSPositionTryRule {
    readonly 名称: string;
    get 样式(): CSSPositionTryDescriptors;
    set 样式(cssText: string);
}

interface CSSPropertyRule {
    readonly 名称: string;
}

interface CSSRotate {
    角度: CSSNumericValue;
    横坐标: CSSNumberish;
    纵坐标: CSSNumberish;
    深度坐标: CSSNumberish;
}

interface CSSRule {
    规则文本: string;
    readonly 父规则: CSSRule | null;
    readonly 父样式表: CSSStyleSheet | null;
    readonly 种类: number;
}

interface CSSRuleList {
    readonly 长度: number;
    取项(index: number): CSSRule | null;
}

interface CSSScale {
    横坐标: CSSNumberish;
    纵坐标: CSSNumberish;
    深度坐标: CSSNumberish;
}

interface CSSScopeRule {
    readonly 开始: string | null;
}

interface CSSStyleDeclarationBase {
    规则文本: string;
    readonly 长度: number;
    readonly 父规则: CSSRule | null;
    取属性优先级(property: string): string;
    取属性值(property: string): string;
    取项(index: number): string;
    删属性值(property: string): string;
    设属性值(property: string, value: string | null, priority?: string): void;
}

interface CSSStyleProperties {
    强调色: string;
    内容对齐: string;
    项目对齐: string;
    自身对齐: string;
    对齐基线: string;
    全部: string;
    动画名: string;
    边框: string;
    底部: string;
    清空: string;
    裁剪: string;
    容器: string;
    容器名: string;
    容器类型: string;
    光标: string;
    方向: string;
    显示方式: string;
    填充: string;
    过滤: string;
    滤镜: string;
    弹性: string;
    浮点: string;
    字体: string;
    网格: string;
    高度: string;
    连字: string;
    左侧: string;
    字距: string;
    标记物: string;
    偏移: string;
    不透明度: string;
    孤行: string;
    轮廓: string;
    溢出: string;
    内边距: string;
    透视: string;
    位置: string;
    引号: string;
    调整大小: string;
    右侧: string;
    旋转: string;
    缩放: string;
    描边: string;
    文本对齐: string;
    文本渲染: string;
    顶部: string;
    变换: string;
    过渡: string;
    过渡属性: string;
    平移: string;
    宽度: string;
    词距: string;
    横坐标: string;
    纵坐标: string;
}

interface CSSStyleRule {
    get 样式(): CSSStyleDeclaration;
    set 样式(cssText: string);
}

interface CSSStyleSheet {
    readonly 规则集: CSSRuleList;
    readonly 规则表: CSSRuleList;
    删除规则(index: number): void;
    插入规则(rule: string, index?: number): number;
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
    readonly 过渡属性: string;
    加事件监听<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSTransition, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AnimationEventMap>(type: K, listener: (this: CSSTransition, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface CSSTranslate {
    横坐标: CSSNumericValue;
    纵坐标: CSSNumericValue;
    深度坐标: CSSNumericValue;
}

interface CSSUnitValue {
    readonly 单位: string;
    值内容: number;
}

interface CSSUnparsedValue {
    readonly 长度: number;
    逐个处理(callbackfn: (value: CSSUnparsedSegment, key: number, parent: CSSUnparsedValue) => void, thisArg?: any): void;
}

interface CSSViewTransitionRule {
    readonly 类型列: ReadonlyArray<string>;
}

interface Cache {
    添加(request: RequestInfo | URL): Promise<void>;
    全部添加(requests: RequestInfo[]): Promise<void>;
    删除(request: RequestInfo | URL, options?: CacheQueryOptions): Promise<boolean>;
    键列(request?: RequestInfo | URL, options?: CacheQueryOptions): Promise<ReadonlyArray<Request>>;
    匹配(request: RequestInfo | URL, options?: CacheQueryOptions): Promise<Response | undefined>;
    全匹配(request?: RequestInfo | URL, options?: CacheQueryOptions): Promise<ReadonlyArray<Response>>;
    存入(request: RequestInfo | URL, response: Response): Promise<void>;
}

interface CacheStorage {
    删除(cacheName: string): Promise<boolean>;
    含有(cacheName: string): Promise<boolean>;
    键列(): Promise<string[]>;
    匹配(request: RequestInfo | URL, options?: MultiCacheQueryOptions): Promise<Response | undefined>;
    打开(cacheName: string): Promise<Cache>;
}

interface CanvasCaptureMediaStreamTrack {
    readonly 画布: HTMLCanvasElement;
    加事件监听<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: CanvasCaptureMediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: CanvasCaptureMediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface CanvasCompositing {
    全局透明: number;
}

interface CanvasDrawImage {
    绘制图像(image: CanvasImageSource, dx: number, dy: number): void;
    绘制图像(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void;
    绘制图像(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
}

interface CanvasDrawPath {
    开始路径(): void;
    裁剪(fillRule?: CanvasFillRule): void;
    裁剪(path: Path2D, fillRule?: CanvasFillRule): void;
    填充(fillRule?: CanvasFillRule): void;
    填充(path: Path2D, fillRule?: CanvasFillRule): void;
    点在路径内(x: number, y: number, fillRule?: CanvasFillRule): boolean;
    点在路径内(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean;
    点在描边内(x: number, y: number): boolean;
    点在描边内(path: Path2D, x: number, y: number): boolean;
    描边(): void;
    描边(path: Path2D): void;
}

interface CanvasFillStrokeStyles {
    创建圆锥渐变(startAngle: number, x: number, y: number): CanvasGradient;
    创建图案(image: CanvasImageSource, repetition: string | null): CanvasPattern | null;
    创建径向渐变(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
}

interface CanvasFilters {
    过滤: string;
    滤镜: string;
}

interface CanvasGradient {
    加色标(offset: number, color: string): void;
}

interface CanvasImageData {
    创建图像数据(sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    创建图像数据(imageData: ImageData): ImageData;
    取图像数据(sx: number, sy: number, sw: number, sh: number, settings?: ImageDataSettings): ImageData;
    放图像数据(imageData: ImageData, dx: number, dy: number): void;
    放图像数据(imageData: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void;
}

interface CanvasImageSmoothing {
    图像平滑: boolean;
    平滑质量: ImageSmoothingQuality;
}

interface CanvasPath {
    画弧(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    弧到(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    三次曲线到(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    闭合路径(): void;
    椭圆(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, counterclockwise?: boolean): void;
    连线到(x: number, y: number): void;
    移到(x: number, y: number): void;
    二次曲线到(cpx: number, cpy: number, x: number, y: number): void;
    矩形(x: number, y: number, w: number, h: number): void;
    圆角矩形(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | (number | DOMPointInit)[]): void;
}

interface CanvasPathDrawingStyles {
    线端: CanvasLineCap;
    线接: CanvasLineJoin;
    线宽: number;
    尖角限制: number;
    取虚线(): number[];
    设虚线(segments: number[]): void;
}

interface CanvasPattern {
    设变换(transform?: DOMMatrix2DInit): void;
}

interface CanvasRect {
    清矩形(x: number, y: number, w: number, h: number): void;
    填充矩形(x: number, y: number, w: number, h: number): void;
    描边矩形(x: number, y: number, w: number, h: number): void;
}

interface CanvasRenderingContext2D {
    readonly 画布: HTMLCanvasElement;
}

interface CanvasSettings {
    取上下文属性(): CanvasRenderingContext2DSettings;
}

interface CanvasShadowStyles {
    阴影模糊: number;
    阴影颜色: string;
    阴影横偏: number;
    阴影纵偏: number;
}

interface CanvasState {
    上下文丢失(): boolean;
    重置(): void;
    恢复(): void;
    保存(): void;
}

interface CanvasText {
    测量文本(text: string): TextMetrics;
}

interface CanvasTextDrawingStyles {
    方向: CanvasDirection;
    字体: string;
    字距: string;
    文本对齐: CanvasTextAlign;
    文本基线: CanvasTextBaseline;
    文本渲染: CanvasTextRendering;
    词距: string;
}

interface CanvasTransform {
    取变换(): DOMMatrix;
    重置变换(): void;
    旋转(angle: number): void;
    缩放(x: number, y: number): void;
    设变换(a: number, b: number, c: number, d: number, e: number, f: number): void;
    设变换(transform?: DOMMatrix2DInit): void;
    变换(a: number, b: number, c: number, d: number, e: number, f: number): void;
    平移(x: number, y: number): void;
}

interface CanvasUserInterface {
    按需绘焦点(element: Element): void;
    按需绘焦点(path: Path2D, element: Element): void;
}

interface CaretPosition {
    readonly 偏移: number;
}

interface CharacterData {
    数据: string;
    readonly 长度: number;
    readonly 属主文档: Document;
    追加数据(data: string): void;
    删除数据(offset: number, count: number): void;
    插入数据(offset: number, data: string): void;
    替换数据(offset: number, count: number, data: string): void;
    取子串数据(offset: number, count: number): string;
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
    读取(): Promise<ClipboardItems>;
    读取文本(): Promise<string>;
    写入(data: ClipboardItems): Promise<void>;
    写入文本(data: string): Promise<void>;
}

interface ClipboardEvent {
    readonly 剪贴板数据: DataTransfer | null;
}

interface ClipboardItem {
    readonly 类型列: ReadonlyArray<string>;
    按类型取(type: string): Promise<Blob>;
}

interface CloseEvent {
    readonly 是干净: boolean;
}

interface CommandEvent {
    readonly 来源: Element | null;
}

interface CompositionEvent {
    readonly 数据: string;
}

interface CompressionStream {
    readonly 可读: ReadableStream<Uint8Array<ArrayBuffer>>;
    readonly 可写: WritableStream<BufferSource>;
}

interface ConstantSourceNode {
    readonly 偏移: AudioParam;
    加事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: ConstantSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ContentVisibilityAutoStateChangeEvent {
    readonly 已跳过: boolean;
}

interface ConvolverNode {
    缓冲: AudioBuffer | null;
    规范化: boolean;
}

interface CookieChangeEvent {
    readonly 已变更: ReadonlyArray<CookieListItem>;
    readonly 已删除: ReadonlyArray<CookieListItem>;
}

interface CookieStore {
    变化时: ((this: CookieStore, ev: CookieChangeEvent) => any) | null;
    删除(name: string): Promise<void>;
    删除(options: CookieStoreDeleteOptions): Promise<void>;
    获取(name: string): Promise<CookieListItem | null>;
    获取(options?: CookieStoreGetOptions): Promise<CookieListItem | null>;
    取全部(name: string): Promise<CookieList>;
    取全部(options?: CookieStoreGetOptions): Promise<CookieList>;
    设置(name: string, value: string): Promise<void>;
    设置(options: CookieInit): Promise<void>;
    加事件监听<K extends keyof CookieStoreEventMap>(type: K, listener: (this: CookieStore, ev: CookieStoreEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof CookieStoreEventMap>(type: K, listener: (this: CookieStore, ev: CookieStoreEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface CookieStoreManager {
    退订(subscriptions: CookieStoreGetOptions[]): Promise<void>;
}

interface CountQueuingStrategy {
    readonly 高水位: number;
    readonly 大小: QueuingStrategySize;
}

interface Credential {
    readonly 编号: string;
    readonly 种类: string;
}

interface CredentialsContainer {
    创建(options?: CredentialCreationOptions): Promise<Credential | null>;
    获取(options?: CredentialRequestOptions): Promise<Credential | null>;
    阻止静默访问(): Promise<void>;
    存储(credential: Credential): Promise<void>;
}

interface Crypto {
    readonly 加密接口: SubtleCrypto;
    取随机值<T extends Exclude<BufferSource, ArrayBuffer>>(array: T): T;
    随机编号(): `${string}-${string}-${string}-${string}-${string}`;
}

interface CryptoKey {
    readonly 算法: KeyAlgorithm;
    readonly 可导出: boolean;
    readonly 种类: KeyType;
    readonly 用途集: KeyUsage[];
}

interface CustomElementRegistry {
    获取(name: string): CustomElementConstructor | undefined;
    初始化(root: Node): void;
}

interface CustomEvent<T = any> {
    readonly 细节: T;
}

interface CustomStateSet {
    逐个处理(callbackfn: (value: string, key: string, parent: CustomStateSet) => void, thisArg?: any): void;
}

interface DOMException {
    readonly 消息: string;
    readonly 名称: string;
}

interface DOMImplementation {
    创建文档(namespace: string | null, qualifiedName: string | null, doctype?: DocumentType | null): XMLDocument;
    创建文档类型(name: string, publicId: string, systemId: string): DocumentType;
    创建标记文档(title?: string): Document;
}

interface DOMMatrixReadOnly {
    水平翻转(): DOMMatrix;
    垂直翻转(): DOMMatrix;
    求逆(): DOMMatrix;
    相乘(other?: DOMMatrixInit): DOMMatrix;
    旋转(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix;
    缩放(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix;
    转数据(): any;
    平移(tx?: number, ty?: number, tz?: number): DOMMatrix;
    转字符串(): string;
}

interface DOMParser {
    从串解析(string: string, type: DOMParserSupportedType): Document;
}

interface DOMPoint {
    横坐标: number;
    纵坐标: number;
    深度坐标: number;
}

interface DOMPointReadOnly {
    readonly 横坐标: number;
    readonly 纵坐标: number;
    readonly 深度坐标: number;
    矩阵变换(matrix?: DOMMatrixInit): DOMPoint;
    转数据(): any;
}

interface DOMQuad {
    取边界(): DOMRect;
    转数据(): any;
}

interface DOMRect {
    高度: number;
    宽度: number;
    横坐标: number;
    纵坐标: number;
}

interface DOMRectList {
    readonly 长度: number;
    取项(index: number): DOMRect | null;
}

interface DOMRectReadOnly {
    readonly 底部: number;
    readonly 高度: number;
    readonly 左侧: number;
    readonly 右侧: number;
    readonly 顶部: number;
    readonly 宽度: number;
    readonly 横坐标: number;
    readonly 纵坐标: number;
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
    支持(token: string): boolean;
    切换(token: string, force?: boolean): boolean;
    逐个处理(callbackfn: (value: string, key: number, parent: DOMTokenList) => void, thisArg?: any): void;
}

interface DataTransfer {
    readonly 文件列: FileList;
    readonly 类型列: ReadonlyArray<string>;
}

interface DataTransferItem {
    readonly 类别: string;
    readonly 种类: string;
}

interface DataTransferItemList {
    readonly 长度: number;
    添加(data: string, type: string): DataTransferItem | null;
    添加(data: File): DataTransferItem | null;
    清空(): void;
    移除(index: number): void;
}

interface DecompressionStream {
    readonly 可读: ReadableStream<Uint8Array<ArrayBuffer>>;
    readonly 可写: WritableStream<BufferSource>;
}

interface DelayNode {
    readonly 延迟时长: AudioParam;
}

interface DeviceMotionEvent {
    readonly 加速度: DeviceMotionEventAcceleration | null;
    readonly 间隔: number;
    readonly 旋转速率: DeviceMotionEventRotationRate | null;
}

interface DeviceMotionEventAcceleration {
    readonly 横坐标: number | null;
    readonly 纵坐标: number | null;
    readonly 深度坐标: number | null;
}

interface DeviceMotionEventRotationRate {
    readonly 透明度: number | null;
    readonly 伽马: number | null;
}

interface DeviceOrientationEvent {
    readonly 绝对: boolean;
    readonly 透明度: number | null;
    readonly 伽马: number | null;
}

interface DigitalCredential {
    readonly 数据: any;
    readonly 协议: string;
    转数据(): any;
}

interface Document {
    链接颜色: string;
    readonly 全部: HTMLAllCollection;
    readonly 锚点集: HTMLCollectionOf<HTMLAnchorElement>;
    readonly 小程序集: HTMLCollection;
    主体: HTMLElement;
    readonly 字符集: string;
    readonly 编码字符集: string;
    readonly 兼容模式: string;
    readonly 默认视图: (WindowProxy & typeof globalThis) | null;
    设计模式: string;
    书写方向: string;
    readonly 文档类型: DocumentType | null;
    readonly 文档元素: HTMLElement;
    网域: string;
    readonly 全屏: boolean;
    readonly 头部: HTMLHeadElement;
    readonly 隐藏: boolean;
    readonly 图像集: HTMLCollectionOf<HTMLImageElement>;
    readonly 实现对象: DOMImplementation;
    readonly 链接集: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
    readonly 属主文档: null;
    readonly 插件集: HTMLCollectionOf<HTMLEmbedElement>;
    readonly 就绪态: DocumentReadyState;
    readonly 来源页: string;
    readonly 脚本集: HTMLCollectionOf<HTMLScriptElement>;
    readonly 时间线: DocumentTimeline;
    标题: string;
    readonly 可见状态: DocumentVisibilityState;
    收养节点<T extends Node>(node: T): T;
    清空(): void;
    关闭(): void;
    创建属性(localName: string): Attr;
    创建注释(data: string): Comment;
    创建文档片段(): DocumentFragment;
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
    创建范围(): Range;
    创建文本节点(data: string): Text;
    创建树遍历器(root: Node, whatToShow?: number, filter?: NodeFilter | null): TreeWalker;
    退出全屏(): Promise<void>;
    退出画中画(): Promise<void>;
    退出指针锁定(): void;
    按编号取元素(elementId: string): HTMLElement | null;
    按类取元素组(classNames: string): HTMLCollectionOf<Element>;
    按名取元素(elementName: string): NodeListOf<HTMLElement>;
    按标签取元素<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    按标签取元素<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    按标签取元素<K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
    按标签取元素<K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
    按标签取元素(qualifiedName: string): HTMLCollectionOf<Element>;
    取选区(): Selection | null;
    有焦点(): boolean;
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
    readonly 属主文档: Document;
    按编号取元素(elementId: string): HTMLElement | null;
    get 文本内容(): string;
    set 文本内容(value: string | null);
}

interface DocumentOrShadowRoot {
    readonly 活动元素: Element | null;
    采用的样式表: CSSStyleSheet[];
    readonly 指针锁定元素: Element | null;
    readonly 样式表集: StyleSheetList;
    按点取元素(x: number, y: number): Element | null;
    取动画列(): Animation[];
}

interface DocumentType {
    readonly 名称: string;
    readonly 属主文档: Document;
    readonly 公共编号: string;
    readonly 系统编号: string;
    get 文本内容(): null;
}

interface DragEvent {
    readonly 数据传送: DataTransfer | null;
}

interface DynamicsCompressorNode {
    readonly 拐点: AudioParam;
    readonly 比率: AudioParam;
    readonly 释放: AudioParam;
    readonly 阈值: AudioParam;
}

interface Element {
    readonly 属性集: NamedNodeMap;
    get 类列表(): DOMTokenList;
    set 类列表(value: string);
    类名: string;
    readonly 客户高: number;
    readonly 客户宽: number;
    编号: string;
    内部标记: string;
    readonly 本地名: string;
    外部标记: string;
    readonly 属主文档: Document;
    readonly 滚动高: number;
    滚动左: number;
    滚动顶: number;
    readonly 滚动宽: number;
    readonly 影子根: ShadowRoot | null;
    插槽: string;
    readonly 标签名: string;
    附加影子(init: ShadowRootInit): ShadowRoot;
    检查可见(options?: CheckVisibilityOptions): boolean;
    最近祖先<K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
    最近祖先<K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
    最近祖先<K extends keyof MathMLElementTagNameMap>(selector: K): MathMLElementTagNameMap[K] | null;
    最近祖先<E extends Element = Element>(selectors: string): E | null;
    计算样式表(): StylePropertyMapReadOnly;
    取属性(qualifiedName: string): string | null;
    取属性名(): string[];
    取属性节点(qualifiedName: string): Attr | null;
    取边界矩形(): DOMRect;
    取客户端矩形(): DOMRectList;
    按类取元素组(classNames: string): HTMLCollectionOf<Element>;
    按标签取元素<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    按标签取元素<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    按标签取元素<K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
    按标签取元素<K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
    按标签取元素(qualifiedName: string): HTMLCollectionOf<Element>;
    有属性(qualifiedName: string): boolean;
    邻近插入元素(where: InsertPosition, element: Element): Element | null;
    邻近插入标记(position: InsertPosition, string: string): void;
    邻近插入文本(where: InsertPosition, data: string): void;
    匹配选择器<K extends keyof HTMLElementTagNameMap>(selectors: K): this is HTMLElementTagNameMap[K];
    匹配选择器<K extends keyof SVGElementTagNameMap>(selectors: K): this is SVGElementTagNameMap[K];
    匹配选择器<K extends keyof MathMLElementTagNameMap>(selectors: K): this is MathMLElementTagNameMap[K];
    匹配选择器(selectors: string): boolean;
    释放指针捕获(pointerId: number): void;
    删属性(qualifiedName: string): void;
    删属性节点(attr: Attr): Attr;
    请求全屏(options?: FullscreenOptions): Promise<void>;
    请求指针锁定(options?: PointerLockOptions): Promise<void>;
    滚动(options?: ScrollToOptions): void;
    滚动(x: number, y: number): void;
    滚动偏移(options?: ScrollToOptions): void;
    滚动偏移(x: number, y: number): void;
    滚入视野(arg?: boolean | ScrollIntoViewOptions): void;
    滚动到(options?: ScrollToOptions): void;
    滚动到(x: number, y: number): void;
    设置属性(qualifiedName: string, value: string): void;
    设属性节点(attr: Attr): Attr | null;
    设指针捕获(pointerId: number): void;
    切换属性(qualifiedName: string, force?: boolean): boolean;
    get 文本内容(): string;
    set 文本内容(value: string | null);
    加事件监听<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ElementEventMap>(type: K, listener: (this: Element, ev: ElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ElementCSSInlineStyle {
    readonly 属性样式表: StylePropertyMap;
    get 样式(): CSSStyleDeclaration;
    set 样式(cssText: string);
}

interface ElementContentEditable {
    可编辑: string;
    回车提示: string;
    输入模式: string;
}

interface ElementInternals {
    readonly 表单: HTMLFormElement | null;
    readonly 标签列: NodeList;
    readonly 影子根: ShadowRoot | null;
    readonly 校验消息: string;
    readonly 有效性: ValidityState;
    检查校验(): boolean;
    报告校验(): boolean;
}

interface EncodedAudioChunk {
    readonly 字节长度: number;
    readonly 时长: number | null;
    readonly 时间戳: number;
    readonly 种类: EncodedAudioChunkType;
    复制到(destination: AllowSharedBufferSource): void;
}

interface EncodedVideoChunk {
    readonly 字节长度: number;
    readonly 时长: number | null;
    readonly 时间戳: number;
    readonly 种类: EncodedVideoChunkType;
    复制到(destination: AllowSharedBufferSource): void;
}

interface ErrorEvent {
    readonly 列号: number;
    readonly 报错: any;
    readonly 文件名: string;
    readonly 行号: number;
    readonly 消息: string;
}

interface Event {
    readonly 会冒泡: boolean;
    readonly 可取消: boolean;
    readonly 可穿透: boolean;
    readonly 当前目标: EventTarget | null;
    readonly 默认已阻止: boolean;
    readonly 事件阶段: number;
    readonly 可信: boolean;
    返回值: boolean;
    readonly 目标: EventTarget | null;
    readonly 种类: string;
    穿透路径(): EventTarget[];
    阻止默认(): void;
    立即停止传播(): void;
    停止传播(): void;
}

interface EventCounts {
    逐个处理(callbackfn: (value: number, key: string, parent: EventCounts) => void, thisArg?: any): void;
}

interface EventSource {
    出错时: ((this: EventSource, ev: Event) => any) | null;
    收消息时: ((this: EventSource, ev: MessageEvent) => any) | null;
    打开时: ((this: EventSource, ev: Event) => any) | null;
    readonly 就绪态: number;
    readonly 地址: string;
    关闭(): void;
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

interface File {
    readonly 名称: string;
}

interface FileList {
    readonly 长度: number;
    取项(index: number): File | null;
}

interface FileReader {
    readonly 报错: DOMException | null;
    中止时: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    出错时: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    加载时: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    开始加载时: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    进度变化时: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
    readonly 就绪态: 0 | 1 | 2;
    中止(): void;
    读为缓冲(blob: Blob): void;
    读为文本(blob: Blob, encoding?: string): void;
    加事件监听<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface FileSystem {
    readonly 名称: string;
    readonly 根元素: FileSystemDirectoryEntry;
}

interface FileSystemDirectoryEntry {
    取目录(path?: string | null, options?: FileSystemFlags, successCallback?: FileSystemEntryCallback, errorCallback?: ErrorCallback): void;
    取文件(path?: string | null, options?: FileSystemFlags, successCallback?: FileSystemEntryCallback, errorCallback?: ErrorCallback): void;
}

interface FileSystemDirectoryHandle {
    readonly 类别: "directory";
    取目录句柄(name: string, options?: FileSystemGetDirectoryOptions): Promise<FileSystemDirectoryHandle>;
    取文件句柄(name: string, options?: FileSystemGetFileOptions): Promise<FileSystemFileHandle>;
    删记录(name: string, options?: FileSystemRemoveOptions): Promise<void>;
    解决(possibleDescendant: FileSystemHandle): Promise<string[] | null>;
    解析路径(possibleDescendant: FileSystemHandle): Promise<string[] | null>;
}

interface FileSystemEntry {
    readonly 名称: string;
}

interface FileSystemFileHandle {
    readonly 类别: "file";
    创建可写流(options?: FileSystemCreateWritableOptions): Promise<FileSystemWritableFileStream>;
    取文件(): Promise<File>;
}

interface FileSystemHandle {
    readonly 类别: FileSystemHandleKind;
    readonly 名称: string;
    是同条目(other: FileSystemHandle): Promise<boolean>;
}

interface FileSystemWritableFileStream {
    定位(position: number): Promise<void>;
    截短(size: number): Promise<void>;
    写入(data: FileSystemWriteChunkType): Promise<void>;
}

interface FocusEvent {
    readonly 相关目标: EventTarget | null;
}

interface FontFace {
    显示方式: FontDisplay;
    族名: string;
    特性设置: string;
    readonly 已加载: Promise<FontFace>;
    readonly 状态码: FontFaceLoadStatus;
    拉伸度: string;
    样式: string;
    字符范围: string;
    字重: string;
    加载(): Promise<FontFace>;
}

interface FontFaceSet {
    readonly 就绪: Promise<FontFaceSet>;
    readonly 状态码: FontFaceSetLoadStatus;
    检查(font: string, text?: string): boolean;
    加载(font: string, text?: string): Promise<FontFace[]>;
    逐个处理(callbackfn: (value: FontFace, key: FontFace, parent: FontFaceSet) => void, thisArg?: any): void;
    加事件监听<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof FontFaceSetEventMap>(type: K, listener: (this: FontFaceSet, ev: FontFaceSetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface FontFaceSource {
    readonly 字体集: FontFaceSet;
}

interface FormData {
    后插(name: string, value: string | Blob): void;
    后插(name: string, value: string): void;
    后插(name: string, blobValue: Blob, filename?: string): void;
    删除(name: string): void;
    获取(name: string): FormDataEntryValue | null;
    取全部(name: string): FormDataEntryValue[];
    含有(name: string): boolean;
    设置(name: string, value: string | Blob): void;
    设置(name: string, value: string): void;
    设置(name: string, blobValue: Blob, filename?: string): void;
    逐个处理(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void;
}

interface FormDataEvent {
    readonly 表单数据: FormData;
}

interface GPUAdapter {
    readonly 附加信息: GPUAdapterInfo;
    readonly 限制集: GPUSupportedLimits;
}

interface GPUAdapterInfo {
    readonly 设备: string;
}

interface GPUBuffer {
    readonly 大小: GPUSize64Out;
    readonly 用量: GPUFlagsConstant;
    销毁(): void;
}

interface GPUCanvasContext {
    readonly 画布: HTMLCanvasElement | OffscreenCanvas;
    取配置(): GPUCanvasConfiguration | null;
    取消配置(): void;
}

interface GPUCommandEncoder {
    完成(descriptor?: GPUCommandBufferDescriptor): GPUCommandBuffer;
}

interface GPUCompilationMessage {
    readonly 长度: number;
    readonly 消息: string;
    readonly 偏移: number;
    readonly 种类: GPUCompilationMessageType;
}

interface GPUDevice {
    readonly 限制集: GPUSupportedLimits;
    创建缓冲(descriptor: GPUBufferDescriptor): GPUBuffer;
    创建采样器(descriptor?: GPUSamplerDescriptor): GPUSampler;
    创建纹理(descriptor: GPUTextureDescriptor): GPUTexture;
    销毁(): void;
    加事件监听<K extends keyof GPUDeviceEventMap>(type: K, listener: (this: GPUDevice, ev: GPUDeviceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof GPUDeviceEventMap>(type: K, listener: (this: GPUDevice, ev: GPUDeviceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface GPUDeviceLostInfo {
    readonly 消息: string;
}

interface GPUError {
    readonly 消息: string;
}

interface GPUObjectBase {
    标签: string;
}

interface GPUQuerySet {
    readonly 种类: GPUQueryType;
    销毁(): void;
}

interface GPUQueue {
    提交(commandBuffers: GPUCommandBuffer[]): void;
}

interface GPURenderBundleEncoder {
    完成(descriptor?: GPURenderBundleDescriptor): GPURenderBundle;
}

interface GPURenderCommandsMixin {
    绘制(vertexCount: GPUSize32, instanceCount?: GPUSize32, firstVertex?: GPUSize32, firstInstance?: GPUSize32): void;
}

interface GPUSupportedFeatures {
    逐个处理(callbackfn: (value: string, key: string, parent: GPUSupportedFeatures) => void, thisArg?: any): void;
}

interface GPUTexture {
    readonly 格式化: GPUTextureFormat;
    readonly 高度: GPUIntegerCoordinateOut;
    readonly 用量: GPUFlagsConstant;
    readonly 宽度: GPUIntegerCoordinateOut;
    销毁(): void;
}

interface GPUUncapturedErrorEvent {
    readonly 报错: GPUError;
}

interface GainNode {
    readonly 增益值: AudioParam;
}

interface Gamepad {
    readonly 轴值: ReadonlyArray<number>;
    readonly 按钮集: ReadonlyArray<GamepadButton>;
    readonly 已连通: boolean;
    readonly 编号: string;
    readonly 序号: number;
    readonly 映射方式: GamepadMappingType;
    readonly 时间戳: DOMHighResTimeStamp;
    readonly 振动驱动器: GamepadHapticActuator;
}

interface GamepadButton {
    readonly 已按下: boolean;
    readonly 已触碰: boolean;
    readonly 值内容: number;
}

interface GamepadEvent {
    readonly 手柄: Gamepad;
}

interface GamepadHapticActuator {
    播放效果(type: GamepadHapticEffectType, params?: GamepadEffectParameters): Promise<GamepadHapticsResult>;
    重置(): Promise<GamepadHapticsResult>;
}

interface GenericTransformStream {
    readonly 可读: ReadableStream;
    readonly 可写: WritableStream;
}

interface Geolocation {
    取当前位置(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | null, options?: PositionOptions): void;
    监视位置(successCallback: PositionCallback, errorCallback?: PositionErrorCallback | null, options?: PositionOptions): number;
}

interface GeolocationCoordinates {
    readonly 精度: number;
    readonly 海拔: number | null;
    readonly 海拔精度: number | null;
    readonly 航向: number | null;
    readonly 纬度: number;
    readonly 经度: number;
    readonly 速度: number | null;
    转数据(): any;
}

interface GeolocationPosition {
    readonly 坐标: GeolocationCoordinates;
    readonly 时间戳: EpochTimeStamp;
    转数据(): any;
}

interface GeolocationPositionError {
    readonly 消息: string;
}

interface GlobalEventHandlers {
    中止时: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    动画开始时: ((this: GlobalEventHandlers, ev: AnimationEvent) => any) | null;
    失焦时: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    可播放时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    变化时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    点击时: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    关闭时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    右键菜单时: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    双击时: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    拖起时: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    放下时: ((this: GlobalEventHandlers, ev: DragEvent) => any) | null;
    时长变化时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    清空时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    播放结束时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    出错时: OnErrorEventHandler;
    聚焦时: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null;
    输入时: ((this: GlobalEventHandlers, ev: InputEvent) => any) | null;
    按键按下时: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    按键抬起时: ((this: GlobalEventHandlers, ev: KeyboardEvent) => any) | null;
    加载时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    数据载入时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    元数据载入时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    开始加载时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    鼠标按下时: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    鼠标移动时: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    鼠标移出时: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    鼠标移入时: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    鼠标抬起时: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null;
    暂停时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    播放开始时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    指针取消时: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    指针按下时: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    指针进入时: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    指针离开时: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    指针移动时: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    指针抬起时: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null;
    进度变化时: ((this: GlobalEventHandlers, ev: ProgressEvent) => any) | null;
    速率变化时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    改变大小时: ((this: GlobalEventHandlers, ev: UIEvent) => any) | null;
    滚动时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    定位完成时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    正在定位时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    停滞时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    提交时: ((this: GlobalEventHandlers, ev: SubmitEvent) => any) | null;
    挂起时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    时刻更新时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    触控取消时?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    触控结束时?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    触控移动时?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    触控开始时?: ((this: GlobalEventHandlers, ev: TouchEvent) => any) | null | undefined;
    音量变化时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    等待时: ((this: GlobalEventHandlers, ev: Event) => any) | null;
    滚轮时: ((this: GlobalEventHandlers, ev: WheelEvent) => any) | null;
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
    编码字符集: string;
    坐标: string;
    下载: string;
    链接语言: string;
    名称: string;
    往返探测: string;
    来源页策略: string;
    关系: string;
    get 关系列表(): DOMTokenList;
    set 关系列表(value: string);
    目标: string;
    转文本: string;
    种类: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLAnchorElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLAreaElement {
    替代文本: string;
    坐标: string;
    下载: string;
    往返探测: string;
    来源页策略: string;
    关系: string;
    get 关系列表(): DOMTokenList;
    set 关系列表(value: string);
    目标: string;
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
    目标: string;
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
    已禁用: boolean;
    readonly 表单: HTMLFormElement | null;
    readonly 标签列: NodeListOf<HTMLLabelElement>;
    名称: string;
    种类: "submit" | "reset" | "button";
    readonly 校验消息: string;
    readonly 有效性: ValidityState;
    值内容: string;
    检查校验(): boolean;
    报告校验(): boolean;
    设自定义校验(error: string): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLButtonElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLCanvasElement {
    高度: number;
    宽度: number;
    捕获流(frameRequestRate?: number): MediaStream;
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
    readonly 选项列: HTMLCollectionOf<HTMLOptionElement>;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDataListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLDetailsElement {
    名称: string;
    打开: boolean;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLDetailsElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLDialogElement {
    打开: boolean;
    返回值: string;
    关闭(returnValue?: string): void;
    请求关闭(returnValue?: string): void;
    显示(): void;
    显示模态(): void;
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
    对齐: string;
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
    访问键: string;
    readonly 访问键标签: string;
    自动大写: string;
    书写方向: string;
    可拖动: boolean;
    隐藏: boolean | "until-found";
    内部文本: string;
    语言: string;
    readonly 偏移高: number;
    readonly 偏移左: number;
    readonly 偏移父: Element | null;
    readonly 偏移顶: number;
    readonly 偏移宽: number;
    外部文本: string;
    浮层: string | null;
    拼写检查: boolean;
    标题: string;
    平移: boolean;
    附加内部(): ElementInternals;
    点击(): void;
    隐藏浮层(): void;
    显示浮层(options?: ShowPopoverOptions): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLEmbedElement {
    对齐: string;
    高度: string;
    名称: string;
    源址: string;
    种类: string;
    宽度: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLEmbedElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLFieldSetElement {
    已禁用: boolean;
    readonly 元素集合: HTMLCollection;
    readonly 表单: HTMLFormElement | null;
    名称: string;
    readonly 种类: string;
    readonly 校验消息: string;
    readonly 有效性: ValidityState;
    检查校验(): boolean;
    报告校验(): boolean;
    设自定义校验(error: string): void;
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
    接受字符集: string;
    动作: string;
    自动完成: AutoFillBase;
    readonly 元素集合: HTMLFormControlsCollection;
    编码方式: string;
    编码类型: string;
    readonly 长度: number;
    提交方法: string;
    名称: string;
    不校验: boolean;
    关系: string;
    get 关系列表(): DOMTokenList;
    set 关系列表(value: string);
    目标: string;
    检查校验(): boolean;
    报告校验(): boolean;
    重置(): void;
    提交(): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFormElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLFrameElement {
    readonly 内容文档: Document | null;
    readonly 内容窗口: WindowProxy | null;
    名称: string;
    源址: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLFrameSetElement {
    列数: string;
    行数: string;
    加事件监听<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLFrameSetElementEventMap>(type: K, listener: (this: HTMLFrameSetElement, ev: HTMLFrameSetElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLHRElement {
    对齐: string;
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
    对齐: string;
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
    散列: string;
    主机: string;
    主机名: string;
    链接: string;
    转字符串(): string;
    readonly 源点: string;
    密码: string;
    路径名: string;
    端口: string;
    协议: string;
    查找: string;
    用户名: string;
}

interface HTMLIFrameElement {
    对齐: string;
    允许项: string;
    允许全屏: boolean;
    readonly 内容文档: Document | null;
    readonly 内容窗口: WindowProxy | null;
    高度: string;
    加载方式: "eager" | "lazy";
    名称: string;
    来源页策略: ReferrerPolicy;
    get 沙箱(): DOMTokenList;
    set 沙箱(value: string);
    源址: string;
    源文档: string;
    宽度: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLIFrameElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLImageElement {
    对齐: string;
    替代文本: string;
    边框: string;
    跨源: string | null;
    readonly 当前源: string;
    解码方式: "async" | "sync" | "auto";
    获取优先级: "high" | "low" | "auto";
    高度: number;
    水平间距: number;
    加载方式: "eager" | "lazy";
    低清源: string;
    名称: string;
    readonly 自然高: number;
    readonly 自然宽: number;
    来源页策略: string;
    尺寸表: string;
    源址: string;
    源集: string;
    宽度: number;
    readonly 横坐标: number;
    readonly 纵坐标: number;
    解码(): Promise<void>;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLImageElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLInputElement {
    接受类型: string;
    对齐: string;
    替代文本: string;
    自动完成: AutoFill;
    采集: string;
    已勾选: boolean;
    默认勾选: boolean;
    默认值: string;
    已禁用: boolean;
    文件列: FileList | null;
    readonly 表单: HTMLFormElement | null;
    高度: number;
    不确定: boolean;
    readonly 标签列: NodeListOf<HTMLLabelElement> | null;
    readonly 候选列表: HTMLDataListElement | null;
    最大: string;
    最大限制: string;
    最大长度: number;
    最小: string;
    最小限制: string;
    最小长度: number;
    多选: boolean;
    名称: string;
    占位提示: string;
    只读: boolean;
    必填: boolean;
    选区终点: number | null;
    选区起点: number | null;
    大小: number;
    源址: string;
    步长: string;
    种类: string;
    readonly 校验消息: string;
    readonly 有效性: ValidityState;
    值内容: string;
    值作日期: Date | null;
    值作数字: number;
    宽度: number;
    检查校验(): boolean;
    报告校验(): boolean;
    全选(): void;
    设自定义校验(error: string): void;
    设选区范围(start: number | null, end: number | null, direction?: SelectionDirection): void;
    显示选择器(): void;
    步减(n?: number): void;
    步增(n?: number): void;
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
    readonly 表单: HTMLFormElement | null;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLabelElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLLegendElement {
    对齐: string;
    readonly 表单: HTMLFormElement | null;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLegendElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLLinkElement {
    get 阻塞(): DOMTokenList;
    set 阻塞(value: string);
    编码字符集: string;
    跨源: string | null;
    已禁用: boolean;
    获取优先级: "high" | "low" | "auto";
    链接: string;
    链接语言: string;
    完整性: string;
    媒体: string;
    来源页策略: string;
    关系: string;
    get 关系列表(): DOMTokenList;
    set 关系列表(value: string);
    get 尺寸表(): DOMTokenList;
    set 尺寸表(value: string);
    目标: string;
    种类: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLLinkElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLMapElement {
    名称: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMapElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLMarqueeElement {
    方向: string;
    高度: string;
    水平间距: number;
    循环: number;
    宽度: string;
    开始(): void;
    停止(): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMarqueeElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLMediaElement {
    自动播放: boolean;
    readonly 缓冲区间: TimeRanges;
    控件: boolean;
    跨源: string | null;
    readonly 当前源: string;
    默认速率: number;
    readonly 时长: number;
    readonly 已结束: boolean;
    readonly 报错: MediaError | null;
    循环: boolean;
    已静音: boolean;
    readonly 网络状态: number;
    readonly 已暂停: boolean;
    readonly 已播放区间: TimeRanges;
    预加载: "none" | "metadata" | "auto" | "";
    readonly 就绪态: number;
    readonly 可定位: TimeRanges;
    readonly 正在定位: boolean;
    readonly 输出设备: string;
    源址: string;
    源对象: MediaProvider | null;
    音量: number;
    加文本轨(kind: TextTrackKind, label?: string, language?: string): TextTrack;
    可播放类型(type: string): CanPlayTypeResult;
    加载(): void;
    暂停(): void;
    播放(): Promise<void>;
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
    媒体: string;
    名称: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMetaElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLMeterElement {
    readonly 标签列: NodeListOf<HTMLLabelElement>;
    最大: number;
    最大限制: number;
    最小: number;
    最小限制: number;
    最佳值: number;
    值内容: number;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLMeterElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLModElement {
    引用: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLModElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLOListElement {
    开始: number;
    种类: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOListElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLObjectElement {
    对齐: string;
    边框: string;
    readonly 内容文档: Document | null;
    readonly 内容窗口: WindowProxy | null;
    数据: string;
    readonly 表单: HTMLFormElement | null;
    高度: string;
    水平间距: number;
    名称: string;
    种类: string;
    readonly 校验消息: string;
    readonly 有效性: ValidityState;
    宽度: string;
    检查校验(): boolean;
    报告校验(): boolean;
    设自定义校验(error: string): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLObjectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLOptGroupElement {
    已禁用: boolean;
    标签: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptGroupElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLOptionElement {
    已禁用: boolean;
    readonly 表单: HTMLFormElement | null;
    readonly 序号: number;
    标签: string;
    已选中: boolean;
    转文本: string;
    值内容: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLOptionsCollection {
    长度: number;
    选中序号: number;
    添加(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    移除(index: number): void;
}

interface HTMLOrSVGElement {
    自动聚焦: boolean;
    readonly 数据集: DOMStringMap;
    一次性令牌: string;
    制表序号: number;
    失焦(): void;
    聚焦(options?: FocusOptions): void;
}

interface HTMLOutputElement {
    默认值: string;
    readonly 表单: HTMLFormElement | null;
    readonly 标签列: NodeListOf<HTMLLabelElement>;
    名称: string;
    readonly 种类: string;
    readonly 校验消息: string;
    readonly 有效性: ValidityState;
    值内容: string;
    检查校验(): boolean;
    报告校验(): boolean;
    设自定义校验(error: string): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLOutputElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLParagraphElement {
    对齐: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLParagraphElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLParamElement {
    名称: string;
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
    readonly 标签列: NodeListOf<HTMLLabelElement>;
    最大: number;
    最大限制: number;
    readonly 位置: number;
    值内容: number;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLProgressElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLQuoteElement {
    引用: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLQuoteElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLScriptElement {
    异步: boolean;
    get 阻塞(): DOMTokenList;
    set 阻塞(value: string);
    编码字符集: string;
    跨源: string | null;
    延迟: boolean;
    获取优先级: "high" | "low" | "auto";
    完整性: string;
    非模块: boolean;
    来源页策略: string;
    源址: string;
    转文本: string;
    种类: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLScriptElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLSelectElement {
    自动完成: AutoFill;
    已禁用: boolean;
    readonly 表单: HTMLFormElement | null;
    readonly 标签列: NodeListOf<HTMLLabelElement>;
    长度: number;
    多选: boolean;
    名称: string;
    readonly 选项列: HTMLOptionsCollection;
    必填: boolean;
    选中序号: number;
    大小: number;
    readonly 种类: "select-one" | "select-multiple";
    readonly 校验消息: string;
    readonly 有效性: ValidityState;
    值内容: string;
    添加(element: HTMLOptionElement | HTMLOptGroupElement, before?: HTMLElement | number | null): void;
    检查校验(): boolean;
    取项(index: number): HTMLOptionElement | null;
    移除(): void;
    移除(index: number): void;
    报告校验(): boolean;
    设自定义校验(error: string): void;
    显示选择器(): void;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSelectElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLSlotElement {
    名称: string;
    合入(...nodes: (Element | Text)[]): void;
    分配元素(options?: AssignedNodesOptions): Element[];
    分配节点(options?: AssignedNodesOptions): Node[];
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLSlotElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLSourceElement {
    高度: number;
    媒体: string;
    尺寸表: string;
    源址: string;
    源集: string;
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
    get 阻塞(): DOMTokenList;
    set 阻塞(value: string);
    已禁用: boolean;
    媒体: string;
    种类: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLStyleElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableCaptionElement {
    对齐: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCaptionElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableCellElement {
    缩写: string;
    对齐: string;
    轴向: string;
    头集合: string;
    高度: string;
    作用域: string;
    宽度: string;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableCellElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableColElement {
    对齐: string;
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
    对齐: string;
    边框: string;
    字幕: HTMLTableCaptionElement | null;
    readonly 行数: HTMLCollectionOf<HTMLTableRowElement>;
    规则表: string;
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
    对齐: string;
    readonly 单元格集: HTMLCollectionOf<HTMLTableCellElement>;
    加事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLTableRowElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HTMLTableSectionElement {
    对齐: string;
    readonly 行数: HTMLCollectionOf<HTMLTableRowElement>;
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
    自动完成: AutoFill;
    列数: number;
    默认值: string;
    已禁用: boolean;
    readonly 表单: HTMLFormElement | null;
    readonly 标签列: NodeListOf<HTMLLabelElement>;
    最大长度: number;
    最小长度: number;
    名称: string;
    占位提示: string;
    只读: boolean;
    必填: boolean;
    行数: number;
    选区终点: number;
    选区起点: number;
    readonly 文本长度: number;
    readonly 种类: string;
    readonly 校验消息: string;
    readonly 有效性: ValidityState;
    值内容: string;
    换行方式: string;
    检查校验(): boolean;
    报告校验(): boolean;
    全选(): void;
    设自定义校验(error: string): void;
    设选区范围(start: number | null, end: number | null, direction?: SelectionDirection): void;
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
    类别: string;
    标签: string;
    readonly 就绪态: number;
    源址: string;
    源语言: string;
    readonly 轨道: TextTrack;
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
    内联播放: boolean;
    海报: string;
    readonly 视频高: number;
    readonly 视频宽: number;
    宽度: number;
    请求画中画(): Promise<PictureInPictureWindow>;
    请求视频帧(callback: VideoFrameRequestCallback): number;
    加事件监听<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof HTMLVideoElementEventMap>(type: K, listener: (this: HTMLVideoElement, ev: HTMLVideoElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface HashChangeEvent {
    readonly 新地址: string;
    readonly 旧地址: string;
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
    优先级: number;
    种类: HighlightType;
    逐个处理(callbackfn: (value: AbstractRange, key: AbstractRange, parent: Highlight) => void, thisArg?: any): void;
}

interface HighlightRegistry {
    逐个处理(callbackfn: (value: Highlight, key: string, parent: HighlightRegistry) => void, thisArg?: any): void;
}

interface History {
    readonly 长度: number;
    滚动恢复: ScrollRestoration;
    readonly 状态: any;
    后退(): void;
    前进(): void;
    跳转(delta?: number): void;
    压入状态(data: any, unused: string, url?: string | URL | null): void;
    替换状态(data: any, unused: string, url?: string | URL | null): void;
}

interface IDBCursor {
    readonly 方向: IDBCursorDirection;
    readonly 键名: IDBValidKey;
    readonly 来源: IDBObjectStore | IDBIndex;
    推进(count: number): void;
    续取(key?: IDBValidKey): void;
    删除(): IDBRequest<undefined>;
    更新(value: any): IDBRequest<IDBValidKey>;
}

interface IDBCursorWithValue {
    readonly 值内容: any;
}

interface IDBDatabase {
    readonly 名称: string;
    中止时: ((this: IDBDatabase, ev: Event) => any) | null;
    关闭时: ((this: IDBDatabase, ev: Event) => any) | null;
    出错时: ((this: IDBDatabase, ev: Event) => any) | null;
    版本变化时: ((this: IDBDatabase, ev: IDBVersionChangeEvent) => any) | null;
    关闭(): void;
    创建对象存储(name: string, options?: IDBObjectStoreParameters): IDBObjectStore;
    删除对象存储(name: string): void;
    事务(storeNames: string | string[], mode?: IDBTransactionMode, options?: IDBTransactionOptions): IDBTransaction;
    加事件监听<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface IDBFactory {
    打开(name: string, version?: number): IDBOpenDBRequest;
}

interface IDBIndex {
    readonly 键路径: string | string[];
    名称: string;
    readonly 对象存储: IDBObjectStore;
    获取(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
    取全部(queryOrOptions?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    取全部键(queryOrOptions?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    取键(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    打开游标(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
}

interface IDBKeyRange {
    包含(key: any): boolean;
}

interface IDBObjectStore {
    readonly 自动递增: boolean;
    readonly 键路径: string | string[] | null;
    名称: string;
    readonly 事务: IDBTransaction;
    添加(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
    清空(): IDBRequest<undefined>;
    创建索引(name: string, keyPath: string | string[], options?: IDBIndexParameters): IDBIndex;
    删除(query: IDBValidKey | IDBKeyRange): IDBRequest<undefined>;
    删除索引(name: string): void;
    获取(query: IDBValidKey | IDBKeyRange): IDBRequest<any>;
    取全部(queryOrOptions?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>;
    取全部键(queryOrOptions?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>;
    取键(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>;
    序号(name: string): IDBIndex;
    打开游标(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>;
    存入(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>;
}

interface IDBOpenDBRequest {
    被阻止时: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    需要升级时: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null;
    加事件监听<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface IDBRequest<T = any> {
    readonly 报错: DOMException | null;
    出错时: ((this: IDBRequest<T>, ev: Event) => any) | null;
    成功时: ((this: IDBRequest<T>, ev: Event) => any) | null;
    readonly 就绪态: IDBRequestReadyState;
    readonly 来源: IDBObjectStore | IDBIndex | IDBCursor;
    readonly 事务: IDBTransaction | null;
    加事件监听<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface IDBTransaction {
    readonly 持久性: IDBTransactionDurability;
    readonly 报错: DOMException | null;
    readonly 模式: IDBTransactionMode;
    中止时: ((this: IDBTransaction, ev: Event) => any) | null;
    完成时: ((this: IDBTransaction, ev: Event) => any) | null;
    出错时: ((this: IDBTransaction, ev: Event) => any) | null;
    中止(): void;
    落实(): void;
    对象存储(name: string): IDBObjectStore;
    加事件监听<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface IdleDeadline {
    readonly 已超时: boolean;
    剩余时间(): DOMHighResTimeStamp;
}

interface ImageBitmap {
    readonly 高度: number;
    readonly 宽度: number;
    关闭(): void;
}

interface ImageBitmapRenderingContext {
    readonly 画布: HTMLCanvasElement | OffscreenCanvas;
    从位图传输(bitmap: ImageBitmap | null): void;
}

interface ImageCapture {
    readonly 轨道: MediaStreamTrack;
    取照片能力(): Promise<PhotoCapabilities>;
    取照片设置(): Promise<PhotoSettings>;
    抓取帧(): Promise<ImageBitmap>;
    拍照(photoSettings?: PhotoSettings): Promise<Blob>;
}

interface ImageData {
    readonly 色彩空间: PredefinedColorSpace;
    readonly 数据: ImageDataArray;
    readonly 高度: number;
    readonly 宽度: number;
}

interface ImageDecoder {
    readonly 解码完成: Promise<void>;
    readonly 轨道集: ImageTrackList;
    readonly 种类: string;
    关闭(): void;
    解码(options?: ImageDecodeOptions): Promise<ImageDecodeResult>;
    重置(): void;
}

interface ImageTrack {
    已选中: boolean;
}

interface ImageTrackList {
    readonly 长度: number;
    readonly 就绪: Promise<void>;
    readonly 选中序号: number;
}

interface ImportMeta {
    地址: string;
    解决(specifier: string): string;
    解析路径(specifier: string): string;
}

interface InputDeviceInfo {
    取能力(): MediaTrackCapabilities;
}

interface InputEvent {
    readonly 数据: string | null;
    readonly 数据传送: DataTransfer | null;
    readonly 输入类型: string;
    readonly 正在组字: boolean;
}

interface IntersectionObserver {
    readonly 根元素: Element | Document | null;
    readonly 根边距: string;
    readonly 阈值列: ReadonlyArray<number>;
    断开(): void;
    观察(target: Element): void;
    取记录(): IntersectionObserverEntry[];
    停止观察(target: Element): void;
}

interface IntersectionObserverEntry {
    readonly 边界矩形: DOMRectReadOnly;
    readonly 相交比: number;
    readonly 相交矩形: DOMRectReadOnly;
    readonly 正在相交: boolean;
    readonly 根边界: DOMRectReadOnly | null;
    readonly 目标: Element;
}

interface KeyboardEvent {
    readonly 替代键: boolean;
    readonly 字符码: number;
    readonly 正在组字: boolean;
    readonly 键名: string;
    readonly 键码: number;
    readonly 重复: boolean;
    取修饰状态(keyArg: string): boolean;
}

interface KeyframeEffect {
    合成: CompositeOperation;
    迭代合成: IterationCompositeOperation;
    伪元素: string | null;
    目标: Element | null;
    取关键帧(): ComputedKeyframe[];
    设关键帧(keyframes: Keyframe[] | PropertyIndexedKeyframes | null): void;
}

interface LargestContentfulPaint {
    readonly 元素: Element | null;
    readonly 编号: string;
    readonly 加载时刻: DOMHighResTimeStamp;
    readonly 渲染时刻: DOMHighResTimeStamp;
    readonly 大小: number;
    readonly 地址: string;
    转数据(): any;
}

interface LinkStyle {
    readonly 样式表: CSSStyleSheet | null;
}

interface Location {
    散列: string;
    主机: string;
    主机名: string;
    链接: string;
    转字符串(): string;
    readonly 源点: string;
    路径名: string;
    端口: string;
    协议: string;
    查找: string;
    合入(url: string | URL): void;
    重新加载(): void;
    替换(url: string | URL): void;
}

interface Lock {
    readonly 模式: LockMode;
    readonly 名称: string;
}

interface LockManager {
    查询(): Promise<LockManagerSnapshot>;
}

interface MIDIAccess {
    加事件监听<K extends keyof MIDIAccessEventMap>(type: K, listener: (this: MIDIAccess, ev: MIDIAccessEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MIDIAccessEventMap>(type: K, listener: (this: MIDIAccess, ev: MIDIAccessEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MIDIConnectionEvent {
    readonly 端口: MIDIPort | null;
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

interface MIDIMessageEvent {
    readonly 数据: Uint8Array<ArrayBuffer> | null;
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
    readonly 编号: string;
    readonly 厂商: string | null;
    readonly 名称: string | null;
    readonly 状态: MIDIPortDeviceState;
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

interface MediaCapabilities {
    解码信息(configuration: MediaDecodingConfiguration): Promise<MediaCapabilitiesDecodingInfo>;
    编码信息(configuration: MediaEncodingConfiguration): Promise<MediaCapabilitiesEncodingInfo>;
}

interface MediaDeviceInfo {
    readonly 类别: MediaDeviceKind;
    readonly 标签: string;
    转数据(): any;
}

interface MediaDevices {
    枚举设备(): Promise<MediaDeviceInfo[]>;
    取屏幕媒体(options?: DisplayMediaStreamOptions): Promise<MediaStream>;
    取支持约束(): MediaTrackSupportedConstraints;
    取用户媒体(constraints?: MediaStreamConstraints): Promise<MediaStream>;
    加事件监听<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaDevicesEventMap>(type: K, listener: (this: MediaDevices, ev: MediaDevicesEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaElementAudioSourceNode {
    readonly 媒体元素: HTMLMediaElement;
}

interface MediaError {
    readonly 消息: string;
}

interface MediaKeyMessageEvent {
    readonly 消息: ArrayBuffer;
    readonly 消息类型: MediaKeyMessageType;
}

interface MediaKeySession {
    readonly 已关闭: Promise<MediaKeySessionClosedReason>;
    readonly 密钥状态集: MediaKeyStatusMap;
    收消息时: ((this: MediaKeySession, ev: MediaKeyMessageEvent) => any) | null;
    readonly 会话编号: string;
    关闭(): Promise<void>;
    生成请求(initDataType: string, initData: BufferSource): Promise<void>;
    加载(sessionId: string): Promise<boolean>;
    移除(): Promise<void>;
    更新(response: BufferSource): Promise<void>;
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

interface MediaKeySystemAccess {
    readonly 密钥系统: string;
    创建媒体密钥(): Promise<MediaKeys>;
    取配置(): MediaKeySystemConfiguration;
}

interface MediaKeys {
    创建会话(sessionType?: MediaKeySessionType): MediaKeySession;
    设服务器证书(serverCertificate: BufferSource): Promise<boolean>;
}

interface MediaList {
    readonly 长度: number;
    媒体文本: string;
    转字符串(): string;
    取项(index: number): string | null;
}

interface MediaMetadata {
    专辑: string;
    艺术家: string;
    插图: ReadonlyArray<MediaImage>;
    标题: string;
}

interface MediaQueryList {
    readonly 匹配选择器: boolean;
    readonly 媒体: string;
    变化时: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null;
    加监听(callback: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void;
    删监听(callback: ((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null): void;
    加事件监听<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaQueryListEventMap>(type: K, listener: (this: MediaQueryList, ev: MediaQueryListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaQueryListEvent {
    readonly 匹配选择器: boolean;
    readonly 媒体: string;
}

interface MediaRecorder {
    readonly 媒体类型: string;
    出错时: ((this: MediaRecorder, ev: ErrorEvent) => any) | null;
    暂停时: ((this: MediaRecorder, ev: Event) => any) | null;
    readonly 状态: RecordingState;
    readonly 数据流: MediaStream;
    暂停(): void;
    请求数据(): void;
    继续(): void;
    开始(timeslice?: number): void;
    停止(): void;
    加事件监听<K extends keyof MediaRecorderEventMap>(type: K, listener: (this: MediaRecorder, ev: MediaRecorderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaRecorderEventMap>(type: K, listener: (this: MediaRecorder, ev: MediaRecorderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaSession {
    元数据: MediaMetadata | null;
    播放状态: MediaSessionPlaybackState;
    设动作处理(action: MediaSessionAction, handler: MediaSessionActionHandler | null): void;
    设摄像头启用(active: boolean): Promise<void>;
    设麦克风启用(active: boolean): Promise<void>;
    设位置状态(state?: MediaPositionState): void;
}

interface MediaSource {
    readonly 活动源缓冲: SourceBufferList;
    时长: number;
    readonly 就绪态: ReadyState;
    readonly 源缓冲集: SourceBufferList;
    加源缓冲(type: string): SourceBuffer;
    流结束(error?: EndOfStreamError): void;
    删源缓冲(sourceBuffer: SourceBuffer): void;
    加事件监听<K extends keyof MediaSourceEventMap>(type: K, listener: (this: MediaSource, ev: MediaSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaSourceEventMap>(type: K, listener: (this: MediaSource, ev: MediaSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaStream {
    readonly 活动: boolean;
    readonly 编号: string;
    加轨道(track: MediaStreamTrack): void;
    复制(): MediaStream;
    取音频轨道(): MediaStreamTrack[];
    按编号取轨道(trackId: string): MediaStreamTrack | null;
    取视频轨道(): MediaStreamTrack[];
    删轨道(track: MediaStreamTrack): void;
    加事件监听<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaStreamEventMap>(type: K, listener: (this: MediaStream, ev: MediaStreamEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaStreamAudioDestinationNode {
    readonly 数据流: MediaStream;
}

interface MediaStreamTrack {
    内容提示: string;
    已启用: boolean;
    readonly 编号: string;
    readonly 类别: string;
    readonly 标签: string;
    readonly 已静音: boolean;
    播放结束时: ((this: MediaStreamTrack, ev: Event) => any) | null;
    readonly 就绪态: MediaStreamTrackState;
    应用约束(constraints?: MediaTrackConstraints): Promise<void>;
    复制(): MediaStreamTrack;
    取能力(): MediaTrackCapabilities;
    取约束(): MediaTrackConstraints;
    取设置(): MediaTrackSettings;
    停止(): void;
    加事件监听<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MediaStreamTrackEventMap>(type: K, listener: (this: MediaStreamTrack, ev: MediaStreamTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MediaStreamTrackEvent {
    readonly 轨道: MediaStreamTrack;
}

interface MessageEvent<T = any> {
    readonly 数据: T;
    readonly 末事件编号: string;
    readonly 源点: string;
    readonly 端口集: ReadonlyArray<MessagePort>;
    readonly 来源: MessageEventSource | null;
}

interface MessageEventTarget<T> {
    收消息时: ((this: T, ev: MessageEvent) => any) | null;
    消息出错时: ((this: T, ev: MessageEvent) => any) | null;
    加事件监听<K extends keyof MessageEventTargetEventMap>(type: K, listener: (this: T, ev: MessageEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof MessageEventTargetEventMap>(type: K, listener: (this: T, ev: MessageEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface MessagePort {
    关闭(): void;
    发消息(message: any, transfer: Transferable[]): void;
    发消息(message: any, options?: StructuredSerializeOptions): void;
    开始(): void;
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

interface MouseEvent {
    readonly 替代键: boolean;
    readonly 按钮: number;
    readonly 按钮集: number;
    readonly 客户横坐标: number;
    readonly 客户纵坐标: number;
    readonly 移动横量: number;
    readonly 移动纵量: number;
    readonly 偏移横坐标: number;
    readonly 偏移纵坐标: number;
    readonly 页面横坐标: number;
    readonly 页面纵坐标: number;
    readonly 相关目标: EventTarget | null;
    readonly 屏幕横坐标: number;
    readonly 屏幕纵坐标: number;
    readonly 横坐标: number;
    readonly 纵坐标: number;
    取修饰状态(keyArg: string): boolean;
}

interface MutationObserver {
    断开(): void;
    观察(target: Node, options?: MutationObserverInit): void;
    取记录(): MutationRecord[];
}

interface MutationRecord {
    readonly 新增节点列: NodeList;
    readonly 属性名: string | null;
    readonly 属性命名空间: string | null;
    readonly 后兄弟: Node | null;
    readonly 旧值: string | null;
    readonly 前兄弟: Node | null;
    readonly 移除节点列: NodeList;
    readonly 目标: Node;
    readonly 种类: MutationRecordType;
}

interface NamedNodeMap {
    readonly 长度: number;
    取具名项(qualifiedName: string): Attr | null;
    取项(index: number): Attr | null;
    删具名项(qualifiedName: string): Attr;
    设具名项(attr: Attr): Attr | null;
}

interface NavigateEvent {
    readonly 可拦截: boolean;
    readonly 输出端: NavigationDestination;
    readonly 下载请求: string | null;
    readonly 表单数据: FormData | null;
    readonly 哈希变化: boolean;
    readonly 附加信息: any;
    readonly 信号: AbortSignal;
    readonly 用户发起: boolean;
    拦截(options?: NavigationInterceptOptions): void;
    滚动(): void;
}

interface Navigation {
    readonly 可后退: boolean;
    readonly 可前进: boolean;
    readonly 当前条目: NavigationHistoryEntry | null;
    readonly 过渡: NavigationTransition | null;
    后退(options?: NavigationOptions): NavigationResult;
    条目(): NavigationHistoryEntry[];
    前进(options?: NavigationOptions): NavigationResult;
    导航到(url: string | URL, options?: NavigationNavigateOptions): NavigationResult;
    重新加载(options?: NavigationReloadOptions): NavigationResult;
    遍历到(key: string, options?: NavigationOptions): NavigationResult;
    更新当前条目(options: NavigationUpdateCurrentEntryOptions): void;
    加事件监听<K extends keyof NavigationEventMap>(type: K, listener: (this: Navigation, ev: NavigationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof NavigationEventMap>(type: K, listener: (this: Navigation, ev: NavigationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface NavigationDestination {
    readonly 编号: string;
    readonly 序号: number;
    readonly 键名: string;
    readonly 同文档: boolean;
    readonly 地址: string;
    取状态(): any;
}

interface NavigationHistoryEntry {
    readonly 编号: string;
    readonly 序号: number;
    readonly 键名: string;
    readonly 同文档: boolean;
    readonly 地址: string | null;
    取状态(): any;
    加事件监听<K extends keyof NavigationHistoryEntryEventMap>(type: K, listener: (this: NavigationHistoryEntry, ev: NavigationHistoryEntryEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof NavigationHistoryEntryEventMap>(type: K, listener: (this: NavigationHistoryEntry, ev: NavigationHistoryEntryEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface NavigationPrecommitController {
    加处理器(handler: NavigationInterceptHandler): void;
    重定向(url: string | URL, options?: NavigationNavigateOptions): void;
}

interface NavigationPreloadManager {
    禁用(): Promise<void>;
    启用(): Promise<void>;
    取状态(): Promise<NavigationPreloadState>;
}

interface Navigator {
    readonly 剪贴板: Clipboard;
    readonly 凭据: CredentialsContainer;
    readonly 地理位置: Geolocation;
    readonly 最大触控点: number;
    readonly 媒体设备: MediaDevices;
    readonly 权限集: Permissions;
    readonly 服务工作线程: ServiceWorkerContainer;
    发送信标(url: string | URL, data?: BodyInit | null): boolean;
}

interface NavigatorConcurrentHardware {
    readonly 硬件并发: number;
}

interface NavigatorID {
    readonly 应用代号: string;
    readonly 平台: string;
    readonly 用户代理: string;
}

interface NavigatorLanguage {
    readonly 语种: string;
    readonly 语言列: ReadonlyArray<string>;
}

interface NavigatorLocks {
    readonly 锁集: LockManager;
}

interface NavigatorPlugins {
    readonly 插件集: PluginArray;
}

interface NavigatorStorage {
    readonly 存储管理: StorageManager;
}

interface Node {
    readonly 基地址: string;
    readonly 子节点列: NodeListOf<ChildNode>;
    readonly 首子节点: ChildNode | null;
    readonly 已连接: boolean;
    readonly 末子节点: ChildNode | null;
    readonly 后兄弟: ChildNode | null;
    readonly 节点名: string;
    readonly 节点种类: number;
    节点值: string | null;
    readonly 属主文档: Document | null;
    readonly 父元素: HTMLElement | null;
    readonly 父节点: ParentNode | null;
    readonly 前兄弟: ChildNode | null;
    文本内容: string | null;
    追加子节点<T extends Node>(node: T): T;
    复制节点(subtree?: boolean): Node;
    比较文档位置(other: Node): number;
    含节点(other: Node | null): boolean;
    取根节点(options?: GetRootNodeOptions): Node;
    前插节点<T extends Node>(node: T, child: Node | null): T;
    查命名空间(prefix: string | null): string | null;
    查前缀(namespace: string | null): string | null;
    规范化(): void;
    移除子节点<T extends Node>(child: T): T;
    替换子节点<T extends Node>(node: Node, child: T): T;
}

interface NodeIterator {
    readonly 过滤: NodeFilter | null;
    readonly 滤镜: NodeFilter | null;
    readonly 参考节点之前: boolean;
    readonly 参考节点: Node;
    readonly 根元素: Node;
    readonly 显示过滤: number;
    分离(): void;
    上一个节点(): Node | null;
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

interface NonDocumentTypeChildNode {
    readonly 后兄弟元素: Element | null;
    readonly 前兄弟元素: Element | null;
}

interface NonElementParentNode {
    按编号取元素(elementId: string): Element | null;
}

interface Notification {
    readonly 主体: string;
    readonly 数据: any;
    readonly 书写方向: NotificationDirection;
    readonly 图标: string;
    readonly 语言: string;
    点击时: ((this: Notification, ev: Event) => any) | null;
    关闭时: ((this: Notification, ev: Event) => any) | null;
    出错时: ((this: Notification, ev: Event) => any) | null;
    readonly 需交互: boolean;
    readonly 静默: boolean | null;
    readonly 标题: string;
    关闭(): void;
    加事件监听<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface OfflineAudioContext {
    readonly 长度: number;
    完成时: ((this: OfflineAudioContext, ev: OfflineAudioCompletionEvent) => any) | null;
    继续(): Promise<void>;
    开始渲染(): Promise<AudioBuffer>;
    挂起(suspendTime: number): Promise<void>;
    加事件监听<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof OfflineAudioContextEventMap>(type: K, listener: (this: OfflineAudioContext, ev: OfflineAudioContextEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface OffscreenCanvas {
    高度: number;
    宽度: number;
    转图块(options?: ImageEncodeOptions): Promise<Blob>;
    取上下文(contextId: "2d", options?: any): OffscreenCanvasRenderingContext2D | null;
    取上下文(contextId: "bitmaprenderer", options?: any): ImageBitmapRenderingContext | null;
    取上下文(contextId: "webgl", options?: any): WebGLRenderingContext | null;
    取上下文(contextId: "webgl2", options?: any): WebGL2RenderingContext | null;
    取上下文(contextId: OffscreenRenderingContextId, options?: any): OffscreenRenderingContext | null;
    转到位图(): ImageBitmap;
    加事件监听<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof OffscreenCanvasEventMap>(type: K, listener: (this: OffscreenCanvas, ev: OffscreenCanvasEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface OffscreenCanvasRenderingContext2D {
    readonly 画布: OffscreenCanvas;
}

interface OscillatorNode {
    readonly 失谐: AudioParam;
    readonly 频率: AudioParam;
    种类: OscillatorType;
    设周期波(periodicWave: PeriodicWave): void;
    加事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AudioScheduledSourceNodeEventMap>(type: K, listener: (this: OscillatorNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface OverconstrainedError {
    readonly 约束: string;
}

interface PageTransitionEvent {
    readonly 已保持: boolean;
    readonly 已持久化: boolean;
}

interface PannerNode {
    锥内角: number;
    锥外角: number;
    锥外增益: number;
    距离模型: DistanceModelType;
    最大距离: number;
    声像模型: PanningModelType;
    参考距离: number;
    衰减因子: number;
}

interface ParentNode {
    readonly 子元素数: number;
    readonly 子元素列: HTMLCollection;
    readonly 首子元素: Element | null;
    readonly 末子元素: Element | null;
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
    替换所有子(...nodes: (Node | string)[]): void;
}

interface Path2D {
    加路径(path: Path2D, transform?: DOMMatrix2DInit): void;
}

interface PaymentAddress {
    readonly 城市: string;
    readonly 国家: string;
    readonly 接收方: string;
    readonly 地区: string;
    转数据(): any;
}

interface PaymentRequest {
    readonly 编号: string;
    中止(): Promise<void>;
    显示(detailsPromise?: PaymentDetailsUpdate | PromiseLike<PaymentDetailsUpdate>): Promise<PaymentResponse>;
    加事件监听<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PaymentRequestEventMap>(type: K, listener: (this: PaymentRequest, ev: PaymentRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface PaymentResponse {
    readonly 详情: any;
    转数据(): any;
    加事件监听<K extends keyof PaymentResponseEventMap>(type: K, listener: (this: PaymentResponse, ev: PaymentResponseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PaymentResponseEventMap>(type: K, listener: (this: PaymentResponse, ev: PaymentResponseEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Performance {
    readonly 事件计数: EventCounts;
    readonly 时间原点: DOMHighResTimeStamp;
    清标记(markName?: string): void;
    取条目列(): PerformanceEntryList;
    按名取条目(name: string, type?: string): PerformanceEntryList;
    按类型取条目(type: string): PerformanceEntryList;
    标记(markName: string, markOptions?: PerformanceMarkOptions): PerformanceMark;
    度量(measureName: string, startOrMeasureOptions?: string | PerformanceMeasureOptions, endMark?: string): PerformanceMeasure;
    此刻(): DOMHighResTimeStamp;
    当前值(): DOMHighResTimeStamp;
    转数据(): any;
    加事件监听<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface PerformanceEntry {
    readonly 时长: DOMHighResTimeStamp;
    readonly 条目类型: string;
    readonly 名称: string;
    readonly 起始时刻: DOMHighResTimeStamp;
    转数据(): any;
}

interface PerformanceEventTiming {
    readonly 可取消: boolean;
    readonly 处理结束: DOMHighResTimeStamp;
    readonly 处理开始: DOMHighResTimeStamp;
    readonly 目标: Node | null;
    转数据(): any;
}

interface PerformanceMark {
    readonly 细节: any;
}

interface PerformanceMeasure {
    readonly 细节: any;
}

interface PerformanceNavigation {
    readonly 重定向次数: number;
    readonly 种类: number;
    转数据(): any;
}

interface PerformanceNavigationTiming {
    readonly 文档完成: DOMHighResTimeStamp;
    readonly 文档可交互: DOMHighResTimeStamp;
    readonly 加载事件结束: DOMHighResTimeStamp;
    readonly 加载事件开始: DOMHighResTimeStamp;
    readonly 重定向次数: number;
    readonly 种类: NavigationTimingType;
    readonly 卸载事件结束: DOMHighResTimeStamp;
    readonly 卸载事件开始: DOMHighResTimeStamp;
    转数据(): any;
}

interface PerformanceObserver {
    断开(): void;
    观察(options?: PerformanceObserverInit): void;
    取记录(): PerformanceEntryList;
}

interface PerformanceObserverEntryList {
    取条目列(): PerformanceEntryList;
    按名取条目(name: string, type?: string): PerformanceEntryList;
    按类型取条目(type: string): PerformanceEntryList;
}

interface PerformancePaintTiming {
    转数据(): any;
}

interface PerformanceResourceTiming {
    readonly 连接结束: DOMHighResTimeStamp;
    readonly 连接开始: DOMHighResTimeStamp;
    readonly 解码体大小: number;
    readonly 域名查询结束: DOMHighResTimeStamp;
    readonly 域名查询开始: DOMHighResTimeStamp;
    readonly 编码体大小: number;
    readonly 获取开始: DOMHighResTimeStamp;
    readonly 发起类型: string;
    readonly 重定向结束: DOMHighResTimeStamp;
    readonly 重定向开始: DOMHighResTimeStamp;
    readonly 请求开始: DOMHighResTimeStamp;
    readonly 响应结束: DOMHighResTimeStamp;
    readonly 响应开始: DOMHighResTimeStamp;
    readonly 响应状态: number;
    readonly 安全连接开始: DOMHighResTimeStamp;
    readonly 服务器计时: ReadonlyArray<PerformanceServerTiming>;
    readonly 传输大小: number;
    readonly 工作线程开始: DOMHighResTimeStamp;
    转数据(): any;
}

interface PerformanceServerTiming {
    readonly 时长: DOMHighResTimeStamp;
    readonly 名称: string;
    转数据(): any;
}

interface PerformanceTiming {
    readonly 连接结束: number;
    readonly 连接开始: number;
    readonly 文档完成: number;
    readonly 文档可交互: number;
    readonly 域名查询结束: number;
    readonly 域名查询开始: number;
    readonly 获取开始: number;
    readonly 加载事件结束: number;
    readonly 加载事件开始: number;
    readonly 重定向结束: number;
    readonly 重定向开始: number;
    readonly 请求开始: number;
    readonly 响应结束: number;
    readonly 响应开始: number;
    readonly 安全连接开始: number;
    readonly 卸载事件结束: number;
    readonly 卸载事件开始: number;
    转数据(): any;
}

interface PermissionStatus {
    readonly 名称: string;
    变化时: ((this: PermissionStatus, ev: Event) => any) | null;
    readonly 状态: PermissionState;
    加事件监听<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Permissions {
    查询(permissionDesc: PermissionDescriptor): Promise<PermissionStatus>;
}

interface PictureInPictureWindow {
    readonly 高度: number;
    改变大小时: ((this: PictureInPictureWindow, ev: Event) => any) | null;
    readonly 宽度: number;
    加事件监听<K extends keyof PictureInPictureWindowEventMap>(type: K, listener: (this: PictureInPictureWindow, ev: PictureInPictureWindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof PictureInPictureWindowEventMap>(type: K, listener: (this: PictureInPictureWindow, ev: PictureInPictureWindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Plugin {
    readonly 文件名: string;
    readonly 长度: number;
    readonly 名称: string;
    取项(index: number): MimeType | null;
}

interface PluginArray {
    readonly 长度: number;
    取项(index: number): Plugin | null;
}

interface PointerEvent {
    readonly 高度角: number;
    readonly 高度: number;
    readonly 主指针: boolean;
    readonly 指针编号: number;
    readonly 指针类型: string;
    readonly 压力: number;
    readonly 倾斜横角: number;
    readonly 倾斜纵角: number;
    readonly 扭转角: number;
    readonly 宽度: number;
}

interface PopStateEvent {
    readonly 状态: any;
}

interface ProcessingInstruction {
    readonly 目标: string;
}

interface ProgressEvent<T extends EventTarget = EventTarget> {
    readonly 长度可算: boolean;
    readonly 已加载: number;
    readonly 目标: T | null;
    readonly 总量: number;
}

interface PromiseRejectionEvent {
    readonly 承诺对象: Promise<any>;
}

interface PublicKeyCredential {
    readonly 原始编号: ArrayBuffer;
    转数据(): RegistrationResponseJSON | AuthenticationResponseJSON;
}

interface PushManagerAttribute {
    readonly 推送管理: PushManager;
}

interface PushSubscription {
    readonly 端点: string;
    readonly 过期时刻: EpochTimeStamp | null;
    readonly 选项列: PushSubscriptionOptions;
    取键(name: PushEncryptionKeyName): ArrayBuffer | null;
    转数据(): PushSubscriptionJSON;
    退订(): Promise<boolean>;
}

interface PushSubscriptionOptions {
    readonly 仅用户可见: boolean;
}

interface RTCCertificate {
    readonly 过期时间: EpochTimeStamp;
}

interface RTCDTMFSender {
    加事件监听<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCDTMFSenderEventMap>(type: K, listener: (this: RTCDTMFSender, ev: RTCDTMFSenderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCDataChannel {
    二进制类型: BinaryType;
    readonly 缓冲量: number;
    缓冲阈值: number;
    readonly 编号: number | null;
    readonly 标签: string;
    readonly 最大包时长: number | null;
    readonly 最大重传: number | null;
    readonly 已协商: boolean;
    关闭时: ((this: RTCDataChannel, ev: Event) => any) | null;
    出错时: ((this: RTCDataChannel, ev: RTCErrorEvent) => any) | null;
    收消息时: ((this: RTCDataChannel, ev: MessageEvent) => any) | null;
    打开时: ((this: RTCDataChannel, ev: Event) => any) | null;
    readonly 有序: boolean;
    readonly 协议: string;
    readonly 就绪态: RTCDataChannelState;
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

interface RTCDataChannelEvent {
    readonly 通道: RTCDataChannel;
}

interface RTCDtlsTransport {
    出错时: ((this: RTCDtlsTransport, ev: RTCErrorEvent) => any) | null;
    readonly 状态: RTCDtlsTransportState;
    加事件监听<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCDtlsTransportEventMap>(type: K, listener: (this: RTCDtlsTransport, ev: RTCDtlsTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCEncodedAudioFrame {
    数据: ArrayBuffer;
    readonly 时间戳: number;
}

interface RTCEncodedVideoFrame {
    数据: ArrayBuffer;
    readonly 时间戳: number;
    readonly 种类: EncodedVideoChunkType;
}

interface RTCErrorEvent {
    readonly 报错: RTCError;
}

interface RTCIceCandidate {
    readonly 候选: string;
    readonly 组件: RTCIceComponent | null;
    readonly 端口: number | null;
    readonly 优先级: number | null;
    readonly 协议: RTCIceProtocol | null;
    readonly 种类: RTCIceCandidateType | null;
    readonly 用户名片段: string | null;
    转数据(): RTCIceCandidateInit;
}

interface RTCIceTransport {
    readonly 状态: RTCIceTransportState;
    加事件监听<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCIceTransportEventMap>(type: K, listener: (this: RTCIceTransport, ev: RTCIceTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCPeerConnection {
    readonly 连接状态: RTCPeerConnectionState;
    readonly 当前本地描述: RTCSessionDescription | null;
    readonly 交互连接状态: RTCIceConnectionState;
    readonly 收集状态: RTCIceGatheringState;
    readonly 本地描述: RTCSessionDescription | null;
    readonly 待定本地描述: RTCSessionDescription | null;
    readonly 远端描述: RTCSessionDescription | null;
    readonly 信令状态: RTCSignalingState;
    加交互候选(candidate?: RTCIceCandidateInit | null): Promise<void>;
    加交互候选(candidate: RTCIceCandidateInit | null, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    加轨道(track: MediaStreamTrack, ...streams: MediaStream[]): RTCRtpSender;
    关闭(): void;
    创建应答(options?: RTCAnswerOptions): Promise<RTCSessionDescriptionInit>;
    创建应答(successCallback: RTCSessionDescriptionCallback, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    创建数据通道(label: string, dataChannelDict?: RTCDataChannelInit): RTCDataChannel;
    创建提议(options?: RTCOfferOptions): Promise<RTCSessionDescriptionInit>;
    创建提议(successCallback: RTCSessionDescriptionCallback, failureCallback: RTCPeerConnectionErrorCallback, options?: RTCOfferOptions): Promise<void>;
    取配置(): RTCConfiguration;
    取统计(selector?: MediaStreamTrack | null): Promise<RTCStatsReport>;
    取收发器(): RTCRtpTransceiver[];
    删轨道(sender: RTCRtpSender): void;
    重启交互(): void;
    设本地描述(description?: RTCLocalSessionDescriptionInit): Promise<void>;
    设本地描述(description: RTCLocalSessionDescriptionInit, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    设远端描述(description: RTCSessionDescriptionInit): Promise<void>;
    设远端描述(description: RTCSessionDescriptionInit, successCallback: VoidFunction, failureCallback: RTCPeerConnectionErrorCallback): Promise<void>;
    加事件监听<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCPeerConnectionEventMap>(type: K, listener: (this: RTCPeerConnection, ev: RTCPeerConnectionEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCPeerConnectionIceErrorEvent {
    readonly 端口: number | null;
    readonly 地址: string;
}

interface RTCPeerConnectionIceEvent {
    readonly 候选: RTCIceCandidate | null;
}

interface RTCRtpReceiver {
    readonly 轨道: MediaStreamTrack;
    变换: RTCRtpReceiverTransform | null;
    取参数(): RTCRtpReceiveParameters;
    取统计(): Promise<RTCStatsReport>;
}

interface RTCRtpSender {
    readonly 双音多频: RTCDTMFSender | null;
    readonly 轨道: MediaStreamTrack | null;
    变换: RTCRtpSenderTransform | null;
    取参数(): RTCRtpSendParameters;
    取统计(): Promise<RTCStatsReport>;
    替换轨道(withTrack: MediaStreamTrack | null): Promise<void>;
    设参数(parameters: RTCRtpSendParameters, setParameterOptions?: RTCSetParameterOptions): Promise<void>;
    设流(...streams: MediaStream[]): void;
}

interface RTCRtpTransceiver {
    方向: RTCRtpTransceiverDirection;
    readonly 接收器: RTCRtpReceiver;
    readonly 发送方: RTCRtpSender;
    停止(): void;
}

interface RTCSctpTransport {
    readonly 状态: RTCSctpTransportState;
    加事件监听<K extends keyof RTCSctpTransportEventMap>(type: K, listener: (this: RTCSctpTransport, ev: RTCSctpTransportEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RTCSctpTransportEventMap>(type: K, listener: (this: RTCSctpTransport, ev: RTCSctpTransportEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface RTCSessionDescription {
    readonly 会话描述: string;
    readonly 种类: RTCSdpType;
    转数据(): RTCSessionDescriptionInit;
}

interface RTCStatsReport {
    逐个处理(callbackfn: (value: any, key: string, parent: RTCStatsReport) => void, thisArg?: any): void;
}

interface RTCTrackEvent {
    readonly 接收器: RTCRtpReceiver;
    readonly 流列: ReadonlyArray<MediaStream>;
    readonly 轨道: MediaStreamTrack;
    readonly 收发器: RTCRtpTransceiver;
}

interface RadioNodeList {
    值内容: string;
}

interface Range {
    readonly 公共祖先: Node;
    复制内容(): DocumentFragment;
    复制范围(): Range;
    折叠(toStart?: boolean): void;
    删内容(): void;
    分离(): void;
    提取内容(): DocumentFragment;
    取边界矩形(): DOMRect;
    取客户端矩形(): DOMRectList;
    插入节点(node: Node): void;
    选节点(node: Node): void;
    设终点(node: Node, offset: number): void;
    设起点(node: Node, offset: number): void;
    包围内容(newParent: Node): void;
    转字符串(): string;
}

interface ReadableByteStreamController {
    readonly 期望大小: number | null;
    关闭(): void;
    入队(chunk: ArrayBufferView<ArrayBuffer>): void;
    报错(e?: any): void;
}

interface ReadableStream<R = any> {
    readonly 已锁定: boolean;
    取消(reason?: any): Promise<void>;
    取读取器(options: { mode: "byob" }): ReadableStreamBYOBReader;
    取读取器(): ReadableStreamDefaultReader<R>;
    取读取器(options?: ReadableStreamGetReaderOptions): ReadableStreamReader<R>;
    管道通过<T>(transform: ReadableWritablePair<T, R>, options?: StreamPipeOptions): ReadableStream<T>;
    管道到(destination: WritableStream<R>, options?: StreamPipeOptions): Promise<void>;
    分叉(): [ReadableStream<R>, ReadableStream<R>];
}

interface ReadableStreamBYOBReader {
    读取<T extends Exclude<BufferSource, ArrayBuffer>>(view: T, options?: ReadableStreamBYOBReaderReadOptions): Promise<ReadableStreamReadResult<T>>;
}

interface ReadableStreamBYOBRequest {
    readonly 视图: ArrayBufferView<ArrayBuffer> | null;
}

interface ReadableStreamDefaultController<R = any> {
    readonly 期望大小: number | null;
    关闭(): void;
    入队(chunk: R): void;
    报错(e?: any): void;
}

interface ReadableStreamDefaultReader<R = any> {
    读取(): Promise<ReadableStreamReadResult<R>>;
}

interface ReadableStreamGenericReader {
    readonly 已关闭: Promise<void>;
    取消(reason?: any): Promise<void>;
}

interface RemotePlayback {
    连接时: ((this: RemotePlayback, ev: Event) => any) | null;
    readonly 状态: RemotePlaybackState;
    提示符(): Promise<void>;
    加事件监听<K extends keyof RemotePlaybackEventMap>(type: K, listener: (this: RemotePlayback, ev: RemotePlaybackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof RemotePlaybackEventMap>(type: K, listener: (this: RemotePlayback, ev: RemotePlaybackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ReportingObserver {
    断开(): void;
    观察(): void;
    取记录(): ReportList;
}

interface Request {
    readonly 缓存: RequestCache;
    readonly 凭据: RequestCredentials;
    readonly 输出端: RequestDestination;
    readonly 头集合: Headers;
    readonly 完整性: string;
    readonly 保持活动: boolean;
    readonly 提交方法: string;
    readonly 模式: RequestMode;
    readonly 重定向: RequestRedirect;
    readonly 来源页: string;
    readonly 来源页策略: ReferrerPolicy;
    readonly 信号: AbortSignal;
    readonly 地址: string;
    复制(): Request;
}

interface ResizeObserver {
    断开(): void;
    观察(target: Element, options?: ResizeObserverOptions): void;
    停止观察(target: Element): void;
}

interface ResizeObserverEntry {
    readonly 边框盒尺寸: ReadonlyArray<ResizeObserverSize>;
    readonly 内容盒尺寸: ReadonlyArray<ResizeObserverSize>;
    readonly 内容矩形: DOMRectReadOnly;
    readonly 目标: Element;
}

interface Response {
    readonly 头集合: Headers;
    readonly 是成功: boolean;
    readonly 状态码: number;
    readonly 状态文本: string;
    readonly 种类: ResponseType;
    readonly 地址: string;
    复制(): Response;
}

interface SVGAElement {
    下载: string;
    链接语言: string;
    往返探测: string;
    来源页策略: string;
    关系: string;
    get 关系列表(): DOMTokenList;
    set 关系列表(value: string);
    readonly 目标: SVGAnimatedString;
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

interface SVGAnimatedAngle {
    readonly 动画值: SVGAngle;
    readonly 基值: SVGAngle;
}

interface SVGAnimatedBoolean {
    readonly 动画值: boolean;
    基值: boolean;
}

interface SVGAnimatedEnumeration {
    readonly 动画值: number;
    基值: number;
}

interface SVGAnimatedInteger {
    readonly 动画值: number;
    基值: number;
}

interface SVGAnimatedLength {
    readonly 动画值: SVGLength;
    readonly 基值: SVGLength;
}

interface SVGAnimatedLengthList {
    readonly 动画值: SVGLengthList;
    readonly 基值: SVGLengthList;
}

interface SVGAnimatedNumber {
    readonly 动画值: number;
    基值: number;
}

interface SVGAnimatedNumberList {
    readonly 动画值: SVGNumberList;
    readonly 基值: SVGNumberList;
}

interface SVGAnimatedPoints {
    readonly 点集: SVGPointList;
}

interface SVGAnimatedPreserveAspectRatio {
    readonly 动画值: SVGPreserveAspectRatio;
    readonly 基值: SVGPreserveAspectRatio;
}

interface SVGAnimatedRect {
    readonly 动画值: DOMRectReadOnly;
    readonly 基值: DOMRect;
}

interface SVGAnimatedString {
    readonly 动画值: string;
    基值: string;
}

interface SVGAnimatedTransformList {
    readonly 动画值: SVGTransformList;
    readonly 基值: SVGTransformList;
}

interface SVGAnimationElement {
    readonly 目标元素: SVGElement | null;
    开始元素(): void;
    定时开始(offset: number): void;
    结束元素(): void;
    取当前时刻(): number;
    取简单时长(): number;
    取开始时刻(): number;
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
    readonly 振幅: SVGAnimatedNumber;
    readonly 拦截: SVGAnimatedNumber;
    readonly 偏移: SVGAnimatedNumber;
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
    readonly 类名: any;
    readonly 视口元素: SVGElement | null;
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
    readonly 模式: SVGAnimatedEnumeration;
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
    readonly 除数: SVGAnimatedNumber;
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
    readonly 方位角: SVGAnimatedNumber;
    readonly 仰角: SVGAnimatedNumber;
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
    readonly 保持纵横比: SVGAnimatedPreserveAspectRatio;
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
    readonly 横坐标: SVGAnimatedNumber;
    readonly 纵坐标: SVGAnimatedNumber;
    readonly 深度坐标: SVGAnimatedNumber;
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
    readonly 横坐标: SVGAnimatedNumber;
    readonly 纵坐标: SVGAnimatedNumber;
    readonly 深度坐标: SVGAnimatedNumber;
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
    readonly 随机种子: SVGAnimatedNumber;
    readonly 种类: SVGAnimatedEnumeration;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFETurbulenceElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFilterElement {
    readonly 滤镜单位: SVGAnimatedEnumeration;
    readonly 高度: SVGAnimatedLength;
    readonly 基元单位: SVGAnimatedEnumeration;
    readonly 宽度: SVGAnimatedLength;
    readonly 横坐标: SVGAnimatedLength;
    readonly 纵坐标: SVGAnimatedLength;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGFilterElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGFilterPrimitiveStandardAttributes {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    readonly 横坐标: SVGAnimatedLength;
    readonly 纵坐标: SVGAnimatedLength;
}

interface SVGFitToViewBox {
    readonly 保持纵横比: SVGAnimatedPreserveAspectRatio;
    readonly 视图框: SVGAnimatedRect;
}

interface SVGForeignObjectElement {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    readonly 横坐标: SVGAnimatedLength;
    readonly 纵坐标: SVGAnimatedLength;
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
    按长度取点(distance: number): DOMPoint;
    取总长度(): number;
    点在填充内(point?: DOMPointInit): boolean;
    点在描边内(point?: DOMPointInit): boolean;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGeometryElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGGradientElement {
    readonly 渐变变换: SVGAnimatedTransformList;
    readonly 渐变单位: SVGAnimatedEnumeration;
    readonly 扩展方式: SVGAnimatedEnumeration;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGradientElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGGraphicsElement {
    readonly 变换: SVGAnimatedTransformList;
    取包围盒(options?: SVGBoundingBoxOptions): DOMRect;
    取变换矩阵(): DOMMatrix | null;
    取屏幕矩阵(): DOMMatrix | null;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGGraphicsElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGImageElement {
    跨源: string | null;
    readonly 高度: SVGAnimatedLength;
    readonly 保持纵横比: SVGAnimatedPreserveAspectRatio;
    readonly 宽度: SVGAnimatedLength;
    readonly 横坐标: SVGAnimatedLength;
    readonly 纵坐标: SVGAnimatedLength;
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
    readonly 项数: number;
    追加项(newItem: SVGLength): SVGLength;
    清空(): void;
    取条目(index: number): SVGLength;
    初始化(newItem: SVGLength): SVGLength;
    前插项(newItem: SVGLength, index: number): SVGLength;
    删条目(index: number): SVGLength;
    替换项(newItem: SVGLength, index: number): SVGLength;
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
    readonly 标记高: SVGAnimatedLength;
    readonly 标记单位: SVGAnimatedEnumeration;
    readonly 标记宽: SVGAnimatedLength;
    readonly 朝向角: SVGAnimatedAngle;
    readonly 朝向种类: SVGAnimatedEnumeration;
    设朝向角(angle: SVGAngle): void;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGMarkerElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGMaskElement {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    readonly 横坐标: SVGAnimatedLength;
    readonly 纵坐标: SVGAnimatedLength;
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
    readonly 项数: number;
    追加项(newItem: SVGNumber): SVGNumber;
    清空(): void;
    取条目(index: number): SVGNumber;
    初始化(newItem: SVGNumber): SVGNumber;
    前插项(newItem: SVGNumber, index: number): SVGNumber;
    删条目(index: number): SVGNumber;
    替换项(newItem: SVGNumber, index: number): SVGNumber;
}

interface SVGPathElement {
    按长度取点(distance: number): DOMPoint;
    取总长度(): number;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGPatternElement {
    readonly 高度: SVGAnimatedLength;
    readonly 图案内容单位: SVGAnimatedEnumeration;
    readonly 图案变换: SVGAnimatedTransformList;
    readonly 图案单位: SVGAnimatedEnumeration;
    readonly 宽度: SVGAnimatedLength;
    readonly 横坐标: SVGAnimatedLength;
    readonly 纵坐标: SVGAnimatedLength;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGPatternElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGPointList {
    readonly 长度: number;
    readonly 项数: number;
    追加项(newItem: DOMPoint): DOMPoint;
    清空(): void;
    取条目(index: number): DOMPoint;
    初始化(newItem: DOMPoint): DOMPoint;
    前插项(newItem: DOMPoint, index: number): DOMPoint;
    删条目(index: number): DOMPoint;
    替换项(newItem: DOMPoint, index: number): DOMPoint;
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

interface SVGPreserveAspectRatio {
    对齐: number;
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
    readonly 横坐标: SVGAnimatedLength;
    readonly 纵坐标: SVGAnimatedLength;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGRectElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGSVGElement {
    当前缩放: number;
    readonly 当前平移: DOMPointReadOnly;
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    readonly 横坐标: SVGAnimatedLength;
    readonly 纵坐标: SVGAnimatedLength;
    取当前时刻(): number;
    按编号取元素(elementId: string): Element | null;
    暂停动画(): void;
    继续动画(): void;
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
    readonly 偏移: SVGAnimatedNumber;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGStopElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGStringList {
    readonly 长度: number;
    readonly 项数: number;
    追加项(newItem: string): string;
    清空(): void;
    取条目(index: number): string;
    初始化(newItem: string): string;
    前插项(newItem: string, index: number): string;
    删条目(index: number): string;
    替换项(newItem: string, index: number): string;
}

interface SVGStyleElement {
    已禁用: boolean;
    媒体: string;
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
    readonly 文本长度: SVGAnimatedLength;
    取计算文本长(): number;
    取字符数(): number;
    取子串长(charnum: number, nchars: number): number;
    选子串(charnum: number, nchars: number): void;
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
    readonly 提交方法: SVGAnimatedEnumeration;
    readonly 起始偏移: SVGAnimatedLength;
    加事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SVGElementEventMap>(type: K, listener: (this: SVGTextPathElement, ev: SVGElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SVGTextPositioningElement {
    readonly 旋转: SVGAnimatedNumberList;
    readonly 横坐标: SVGAnimatedLengthList;
    readonly 纵坐标: SVGAnimatedLengthList;
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
    readonly 角度: number;
    readonly 种类: number;
    设矩阵(matrix?: DOMMatrix2DInit): void;
    设旋转(angle: number, cx: number, cy: number): void;
    设缩放(sx: number, sy: number): void;
    设平移(tx: number, ty: number): void;
}

interface SVGTransformList {
    readonly 长度: number;
    readonly 项数: number;
    追加项(newItem: SVGTransform): SVGTransform;
    清空(): void;
    取条目(index: number): SVGTransform;
    初始化(newItem: SVGTransform): SVGTransform;
    前插项(newItem: SVGTransform, index: number): SVGTransform;
    删条目(index: number): SVGTransform;
    替换项(newItem: SVGTransform, index: number): SVGTransform;
}

interface SVGURIReference {
    readonly 链接: SVGAnimatedString;
}

interface SVGUseElement {
    readonly 高度: SVGAnimatedLength;
    readonly 宽度: SVGAnimatedLength;
    readonly 横坐标: SVGAnimatedLength;
    readonly 纵坐标: SVGAnimatedLength;
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
    允许属性(attribute: SanitizerAttribute): boolean;
    允许元素(element: SanitizerElementWithAttributes): boolean;
    获取(): SanitizerConfig;
    删属性(attribute: SanitizerAttribute): boolean;
    移除不安全(): boolean;
}

interface Scheduler {
    投递任务(callback: SchedulerPostTaskCallback, options?: SchedulerPostTaskOptions): Promise<any>;
}

interface Screen {
    readonly 可用高: number;
    readonly 可用宽: number;
    readonly 颜色深度: number;
    readonly 高度: number;
    readonly 朝向: ScreenOrientation;
    readonly 像素深度: number;
    readonly 宽度: number;
}

interface ScreenOrientation {
    readonly 角度: number;
    变化时: ((this: ScreenOrientation, ev: Event) => any) | null;
    readonly 种类: OrientationType;
    锁定(orientation: OrientationLockType): Promise<void>;
    解锁(): void;
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

interface ScrollTimeline {
    readonly 轴向: ScrollAxis;
    readonly 来源: Element | null;
}

interface SecurityPolicyViolationEvent {
    readonly 处置方式: SecurityPolicyViolationEventDisposition;
    readonly 来源页: string;
}

interface Selection {
    readonly 锚节点: Node | null;
    readonly 锚偏移: number;
    readonly 方向: string;
    readonly 焦点节点: Node | null;
    readonly 焦点偏移: number;
    readonly 已折叠: boolean;
    readonly 范围数: number;
    readonly 种类: string;
    加范围(range: Range): void;
    折叠(node: Node | null, offset?: number): void;
    延伸(node: Node, offset?: number): void;
    删范围(range: Range): void;
    转字符串(): string;
}

interface ServiceWorker {
    readonly 脚本地址: string;
    readonly 状态: ServiceWorkerState;
    发消息(message: any, transfer: Transferable[]): void;
    发消息(message: any, options?: StructuredSerializeOptions): void;
    加事件监听<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ServiceWorkerContainer {
    readonly 控制器: ServiceWorker | null;
    收消息时: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    消息出错时: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null;
    readonly 就绪: Promise<ServiceWorkerRegistration>;
    取注册(clientURL?: string | URL): Promise<ServiceWorkerRegistration | undefined>;
    取全部注册(): Promise<ReadonlyArray<ServiceWorkerRegistration>>;
    登记(scriptURL: string | URL, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
    开始消息(): void;
    加事件监听<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ServiceWorkerRegistration {
    readonly 活动: ServiceWorker | null;
    readonly 正在安装: ServiceWorker | null;
    readonly 导航预加载: NavigationPreloadManager;
    readonly 作用域: string;
    readonly 更新缓存方式: ServiceWorkerUpdateViaCache;
    readonly 等待中: ServiceWorker | null;
    取通知(filter?: GetNotificationOptions): Promise<Notification[]>;
    显示通知(title: string, options?: NotificationOptions): Promise<void>;
    注销(): Promise<boolean>;
    更新(): Promise<ServiceWorkerRegistration>;
    加事件监听<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface ShadowRoot {
    readonly 可克隆: boolean;
    readonly 委托焦点: boolean;
    readonly 主机: Element;
    内部标记: string;
    readonly 模式: ShadowRootMode;
    readonly 可序列化: boolean;
    readonly 插槽分配: SlotAssignmentMode;
    加事件监听<K extends keyof ShadowRootEventMap>(type: K, listener: (this: ShadowRoot, ev: ShadowRootEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof ShadowRootEventMap>(type: K, listener: (this: ShadowRoot, ev: ShadowRootEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SharedWorker {
    readonly 端口: MessagePort;
    加事件监听<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Slottable {
    readonly 分配插槽: HTMLSlotElement | null;
}

interface SourceBuffer {
    追加窗终点: number;
    追加窗起点: number;
    readonly 缓冲区间: TimeRanges;
    模式: AppendMode;
    中止时: ((this: SourceBuffer, ev: Event) => any) | null;
    出错时: ((this: SourceBuffer, ev: Event) => any) | null;
    时刻偏移: number;
    readonly 正在更新: boolean;
    中止(): void;
    追加缓冲(data: BufferSource): void;
    改类型(type: string): void;
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

interface SpeechRecognitionAlternative {
    readonly 置信度: number;
    readonly 笔录: string;
}

interface SpeechRecognitionErrorEvent {
    readonly 报错: SpeechRecognitionErrorCode;
    readonly 消息: string;
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
    readonly 已暂停: boolean;
    readonly 待处理: boolean;
    readonly 正在朗读: boolean;
    取消(): void;
    取语音(): SpeechSynthesisVoice[];
    暂停(): void;
    继续(): void;
    朗读(utterance: SpeechSynthesisUtterance): void;
    加事件监听<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SpeechSynthesisEventMap>(type: K, listener: (this: SpeechSynthesis, ev: SpeechSynthesisEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SpeechSynthesisErrorEvent {
    readonly 报错: SpeechSynthesisErrorCode;
}

interface SpeechSynthesisEvent {
    readonly 字符序号: number;
    readonly 字符长度: number;
    readonly 已过时间: number;
    readonly 名称: string;
    readonly 话语: SpeechSynthesisUtterance;
}

interface SpeechSynthesisUtterance {
    语言: string;
    出错时: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisErrorEvent) => any) | null;
    暂停时: ((this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any) | null;
    音高: number;
    转文本: string;
    语音: SpeechSynthesisVoice | null;
    音量: number;
    加事件监听<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof SpeechSynthesisUtteranceEventMap>(type: K, listener: (this: SpeechSynthesisUtterance, ev: SpeechSynthesisUtteranceEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface SpeechSynthesisVoice {
    readonly 语言: string;
    readonly 本地服务: boolean;
    readonly 名称: string;
    readonly 语音地址: string;
}

interface StereoPannerNode {
    readonly 声像: AudioParam;
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
    readonly 新值: string | null;
    readonly 旧值: string | null;
    readonly 存储区: Storage | null;
    readonly 地址: string;
}

interface StorageManager {
    估算(): Promise<StorageEstimate>;
    取目录(): Promise<FileSystemDirectoryHandle>;
    持久化(): Promise<boolean>;
    已保持(): Promise<boolean>;
    已持久化(): Promise<boolean>;
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
    取全部(property: string): CSSStyleValue[];
    含有(property: string): boolean;
    逐个处理(callbackfn: (value: CSSStyleValue[], key: string, parent: StylePropertyMapReadOnly) => void, thisArg?: any): void;
}

interface StyleSheet {
    已禁用: boolean;
    readonly 链接: string | null;
    get 媒体(): MediaList;
    set 媒体(mediaText: string);
    readonly 属主节点: Element | ProcessingInstruction | null;
    readonly 父样式表: CSSStyleSheet | null;
    readonly 标题: string | null;
    readonly 种类: string;
}

interface StyleSheetList {
    readonly 长度: number;
    取项(index: number): CSSStyleSheet | null;
}

interface SubmitEvent {
    readonly 提交者: HTMLElement | null;
}

interface SubtleCrypto {
    解密(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    派生比特(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, length?: number | null): Promise<ArrayBuffer>;
    派生密钥(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier | AesDerivedKeyParams | HmacImportParams | HkdfParams | Pbkdf2Params, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    摘要(algorithm: AlgorithmIdentifier, data: BufferSource): Promise<ArrayBuffer>;
    加密(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    导出密钥(format: "jwk", key: CryptoKey): Promise<JsonWebKey>;
    导出密钥(format: Exclude<KeyFormat, "jwk">, key: CryptoKey): Promise<ArrayBuffer>;
    导出密钥(format: KeyFormat, key: CryptoKey): Promise<ArrayBuffer | JsonWebKey>;
    生成密钥(algorithm: "Ed25519" | { name: "Ed25519" }, extractable: boolean, keyUsages: ReadonlyArray<"sign" | "verify">): Promise<CryptoKeyPair>;
    生成密钥(algorithm: "X25519" | { name: "X25519" }, extractable: boolean, keyUsages: ReadonlyArray<"deriveBits" | "deriveKey">): Promise<CryptoKeyPair>;
    生成密钥(algorithm: RsaHashedKeyGenParams | EcKeyGenParams, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKeyPair>;
    生成密钥(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    生成密钥(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair | CryptoKey>;
    导入密钥(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    导入密钥(format: Exclude<KeyFormat, "jwk">, keyData: BufferSource, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    符号(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    签名(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, data: BufferSource): Promise<ArrayBuffer>;
    解开密钥(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, unwrappedKeyAlgorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    验证(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams, key: CryptoKey, signature: BufferSource, data: BufferSource): Promise<boolean>;
    包裹密钥(format: KeyFormat, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams): Promise<ArrayBuffer>;
}

interface TaskSignal {
    readonly 优先级: TaskPriority;
    加事件监听<K extends keyof TaskSignalEventMap>(type: K, listener: (this: TaskSignal, ev: TaskSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof TaskSignalEventMap>(type: K, listener: (this: TaskSignal, ev: TaskSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Text {
    readonly 整段文本: string;
    拆分文本(offset: number): Text;
}

interface TextDecoder {
    解码(input?: AllowSharedBufferSource, options?: TextDecodeOptions): string;
}

interface TextDecoderCommon {
    readonly 编码方式: string;
    readonly 遇错即止: boolean;
    readonly 忽略序标记: boolean;
}

interface TextDecoderStream {
    readonly 可读: ReadableStream<string>;
    readonly 可写: WritableStream<BufferSource>;
}

interface TextEncoder {
    编码(input?: string): Uint8Array<ArrayBuffer>;
}

interface TextEncoderCommon {
    readonly 编码方式: string;
}

interface TextEncoderStream {
    readonly 可读: ReadableStream<Uint8Array<ArrayBuffer>>;
    readonly 可写: WritableStream<string>;
}

interface TextEvent {
    readonly 数据: string;
}

interface TextMetrics {
    readonly 实际上界: number;
    readonly 实际下界: number;
    readonly 实际左界: number;
    readonly 实际右界: number;
    readonly 字母基线: number;
    readonly 字体上界: number;
    readonly 悬挂基线: number;
    readonly 表意基线: number;
    readonly 宽度: number;
}

interface TextTrack {
    readonly 活动提示集: TextTrackCueList | null;
    readonly 提示集: TextTrackCueList | null;
    readonly 编号: string;
    readonly 类别: TextTrackKind;
    readonly 标签: string;
    readonly 语种: string;
    模式: TextTrackMode;
    加提示(cue: TextTrackCue): void;
    删提示(cue: TextTrackCue): void;
    加事件监听<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof TextTrackEventMap>(type: K, listener: (this: TextTrack, ev: TextTrackEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface TextTrackCue {
    结束时刻: number;
    编号: string;
    退出暂停: boolean;
    起始时刻: number;
    readonly 轨道: TextTrack | null;
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
    变化时: ((this: TextTrackList, ev: Event) => any) | null;
    按编号取轨道(id: string): TextTrack | null;
    加事件监听<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof TextTrackListEventMap>(type: K, listener: (this: TextTrackList, ev: TextTrackListEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface TimeRanges {
    readonly 长度: number;
    开始(index: number): number;
}

interface ToggleEvent {
    readonly 新状态: string;
    readonly 旧状态: string;
    readonly 来源: Element | null;
}

interface Touch {
    readonly 客户横坐标: number;
    readonly 客户纵坐标: number;
    readonly 触控力度: number;
    readonly 标识: number;
    readonly 页面横坐标: number;
    readonly 页面纵坐标: number;
    readonly 旋转角: number;
    readonly 屏幕横坐标: number;
    readonly 屏幕纵坐标: number;
    readonly 目标: EventTarget;
}

interface TouchEvent {
    readonly 替代键: boolean;
    readonly 变化触控集: TouchList;
    readonly 目标触控集: TouchList;
    readonly 触控集: TouchList;
}

interface TouchList {
    readonly 长度: number;
    取项(index: number): Touch | null;
}

interface TrackEvent {
    readonly 轨道: TextTrack | null;
}

interface TransformStream<I = any, O = any> {
    readonly 可读: ReadableStream<O>;
    readonly 可写: WritableStream<I>;
}

interface TransformStreamDefaultController<O = any> {
    readonly 期望大小: number | null;
    入队(chunk?: O): void;
    报错(reason?: any): void;
    终止(): void;
}

interface TransitionEvent {
    readonly 已过时间: number;
    readonly 伪元素: string;
}

interface TreeWalker {
    当前节点: Node;
    readonly 过滤: NodeFilter | null;
    readonly 滤镜: NodeFilter | null;
    readonly 根元素: Node;
    readonly 显示过滤: number;
    首子节点(): Node | null;
    末子节点(): Node | null;
    后兄弟(): Node | null;
    父节点(): Node | null;
    上一个节点(): Node | null;
    前兄弟(): Node | null;
}

interface UIEvent {
    readonly 细节: number;
    readonly 视图: Window | null;
    readonly 键序号: number;
}

interface URL {
    散列: string;
    主机: string;
    主机名: string;
    链接: string;
    转字符串(): string;
    readonly 源点: string;
    密码: string;
    路径名: string;
    端口: string;
    协议: string;
    查找: string;
    readonly 查询参数: URLSearchParams;
    用户名: string;
    转数据(): string;
}

interface URLPattern {
    readonly 散列: string;
    readonly 主机名: string;
    readonly 密码: string;
    readonly 路径名: string;
    readonly 端口: string;
    readonly 协议: string;
    readonly 查找: string;
    readonly 用户名: string;
    执行(input?: URLPatternInput, baseURL?: string | URL): URLPatternResult | null;
    测试(input?: URLPatternInput, baseURL?: string | URL): boolean;
}

interface URLSearchParams {
    readonly 大小: number;
    后插(name: string, value: string): void;
    删除(name: string, value?: string): void;
    获取(name: string): string | null;
    取全部(name: string): string[];
    含有(name: string, value?: string): boolean;
    设置(name: string, value: string): void;
    排序(): void;
    转字符串(): string;
    逐个处理(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void;
}

interface UserActivation {
    readonly 曾经活动: boolean;
    readonly 是活动: boolean;
}

interface VTTCue {
    对齐: AlignSetting;
    行位置: LineAndPositionSetting;
    位置: LineAndPositionSetting;
    地区: VTTRegion | null;
    大小: number;
    对齐行: boolean;
    转文本: string;
    取提示标记(): DocumentFragment;
    加事件监听<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof TextTrackCueEventMap>(type: K, listener: (this: VTTCue, ev: TextTrackCueEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface VTTRegion {
    编号: string;
    行集: number;
    滚动: ScrollSetting;
    宽度: number;
}

interface VideoColorSpace {
    readonly 原色集: VideoColorPrimaries | null;
    readonly 转移: VideoTransferCharacteristics | null;
    转数据(): VideoColorSpaceInit;
}

interface VideoDecoder {
    readonly 解码队列长度: number;
    readonly 状态: CodecState;
    关闭(): void;
    解码(chunk: EncodedVideoChunk): void;
    冲刷(): Promise<void>;
    重置(): void;
    加事件监听<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof VideoDecoderEventMap>(type: K, listener: (this: VideoDecoder, ev: VideoDecoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface VideoEncoder {
    readonly 编码队列长度: number;
    readonly 状态: CodecState;
    关闭(): void;
    编码(frame: VideoFrame, options?: VideoEncoderEncodeOptions): void;
    冲刷(): Promise<void>;
    重置(): void;
    加事件监听<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof VideoEncoderEventMap>(type: K, listener: (this: VideoEncoder, ev: VideoEncoderEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface VideoFrame {
    readonly 编码高: number;
    readonly 编码宽: number;
    readonly 色彩空间: VideoColorSpace;
    readonly 显示高: number;
    readonly 显示宽: number;
    readonly 时长: number | null;
    readonly 格式化: VideoPixelFormat | null;
    readonly 时间戳: number;
    readonly 可见矩形: DOMRectReadOnly | null;
    分配大小(options?: VideoFrameCopyToOptions): number;
    复制(): VideoFrame;
    关闭(): void;
    复制到(destination: AllowSharedBufferSource, options?: VideoFrameCopyToOptions): Promise<PlaneLayout[]>;
}

interface ViewTimeline {
    readonly 终点偏移: CSSNumericValue;
    readonly 结束偏移: CSSNumericValue;
    readonly 起始偏移: CSSNumericValue;
    readonly 主体元素: Element;
}

interface ViewTransition {
    readonly 就绪: Promise<void>;
    readonly 类型列: ViewTransitionTypeSet;
}

interface ViewTransitionTypeSet {
    逐个处理(callbackfn: (value: string, key: string, parent: ViewTransitionTypeSet) => void, thisArg?: any): void;
}

interface VisualViewport {
    readonly 高度: number;
    readonly 偏移左: number;
    readonly 偏移顶: number;
    改变大小时: ((this: VisualViewport, ev: Event) => any) | null;
    滚动时: ((this: VisualViewport, ev: Event) => any) | null;
    readonly 页面左: number;
    readonly 页面顶: number;
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
    释放(): Promise<void>;
    加事件监听<K extends keyof WakeLockSentinelEventMap>(type: K, listener: (this: WakeLockSentinel, ev: WakeLockSentinelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof WakeLockSentinelEventMap>(type: K, listener: (this: WakeLockSentinel, ev: WakeLockSentinelEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface WaveShaperNode {
    曲线: Float32Array<ArrayBuffer> | null;
    过采样: OverSampleType;
}

interface WebGL2RenderingContextBase {
    开始查询(target: GLenum, query: WebGLQuery): void;
    绑定采样器(unit: GLuint, sampler: WebGLSampler | null): void;
    绑定顶点数组(array: WebGLVertexArrayObject | null): void;
    创建查询(): WebGLQuery;
    创建采样器(): WebGLSampler;
    创建顶点数组(): WebGLVertexArrayObject;
    删查询(query: WebGLQuery | null): void;
    删采样器(sampler: WebGLSampler | null): void;
    删顶点数组(vertexArray: WebGLVertexArrayObject | null): void;
    绘制缓冲(buffers: GLenum[]): void;
    结束查询(target: GLenum): void;
}

interface WebGL2RenderingContextOverloads {
    缓冲数据(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    缓冲数据(target: GLenum, srcData: AllowSharedBufferSource | null, usage: GLenum): void;
    缓冲数据(target: GLenum, srcData: ArrayBufferView<ArrayBufferLike>, usage: GLenum, srcOffset: number, length?: GLuint): void;
    读像素(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView<ArrayBufferLike> | null): void;
    读像素(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, offset: GLintptr): void;
    读像素(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView<ArrayBufferLike>, dstOffset: number): void;
}

interface WebGLActiveInfo {
    readonly 名称: string;
    readonly 大小: GLint;
    readonly 种类: GLenum;
}

interface WebGLRenderingContextBase {
    readonly 画布: HTMLCanvasElement | OffscreenCanvas;
    激活纹理(texture: GLenum): void;
    附加着色器(program: WebGLProgram, shader: WebGLShader): void;
    绑定缓冲(target: GLenum, buffer: WebGLBuffer | null): void;
    绑定帧缓冲(target: GLenum, framebuffer: WebGLFramebuffer | null): void;
    绑定渲染缓冲(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void;
    绑定纹理(target: GLenum, texture: WebGLTexture | null): void;
    混合函数(sfactor: GLenum, dfactor: GLenum): void;
    检查帧缓冲(target: GLenum): GLenum;
    清空(mask: GLbitfield): void;
    清颜色(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void;
    清深度(depth: GLclampf): void;
    清模板(s: GLint): void;
    颜色掩码(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void;
    编译着色器(shader: WebGLShader): void;
    创建缓冲(): WebGLBuffer;
    创建程序(): WebGLProgram;
    创建着色器(type: GLenum): WebGLShader | null;
    创建纹理(): WebGLTexture;
    剔除面(mode: GLenum): void;
    删帧缓冲(framebuffer: WebGLFramebuffer | null): void;
    删着色器(shader: WebGLShader | null): void;
    深度函数(func: GLenum): void;
    深度掩码(flag: GLboolean): void;
    深度范围(zNear: GLclampf, zFar: GLclampf): void;
    禁用(cap: GLenum): void;
    绘制数组(mode: GLenum, first: GLint, count: GLsizei): void;
    绘制元素(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    启用(cap: GLenum): void;
    启用顶点属性(index: GLuint): void;
    完成(): void;
    冲刷(): void;
    生成多级贴图(target: GLenum): void;
    取属性位置(program: WebGLProgram, name: string): GLint;
    取上下文属性(): WebGLContextAttributes | null;
    取错误(): GLenum;
    取扩展名(name: string): any;
    取扩展名(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    取扩展名(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    取扩展名(extensionName: "EXT_color_buffer_float"): EXT_color_buffer_float | null;
    取扩展名(extensionName: "EXT_color_buffer_half_float"): EXT_color_buffer_half_float | null;
    取扩展名(extensionName: "EXT_float_blend"): EXT_float_blend | null;
    取扩展名(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    取扩展名(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    取扩展名(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    取扩展名(extensionName: "EXT_texture_compression_bptc"): EXT_texture_compression_bptc | null;
    取扩展名(extensionName: "EXT_texture_compression_rgtc"): EXT_texture_compression_rgtc | null;
    取扩展名(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    取扩展名(extensionName: "KHR_parallel_shader_compile"): KHR_parallel_shader_compile | null;
    取扩展名(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    取扩展名(extensionName: "OES_fbo_render_mipmap"): OES_fbo_render_mipmap | null;
    取扩展名(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    取扩展名(extensionName: "OES_texture_float"): OES_texture_float | null;
    取扩展名(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    取扩展名(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    取扩展名(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    取扩展名(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    取扩展名(extensionName: "OVR_multiview2"): OVR_multiview2 | null;
    取扩展名(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    取扩展名(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    取扩展名(extensionName: "WEBGL_compressed_texture_etc"): WEBGL_compressed_texture_etc | null;
    取扩展名(extensionName: "WEBGL_compressed_texture_etc1"): WEBGL_compressed_texture_etc1 | null;
    取扩展名(extensionName: "WEBGL_compressed_texture_pvrtc"): WEBGL_compressed_texture_pvrtc | null;
    取扩展名(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    取扩展名(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    取扩展名(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    取扩展名(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    取扩展名(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    取扩展名(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    取扩展名(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    取扩展名(extensionName: "WEBGL_multi_draw"): WEBGL_multi_draw | null;
    取程序日志(program: WebGLProgram): string | null;
    取程序参数(program: WebGLProgram, pname: GLenum): any;
    取着色器日志(shader: WebGLShader): string | null;
    取着色器参数(shader: WebGLShader, pname: GLenum): any;
    取支持扩展(): string[] | null;
    取一致位置(program: WebGLProgram, name: string): WebGLUniformLocation | null;
    上下文丢失(): boolean;
    是启用(cap: GLenum): GLboolean;
    线宽(width: GLfloat): void;
    链接程序(program: WebGLProgram): void;
    裁剪框(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
    着色器源码(shader: WebGLShader, source: string): void;
    模板函数(func: GLenum, ref: GLint, mask: GLuint): void;
    使用程序(program: WebGLProgram | null): void;
    顶点属性指针(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void;
    视口(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void;
}

interface WebGLRenderingContextOverloads {
    缓冲数据(target: GLenum, size: GLsizeiptr, usage: GLenum): void;
    缓冲数据(target: GLenum, data: AllowSharedBufferSource | null, usage: GLenum): void;
    读像素(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView<ArrayBufferLike> | null): void;
}

interface WebGLShaderPrecisionFormat {
    readonly 精确度: GLint;
}

interface WebSocket {
    二进制类型: BinaryType;
    readonly 缓冲量: number;
    readonly 扩展: string;
    关闭时: ((this: WebSocket, ev: CloseEvent) => any) | null;
    出错时: ((this: WebSocket, ev: Event) => any) | null;
    收消息时: ((this: WebSocket, ev: MessageEvent) => any) | null;
    打开时: ((this: WebSocket, ev: Event) => any) | null;
    readonly 协议: string;
    readonly 就绪态: 0 | 1 | 2 | 3;
    readonly 地址: string;
    关闭(code?: number, reason?: string): void;
    发送(data: BufferSource | Blob | string): void;
    加事件监听<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface WebTransport {
    readonly 已关闭: Promise<WebTransportCloseInfo>;
    readonly 数据报集: WebTransportDatagramDuplexStream;
    readonly 就绪: Promise<void>;
    关闭(closeInfo?: WebTransportCloseInfo): void;
}

interface WebTransportBidirectionalStream {
    readonly 可读: ReadableStream;
    readonly 可写: WritableStream;
}

interface WebTransportDatagramDuplexStream {
    readonly 可读: ReadableStream;
    readonly 可写: WritableStream;
}

interface WebTransportError {
    readonly 来源: WebTransportErrorSource;
}

interface WheelEvent {
    readonly 滚动模式: number;
    readonly 滚动横量: number;
    readonly 滚动纵量: number;
    readonly 滚动纵深: number;
}

interface Window {
    readonly 已关闭: boolean;
    readonly 文档: Document;
    readonly 外部: External;
    readonly 帧集: WindowProxy;
    readonly 长度: number;
    readonly 地址栏: BarProp;
    名称: string;
    readonly 朝向: number;
    readonly 个人栏: BarProp;
    readonly 屏幕横坐标: number;
    readonly 屏幕纵坐标: number;
    readonly 滚动条: BarProp;
    状态码: string;
    readonly 工具栏: BarProp;
    readonly 顶部: WindowProxy | null;
    告警(message?: any): void;
    失焦(): void;
    取消空闲(handle: number): void;
    关闭(): void;
    聚焦(): void;
    取计算样式(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration;
    取选区(): Selection | null;
    匹配媒体(query: string): MediaQueryList;
    移到(x: number, y: number): void;
    打开(url?: string | URL, target?: string, features?: string): WindowProxy | null;
    发消息(message: any, targetOrigin: string, transfer?: Transferable[]): void;
    发消息(message: any, options?: WindowPostMessageOptions): void;
    提示符(message?: string, _default?: string): string | null;
    请求空闲(callback: IdleRequestCallback, options?: IdleRequestOptions): number;
    滚动(options?: ScrollToOptions): void;
    滚动(x: number, y: number): void;
    滚动偏移(options?: ScrollToOptions): void;
    滚动偏移(x: number, y: number): void;
    滚动到(options?: ScrollToOptions): void;
    滚动到(x: number, y: number): void;
    停止(): void;
    加事件监听<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface WindowEventHandlers {
    手柄连接时: ((this: WindowEventHandlers, ev: GamepadEvent) => any) | null;
    哈希变化时: ((this: WindowEventHandlers, ev: HashChangeEvent) => any) | null;
    收消息时: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    消息出错时: ((this: WindowEventHandlers, ev: MessageEvent) => any) | null;
    离线时: ((this: WindowEventHandlers, ev: Event) => any) | null;
    上线时: ((this: WindowEventHandlers, ev: Event) => any) | null;
    历史变化时: ((this: WindowEventHandlers, ev: PopStateEvent) => any) | null;
    存储变化时: ((this: WindowEventHandlers, ev: StorageEvent) => any) | null;
    加事件监听<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof WindowEventHandlersEventMap>(type: K, listener: (this: WindowEventHandlers, ev: WindowEventHandlersEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface WindowOrWorkerGlobalScope {
    readonly 缓存集: CacheStorage;
    readonly 加密模块: Crypto;
    readonly 源点: string;
    readonly 调度器: Scheduler;
    创建位图(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    创建位图(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>;
    排队微任务(callback: VoidFunction): void;
    结构化复制<T = any>(value: T, options?: StructuredSerializeOptions): T;
}

interface Worker {
    发消息(message: any, transfer: Transferable[]): void;
    发消息(message: any, options?: StructuredSerializeOptions): void;
    终止(): void;
    加事件监听<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface Worklet {
    加模块(moduleURL: string | URL, options?: WorkletOptions): Promise<void>;
}

interface WritableStream<W = any> {
    readonly 已锁定: boolean;
    中止(reason?: any): Promise<void>;
    关闭(): Promise<void>;
}

interface WritableStreamDefaultController {
    readonly 信号: AbortSignal;
    报错(e?: any): void;
}

interface WritableStreamDefaultWriter<W = any> {
    readonly 已关闭: Promise<void>;
    readonly 期望大小: number | null;
    readonly 就绪: Promise<void>;
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
    readonly 就绪态: number;
    readonly 状态码: number;
    readonly 状态文本: string;
    中止(): void;
    取响应头(name: string): string | null;
    打开(method: string, url: string | URL): void;
    打开(method: string, url: string | URL, async: boolean, username?: string | null, password?: string | null): void;
    发送(body?: Document | XMLHttpRequestBodyInit | null): void;
    设请求头(name: string, value: string): void;
    加事件监听<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    加事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    去事件监听<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    去事件监听(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

interface XMLHttpRequestEventTarget {
    中止时: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    出错时: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    加载时: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    开始加载时: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
    进度变化时: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null;
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

interface XPathEvaluatorBase {
    求值(expression: string, contextNode: Node, resolver?: XPathNSResolver | null, type?: number, result?: XPathResult | null): XPathResult;
}

interface XPathExpression {
    求值(contextNode: Node, type?: number, result?: XPathResult | null): XPathResult;
}

interface XPathResult {
    下一个节点(): Node | null;
    快照项(index: number): Node | null;
}

interface XSLTProcessor {
    重置(): void;
}

declare namespace CSS {
    function 转义(ident: string): string;
    function 百分比(value: number): CSSUnitValue;
    function 注册属性(definition: PropertyDefinition): void;
    function 支持(property: string, value: string): boolean;
    function 支持(conditionText: string): boolean;
}

declare namespace WebAssembly {
    function 实例化(bytes: BufferSource, importObject?: Imports, options?: WebAssemblyCompileOptions): Promise<WebAssemblyInstantiatedSource>;
    function 实例化(moduleObject: Module, importObject?: Imports): Promise<Instance>;
}

interface Console {
    清空(): void;
    调试(...data: any[]): void;
    书写方向(item?: any, options?: any): void;
    报错(...data: any[]): void;
    附加信息(...data: any[]): void;
    对数(...data: any[]): void;
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

interface Cache {
    全部添加(requests: Iterable<RequestInfo>): Promise<void>;
}

interface CanvasPath {
    圆角矩形(x: number, y: number, w: number, h: number, radii?: number | DOMPointInit | Iterable<number | DOMPointInit>): void;
}

interface CanvasPathDrawingStyles {
    设虚线(segments: Iterable<number>): void;
}

interface CookieStoreManager {
    退订(subscriptions: Iterable<CookieStoreGetOptions>): Promise<void>;
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

interface IDBDatabase {
    事务(storeNames: string | Iterable<string>, mode?: IDBTransactionMode, options?: IDBTransactionOptions): IDBTransaction;
}

interface IDBObjectStore {
    创建索引(name: string, keyPath: string | Iterable<string>, options?: IDBIndexParameters): IDBIndex;
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

interface SubtleCrypto {
    派生密钥(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | HkdfParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: AlgorithmIdentifier | AesDerivedKeyParams | HmacImportParams | HkdfParams | Pbkdf2Params, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKey>;
    生成密钥(algorithm: "Ed25519" | { name: "Ed25519" }, extractable: boolean, keyUsages: ReadonlyArray<"sign" | "verify">): Promise<CryptoKeyPair>;
    生成密钥(algorithm: "X25519" | { name: "X25519" }, extractable: boolean, keyUsages: ReadonlyArray<"deriveBits" | "deriveKey">): Promise<CryptoKeyPair>;
    生成密钥(algorithm: RsaHashedKeyGenParams | EcKeyGenParams, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKeyPair>;
    生成密钥(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    生成密钥(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKeyPair | CryptoKey>;
    导入密钥(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: ReadonlyArray<KeyUsage>): Promise<CryptoKey>;
    导入密钥(format: Exclude<KeyFormat, "jwk">, keyData: BufferSource, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKey>;
    解开密钥(format: KeyFormat, wrappedKey: BufferSource, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesGcmParams, unwrappedKeyAlgorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | AesKeyAlgorithm, extractable: boolean, keyUsages: Iterable<KeyUsage>): Promise<CryptoKey>;
}

interface URLSearchParams {
    条目(): URLSearchParamsIterator<[string, string]>;
    键列(): URLSearchParamsIterator<string>;
    值列(): URLSearchParamsIterator<string>;
}

interface WebGL2RenderingContextBase {
    绘制缓冲(buffers: Iterable<GLenum>): void;
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

interface MapConstructor {
    readonly 原型: Map<any, any>;
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

interface WeakMapConstructor {
    readonly 原型: WeakMap<WeakKey, any>;
}

interface Set<T> {
    添加(value: T): this;
    清空(): void;
    删除(value: T): boolean;
    逐个处理(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
    含有(value: T): boolean;
    readonly 大小: number;
}

interface SetConstructor {
    readonly 原型: Set<any>;
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

interface WeakSetConstructor {
    readonly 原型: WeakSet<WeakKey>;
}

interface Array<T> {
    找出<S extends T>(predicate: (value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    找出(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;
    找出序号(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
    填充(value: T, start?: number, end?: number): this;
    内部复制(target: number, start: number, end?: number): this;
    本地转字符串(locales: string | string[], options?: Intl.NumberFormatOptions & Intl.DateTimeFormatOptions): string;
}

interface Function {
    readonly 名称: string;
}

interface Math {
    前导零位数(x: number): number;
    整数乘(x: number, y: number): number;
    符号(x: number): number;
    签名(x: number): number;
    对数十(x: number): number;
    对数二(x: number): number;
    双曲余弦(x: number): number;
    双曲正弦(x: number): number;
    双曲正切(x: number): number;
    双曲反余弦(x: number): number;
    双曲反正弦(x: number): number;
    双曲反正切(x: number): number;
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
    锚点(name: string): string;
    粗体(): string;
    字号(size: number): string;
    字号(size: string): string;
    相减(): string;
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
    readonly 名称: string;
    readonly 原型: Generator;
}

interface GeneratorFunctionConstructor {
    readonly 长度: number;
    readonly 名称: string;
    readonly 原型: GeneratorFunction;
}

interface SymbolConstructor {
    readonly 迭代器: unique symbol;
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
    readonly 原型: Promise<any>;
    全部<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: Awaited<T[P]>; }>;
    竞速<T extends readonly unknown[] | []>(values: T): Promise<Awaited<T[number]>>;
    拒绝<T = never>(reason?: any): Promise<T>;
    解决(): Promise<void>;
    解析路径(): Promise<void>;
    解决<T>(value: T): Promise<Awaited<T>>;
    解析路径<T>(value: T): Promise<Awaited<T>>;
    解决<T>(value: T | PromiseLike<T>): Promise<Awaited<T>>;
    解析路径<T>(value: T | PromiseLike<T>): Promise<Awaited<T>>;
}

interface ProxyHandler<T extends object> {
    应用?(target: T, thisArg: any, argArray: any[]): any;
    构造?(target: T, argArray: any[], newTarget: Function): object;
    定义属性?(target: T, property: string | symbol, attributes: PropertyDescriptor): boolean;
    删特性?(target: T, p: string | symbol): boolean;
    获取?(target: T, p: string | symbol, receiver: any): any;
    取自有描述?(target: T, p: string | symbol): PropertyDescriptor | undefined;
    取原型?(target: T): object | null;
    含有?(target: T, p: string | symbol): boolean;
    是可扩展?(target: T): boolean;
    自有键?(target: T): ArrayLike<string | symbol>;
    止扩展?(target: T): boolean;
    设置?(target: T, p: string | symbol, newValue: any, receiver: any): boolean;
    设原型?(target: T, v: object | null): boolean;
}

declare namespace Reflect {
    function 应用<T, A extends readonly any[], R>(
        target: (this: T, ...args: A) => R,
        thisArgument: T,
        argumentsList: Readonly<A>,
    ): R;
    function 应用(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;
    function 构造<A extends readonly any[], R>(
        target: new (...args: A) => R,
        argumentsList: Readonly<A>,
        newTarget?: new (...args: any) => any,
    ): R;
    function 构造(target: Function, argumentsList: ArrayLike<any>, newTarget?: Function): any;
    function 定义属性(target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): boolean;
    function 删特性(target: object, propertyKey: PropertyKey): boolean;
    function 获取<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
        receiver?: unknown,
    ): P extends keyof T ? T[P] : any;
    function 取自有描述<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
    ): TypedPropertyDescriptor<P extends keyof T ? T[P] : any> | undefined;
    function 取原型(target: object): object | null;
    function 含有(target: object, propertyKey: PropertyKey): boolean;
    function 是可扩展(target: object): boolean;
    function 自有键(target: object): (string | symbol)[];
    function 止扩展(target: object): boolean;
    function 设置<T extends object, P extends PropertyKey>(
        target: T,
        propertyKey: P,
        value: P extends keyof T ? T[P] : any,
        receiver?: any,
    ): boolean;
    function 设置(target: object, propertyKey: PropertyKey, value: any, receiver?: any): boolean;
    function 设原型(target: object, proto: object | null): boolean;
}

interface SymbolConstructor {
    readonly 原型: Symbol;
}

interface SymbolConstructor {
    readonly 匹配: unique symbol;
    readonly 替换: unique symbol;
    readonly 查找: unique symbol;
    readonly 拆分: unique symbol;
    readonly 不可作用域: unique symbol;
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

declare namespace Intl {
    function 取规范区域(locale?: string | readonly string[]): string[];
}

interface ObjectConstructor {
    值列<T>(o: { [s: string]: T; } | ArrayLike<T>): T[];
    值列(o: {}): any[];
    条目<T>(o: { [s: string]: T; } | ArrayLike<T>): [string, T][];
    条目(o: {}): [string, any][];
}

interface SharedArrayBuffer {
    readonly 字节长度: number;
    截取(begin?: number, end?: number): SharedArrayBuffer;
}

interface SharedArrayBufferConstructor {
    readonly 原型: SharedArrayBuffer;
}

interface Atomics {
    添加(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number, value: number): number;
    比较交换(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number, expectedValue: number, replacementValue: number): number;
    交换(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number, value: number): number;
    无锁(size: number): boolean;
    加载(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number): number;
    存储(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number, value: number): number;
    相减(typedArray: Int8Array<ArrayBufferLike> | Uint8Array<ArrayBufferLike> | Int16Array<ArrayBufferLike> | Uint16Array<ArrayBufferLike> | Int32Array<ArrayBufferLike> | Uint32Array<ArrayBufferLike>, index: number, value: number): number;
    等待(typedArray: Int32Array<ArrayBufferLike>, index: number, value: number, timeout?: number): "ok" | "not-equal" | "timed-out";
    通知(typedArray: Int32Array<ArrayBufferLike>, index: number, count?: number): number;
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
    readonly 名称: string;
    readonly 原型: AsyncGenerator;
}

interface AsyncGeneratorFunctionConstructor {
    readonly 长度: number;
    readonly 名称: string;
    readonly 原型: AsyncGeneratorFunction;
}

interface AsyncIterator<T, TReturn = any, TNext = any> {
    下一个(...[value]: [] | [TNext]): Promise<IteratorResult<T, TReturn>>;
}

interface Promise<T> {
    最终(onfinally?: (() => void) | undefined | null): Promise<T>;
}

interface ReadonlyArray<T> {
    展平映射<U, This = undefined>(
        callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,
        thisArg?: This,
    ): U[];
    展平<A, D extends number = 1>(
        this: A,
        depth?: D,
    ): FlatArray<A, D>[];
}

interface Array<T> {
    展平映射<U, This = undefined>(
        callback: (this: This, value: T, index: number, array: T[]) => U | ReadonlyArray<U>,
        thisArg?: This,
    ): U[];
    展平<A, D extends number = 1>(
        this: A,
        depth?: D,
    ): FlatArray<A, D>[];
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
    数字系统?: string;
    单位?: string;
    货币?: string;
}

interface BigInt {
    转字符串(radix?: number): string;
    本地转字符串(locales?: Intl.LocalesArgument, options?: BigIntToLocaleStringOptions): string;
    取值(): bigint;
}

interface BigIntConstructor {
    readonly 原型: BigInt;
}

interface BigInt64Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    readonly 每元素字节: number;
    readonly 缓冲: TArrayBuffer;
    readonly 字节长度: number;
    readonly 字节偏移: number;
    内部复制(target: number, start: number, end?: number): this;
    条目(): ArrayIterator<[number, bigint]>;
    全部满足(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => boolean, thisArg?: any): boolean;
    填充(value: bigint, start?: number, end?: number): this;
    过滤(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => any, thisArg?: any): BigInt64Array<ArrayBuffer>;
    滤镜(predicate: (value: bigint, index: number, array: BigInt64Array<TArrayBuffer>) => any, thisArg?: any): BigInt64Array<ArrayBuffer>;
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
    子数组(begin?: number, end?: number): BigInt64Array<TArrayBuffer>;
    本地转字符串(locales?: string | string[], options?: Intl.NumberFormatOptions): string;
    转字符串(): string;
    取值(): BigInt64Array<TArrayBuffer>;
    值列(): ArrayIterator<bigint>;
}

interface BigInt64ArrayConstructor {
    readonly 原型: BigInt64Array<ArrayBufferLike>;
    readonly 每元素字节: number;
}

interface BigUint64Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    readonly 每元素字节: number;
    readonly 缓冲: TArrayBuffer;
    readonly 字节长度: number;
    readonly 字节偏移: number;
    内部复制(target: number, start: number, end?: number): this;
    条目(): ArrayIterator<[number, bigint]>;
    全部满足(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => boolean, thisArg?: any): boolean;
    填充(value: bigint, start?: number, end?: number): this;
    过滤(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => any, thisArg?: any): BigUint64Array<ArrayBuffer>;
    滤镜(predicate: (value: bigint, index: number, array: BigUint64Array<TArrayBuffer>) => any, thisArg?: any): BigUint64Array<ArrayBuffer>;
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
    子数组(begin?: number, end?: number): BigUint64Array<TArrayBuffer>;
    本地转字符串(locales?: string | string[], options?: Intl.NumberFormatOptions): string;
    转字符串(): string;
    取值(): BigUint64Array<TArrayBuffer>;
    值列(): ArrayIterator<bigint>;
}

interface BigUint64ArrayConstructor {
    readonly 原型: BigUint64Array<ArrayBufferLike>;
    readonly 每元素字节: number;
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
    比较交换(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, expectedValue: bigint, replacementValue: bigint): bigint;
    交换(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, value: bigint): bigint;
    加载(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number): bigint;
    存储(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, value: bigint): bigint;
    相减(typedArray: BigInt64Array<ArrayBufferLike> | BigUint64Array<ArrayBufferLike>, index: number, value: bigint): bigint;
    等待(typedArray: BigInt64Array<ArrayBufferLike>, index: number, value: bigint, timeout?: number): "ok" | "not-equal" | "timed-out";
    通知(typedArray: BigInt64Array<ArrayBufferLike>, index: number, count?: number): number;
}

interface String {
    全匹配(regexp: RegExp): RegExpStringIterator<RegExpExecArray>;
    本地比较(that: string, locales?: Intl.LocalesArgument, options?: Intl.CollatorOptions): number;
}

interface SymbolConstructor {
    readonly 全匹配: unique symbol;
}

interface AggregateError {
    错误集: any[];
}

interface AggregateErrorConstructor {
    readonly 原型: AggregateError;
}

interface String {
    全替换(searchValue: string | RegExp, replaceValue: string): string;
    全替换(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;
}

interface WeakRef<T extends WeakKey> {
    解引用(): T | undefined;
}

interface WeakRefConstructor {
    readonly 原型: WeakRef<any>;
}

interface FinalizationRegistry<T> {
    登记(target: WeakKey, heldValue: T, unregisterToken?: WeakKey): void;
    注销(unregisterToken: WeakKey): boolean;
}

interface FinalizationRegistryConstructor {
    readonly 原型: FinalizationRegistry<any>;
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

interface ErrorOptions {
    起因?: unknown;
}

interface Error {
    起因?: unknown;
}

interface RegExpMatchArray {
    索引集?: RegExpIndicesArray;
}

interface RegExpExecArray {
    索引集?: RegExpIndicesArray;
}

interface String {
    取第(index: number): string | undefined;
}

interface Array<T> {
    反转副本(): T[];
    排序副本(compareFn?: (a: T, b: T) => number): T[];
}

interface ReadonlyArray<T> {
    反转副本(): T[];
    排序副本(compareFn?: (a: T, b: T) => number): T[];
}

interface Int8Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Int8Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Int8Array<ArrayBuffer>;
}

interface Uint8Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Uint8Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Uint8Array<ArrayBuffer>;
}

interface Uint8ClampedArray<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Uint8ClampedArray<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Uint8ClampedArray<ArrayBuffer>;
}

interface Int16Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Int16Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Int16Array<ArrayBuffer>;
}

interface Uint16Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Uint16Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Uint16Array<ArrayBuffer>;
}

interface Int32Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Int32Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Int32Array<ArrayBuffer>;
}

interface Uint32Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Uint32Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Uint32Array<ArrayBuffer>;
}

interface Float32Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Float32Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Float32Array<ArrayBuffer>;
}

interface Float64Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): Float64Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Float64Array<ArrayBuffer>;
}

interface BigInt64Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): BigInt64Array<ArrayBuffer>;
    排序副本(compareFn?: (a: bigint, b: bigint) => number): BigInt64Array<ArrayBuffer>;
}

interface BigUint64Array<TArrayBuffer extends ArrayBufferLike> {
    反转副本(): BigUint64Array<ArrayBuffer>;
    排序副本(compareFn?: (a: bigint, b: bigint) => number): BigUint64Array<ArrayBuffer>;
}

interface ArrayBuffer {
    get 最大字节长(): number;
    get 可调整(): boolean;
    调整大小(newByteLength?: number): void;
    get 已分离(): boolean;
    转移(newByteLength?: number): ArrayBuffer;
    转移定长(newByteLength?: number): ArrayBuffer;
}

interface PromiseWithResolvers<T> {
    承诺对象: Promise<T>;
    解决: (value: T | PromiseLike<T>) => void;
    解析路径: (value: T | PromiseLike<T>) => void;
    拒绝: (reason?: any) => void;
}

interface Atomics {
    异步等待(typedArray: Int32Array, index: number, value: number, timeout?: number): { async: false; value: "not-equal" | "timed-out"; } | { async: true; value: Promise<"ok" | "timed-out">; };
    异步等待(typedArray: BigInt64Array, index: number, value: bigint, timeout?: number): { async: false; value: "not-equal" | "timed-out"; } | { async: true; value: Promise<"ok" | "timed-out">; };
}

interface SharedArrayBuffer {
    get 可增长(): boolean;
    get 最大字节长(): number;
    增长(newByteLength?: number): void;
}

interface ReadonlySetLike<T> {
    键列(): Iterator<T>;
    含有(value: T): boolean;
    readonly 大小: number;
}

interface Set<T> {
    差值<U>(other: ReadonlySetLike<U>): Set<T>;
}

interface ReadonlySet<T> {
    差值<U>(other: ReadonlySetLike<U>): Set<T>;
}

interface Float16Array<TArrayBuffer extends ArrayBufferLike = ArrayBufferLike> {
    readonly 每元素字节: number;
    readonly 缓冲: TArrayBuffer;
    readonly 字节长度: number;
    readonly 字节偏移: number;
    取第(index: number): number | undefined;
    内部复制(target: number, start: number, end?: number): this;
    全部满足(predicate: (value: number, index: number, array: this) => unknown, thisArg?: any): boolean;
    填充(value: number, start?: number, end?: number): this;
    过滤(predicate: (value: number, index: number, array: this) => any, thisArg?: any): Float16Array<ArrayBuffer>;
    滤镜(predicate: (value: number, index: number, array: this) => any, thisArg?: any): Float16Array<ArrayBuffer>;
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
    子数组(begin?: number, end?: number): Float16Array<TArrayBuffer>;
    本地转字符串(locales?: string | string[], options?: Intl.NumberFormatOptions): string;
    反转副本(): Float16Array<ArrayBuffer>;
    排序副本(compareFn?: (a: number, b: number) => number): Float16Array<ArrayBuffer>;
    转字符串(): string;
    取值(): this;
    条目(): ArrayIterator<[number, number]>;
    键列(): ArrayIterator<number>;
    值列(): ArrayIterator<number>;
}

interface Float16ArrayConstructor {
    readonly 原型: Float16Array<ArrayBufferLike>;
    readonly 每元素字节: number;
}

interface RegExpConstructor {
    转义(string: string): string;
}

interface Symbol {
    转字符串(): string;
    取值(): symbol;
}

interface PropertyDescriptor {
    可配置?: boolean;
    值内容?: any;
    可写?: boolean;
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
    readonly 原型: Object;
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
    应用(this: Function, thisArg: any, argArray?: any): any;
    调用(this: Function, thisArg: any, ...argArray: any[]): any;
    转字符串(): string;
    原型: any;
    readonly 长度: number;
    调用者: Function;
}

interface FunctionConstructor {
    readonly 原型: Function;
}

interface CallableFunction {
    应用<T, R>(this: (this: T) => R, thisArg: T): R;
    应用<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, args: A): R;
    调用<T, A extends any[], R>(this: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;
}

interface NewableFunction {
    应用<T>(this: new () => T, thisArg: T): void;
    应用<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, args: A): void;
    调用<T, A extends any[]>(this: new (...args: A) => T, thisArg: T, ...args: A): void;
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

interface StringConstructor {
    readonly 原型: String;
}

interface Boolean {
    取值(): boolean;
}

interface BooleanConstructor {
    readonly 原型: Boolean;
}

interface Number {
    转字符串(radix?: number): string;
    定点(fractionDigits?: number): string;
    指数记法(fractionDigits?: number): string;
    定精度(precision?: number): string;
    取值(): number;
}

interface NumberConstructor {
    readonly 原型: Number;
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
    对数(x: number): number;
    日志(x: number): number;
    最大(...values: number[]): number;
    最大限制(...values: number[]): number;
    最小(...values: number[]): number;
    最小限制(...values: number[]): number;
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
    readonly 原型: Date;
    解析(s: string): number;
    此刻(): number;
    当前值(): number;
}

interface RegExpMatchArray {
    序号?: number;
}

interface RegExpExecArray {
    序号: number;
}

interface RegExp {
    执行(string: string): RegExpExecArray | null;
    测试(string: string): boolean;
    readonly 来源: string;
}

interface Error {
    名称: string;
    消息: string;
    调用栈?: string;
}

interface ErrorConstructor {
    readonly 原型: Error;
}

interface EvalErrorConstructor {
    readonly 原型: EvalError;
}

interface RangeErrorConstructor {
    readonly 原型: RangeError;
}

interface ReferenceErrorConstructor {
    readonly 原型: ReferenceError;
}

interface SyntaxErrorConstructor {
    readonly 原型: SyntaxError;
}

interface TypeErrorConstructor {
    readonly 原型: TypeError;
}

interface URIErrorConstructor {
    readonly 原型: URIError;
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
    滤镜<S extends T>(predicate: (value: T, index: number, array: readonly T[]) => value is S, thisArg?: any): S[];
    过滤(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[];
    滤镜(predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any): T[];
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
    滤镜<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
    过滤(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    滤镜(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    归纳<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    反向归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
    反向归纳(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
    反向归纳<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
}

interface ArrayConstructor {
    readonly 原型: any[];
}

interface TypedPropertyDescriptor<T> {
    可配置?: boolean;
    可写?: boolean;
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

interface SymbolConstructor {
    readonly 元数据: unique symbol;
}

interface SymbolConstructor {
    readonly 弃置: unique symbol;
}

interface SuppressedError {
    报错: any;
}

interface SuppressedErrorConstructor {
    readonly 原型: SuppressedError;
}

interface DisposableStack {
    readonly 已弃置: boolean;
    弃置(): void;
    收养<T>(value: T, onDispose: (value: T) => void): T;
    延迟(onDispose: () => void): void;
}

interface DisposableStackConstructor {
    readonly 原型: DisposableStack;
}

interface AsyncDisposableStack {
    readonly 已弃置: boolean;
    收养<T>(value: T, onDisposeAsync: (value: T) => PromiseLike<void> | void): T;
    延迟(onDisposeAsync: () => PromiseLike<void> | void): void;
}

interface AsyncDisposableStackConstructor {
    readonly 原型: AsyncDisposableStack;
}

interface Atomics {
    暂停(n?: number): void;
}

