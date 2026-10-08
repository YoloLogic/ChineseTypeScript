package diagnostics

// ChineseTypeScript：上游 zh-CN 词条之外，我们补的译文。
//
// 为什么需要它：上游的 zh-CN（loc/zh-CN.json.gz）只有 2118 条，而
// diagnostics_generated.go 有 2204 条；差的 86 条以【后来的 content mapper 新诊断】
// （TS1000xx）为主，另有若干命令行选项说明（会出现在 --help 里）。
// 这里逐条补上，只在 locale 解析为简体中文时生效，英文与其它语言一个字节不变。
//
// 单一真源：本文件即这 86 条译文的真源（不是任何生成物的副本）。
// zh_extra_test.go 会机器校核：
//   - 每个键都必须在 diagnostics_generated.go 里存在（防上游删键后留下死条目）；
//   - 每条译文都含汉字；
//   - 占位符 {0}/{1}/{2} 与英文原文【完全一致】（防参数错位）；
//   - 上游 zh-CN 若已收录同键，本条目即为冗余（测试会要求删除）。
var zhExtraMessages = map[Key]string{
	"_0_implementations_100007":                "{0} 个实现",
	"_0_references_100005":                     "{0} 个引用",
	"1_implementation_100008":                  "1 个实现",
	"1_reference_100006":                       "1 个引用",
	"4_unless_singleThreaded_is_passed_100004": "4，除非传入 --singleThreaded。",
	"A_JSDoc_type_tag_on_a_function_must_have_a_signature_with_the_correct_number_of_arguments_8030":              "函数上的 JSDoc “@type” 标记必须具有参数个数正确的签名。",
	"Allow_loading_external_content_mapper_plugins_that_execute_code_during_compilation_100023":                   "允许加载在编译期间执行代码的外部内容映射器插件。",
	"Binding_elements_with_initializers_can_t_be_exported_directly_with_isolatedDeclarations_9019":                "使用 --isolatedDeclarations 时，带初始化器的绑定元素不能直接导出。",
	"Content_mapper_file_extension_0_is_a_built_in_extension_and_cannot_be_registered_by_a_content_mapper_100021": "内容映射器文件扩展名“{0}”是内置扩展名，不能由内容映射器注册。",
	"Content_mapper_file_extension_0_is_registered_by_more_than_one_content_mapper_100022":                        "内容映射器文件扩展名“{0}”被多个内容映射器注册。",
	"Content_mapper_file_extension_0_must_begin_with_a_100020":                                                    "内容映射器文件扩展名“{0}”必须以“.”开头。",
	"Content_mapper_supplemental_output_file_0_conflicts_with_an_existing_file_100054":                            "内容映射器的补充输出文件“{0}”与现有文件冲突。",
	"Content_mappers_require_the_runExternalCode_command_line_flag_to_be_enabled_100024":                          "内容映射器需要启用“--runExternalCode”命令行标志。",
	"Declaration_emit_elides_private_members_but_0_refers_to_a_private_member_Write_an_explicit_type_here_7080":   "声明输出会省略私有成员，但“{0}”引用了私有成员。请在此处写出显式类型。",
	"Deduplicate_packages_with_the_same_name_and_version_100011":                                                  "对名称与版本相同的包去重。",
	"Diagnostic_directive_0_returned_by_the_content_mapper_has_an_invalid_range_100063":                           "内容映射器返回的诊断指令 {0} 的范围无效。",
	"Diagnostic_directive_0_returned_by_the_content_mapper_has_an_invalid_unusedExpectDirectiveIndex_100068":      "内容映射器返回的诊断指令 {0} 的“unusedExpectDirectiveIndex”无效。",
	"Diagnostic_directive_0_returned_by_the_content_mapper_must_specify_unusedExpectDirectiveIndex_when_t_100065": "当“unusedExpectDirectiveDiagnostics”的条目不是恰好一个时，内容映射器返回的诊断指令 {0} 必须指定“unusedExpectDirectiveIndex”。",
	"Do_not_print_diagnostics_100000": "不打印诊断信息。",
	"Duplicate_named_capturing_groups_are_only_available_when_targeting_0_or_later_18063": "重复的具名捕获组仅在目标为“{0}”或更高版本时可用。",
	"Ensure_types_are_ordered_stably_and_deterministically_across_compilations_6809":      "确保类型在各次编译之间稳定且确定地排序。",
	"Failed_to_delete_file_0_6353":                                          "未能删除文件“{0}”。",
	"File_rename_is_not_supported_by_the_editor_8040":                       "编辑器不支持重命名文件",
	"Fix_All_100015":                                                        "全部修复",
	"Generate_pprof_CPU_Slashmemory_profiles_to_the_given_directory_100002": "将 pprof CPU/内存分析文件生成到指定目录。",
	"Installing_types_for_0_100013":                                         "正在为“{0}”安装类型",
	"JSDoc_comment_100019":                                                  "JSDoc 注释",
	"Loading_100012":                                                        "正在加载",
	"Locale_must_be_an_IETF_BCP_47_language_tag_Examples_Colon_0_1_6048":    "locale 必须是 IETF BCP 47 语言标记。例如：“{0}”、“{1}”。",
	"Multiple_module_exports_assignments_cannot_be_serialized_for_declaration_emit_6424":                        "多个“module.exports”赋值无法为声明输出序列化。",
	"Nested_CommonJS_export_constructs_cannot_be_serialized_for_declaration_emit_6425":                          "嵌套的 CommonJS 导出构造无法为声明输出序列化。",
	"Non_relative_paths_are_not_allowed_Did_you_forget_a_leading_Slash_5090":                                    "不允许使用非相对路径。你是否忘了开头的“./”？",
	"Option_0_requires_value_to_be_greater_than_1_5002":                                                         "选项“{0}”要求取值大于“{1}”。",
	"Option_incremental_is_only_valid_with_a_known_configuration_file_like_tsconfig_json_or_when_tsBuildI_5074": "选项“--incremental”仅在存在已知配置文件（如“tsconfig.json”）或显式提供“--tsBuildInfoFile”时才有效。",
	"Organize_Imports_100016": "组织导入",
	"Project_0_100014":        "项目“{0}”",
	"Project_0_is_out_of_date_because_config_file_does_not_exist_6401":                        "项目“{0}”已过期，因为配置文件不存在。",
	"Project_0_is_out_of_date_because_input_1_does_not_exist_6420":                            "项目“{0}”已过期，因为输入“{1}”不存在。",
	"Project_0_is_out_of_date_because_it_has_errors_6423":                                     "项目“{0}”已过期，因为它存在错误。",
	"Regular_expression_pattern_modifiers_are_only_available_when_targeting_0_or_later_18062": "正则表达式模式修饰符仅在目标为“{0}”或更高版本时可用。",
	"Remove_Unused_Imports_100017":                                                            "移除未使用的导入",
	"Run_in_single_threaded_mode_100001":                                                      "以单线程模式运行。",
	"Set_the_number_of_checkers_per_project_100003":                                           "设置每个项目的检查器数量。",
	"Set_the_number_of_projects_to_build_concurrently_100009":                                 "设置并发构建的项目数量。",
	"Sort_Imports_100018": "排序导入",
	"Supplemental_virtual_file_produced_by_the_content_mapper_for_file_0_100055":                                  "内容映射器为文件“{0}”生成的补充虚拟文件。",
	"The_common_source_directory_of_0_is_1_The_rootDir_setting_must_be_explicitly_set_to_this_or_another__5011":   "“{0}”的公共源目录是“{1}”。必须将“rootDir”设置显式设为该路径或其他路径，以调整输出的文件布局。",
	"The_content_mapper_0_could_not_be_initialized_100057":                                                        "内容映射器“{0}”无法初始化。",
	"The_content_mapper_0_did_not_provide_the_required_position_mappings_100027":                                  "内容映射器“{0}”未提供所需的位置映射。",
	"The_content_mapper_0_failed_1_times_and_will_not_be_used_100026":                                             "内容映射器“{0}”失败 {1} 次，将不再使用。",
	"The_content_mapper_0_failed_to_transform_this_file_100025":                                                   "内容映射器“{0}”未能转换此文件。",
	"The_content_mapper_0_produced_a_position_mapping_that_points_outside_the_original_content_original_o_100028": "内容映射器“{0}”生成的位置映射指向原始内容之外（原始偏移 {1}）。",
	"The_content_mapper_0_produced_a_position_mapping_with_an_invalid_kind_near_virtual_offset_1_100040":          "内容映射器“{0}”生成的位置映射种类无效（接近虚拟偏移 {1}）。",
	"The_content_mapper_0_produced_a_verbatim_mapping_that_does_not_match_the_original_content_virtual_of_100029": "内容映射器“{0}”生成的逐字映射与原始内容不匹配（虚拟偏移 {1}，原始偏移 {2}）。",
	"The_content_mapper_0_produced_invalid_mapping_features_near_original_offset_1_100039":                        "内容映射器“{0}”在原始偏移 {1} 附近生成了无效的映射特性。",
	"The_content_mapper_0_produced_overlapping_or_out_of_order_position_mappings_near_virtual_offset_1_100037":    "内容映射器“{0}”生成了重叠或乱序的位置映射（接近虚拟偏移 {1}）。",
	"The_content_mapper_command_0_could_not_be_started_Colon_1_100058":                                            "内容映射器命令“{0}”无法启动：{1}",
	"The_content_mapper_diagnostic_source_0_is_reserved_by_TypeScript_100047":                                     "内容映射器诊断来源“{0}”是 TypeScript 保留的。",
	"The_content_mapper_diagnostic_source_must_not_be_empty_100046":                                               "内容映射器诊断来源不能为空。",
	"The_content_mapper_did_not_respond_to_the_initialize_request_within_0_seconds_100060":                        "内容映射器未在 {0} 秒内响应“initialize”请求。",
	"The_content_mapper_did_not_return_configIdentity_which_is_required_when_the_content_mapper_has_dynam_100050": "内容映射器未返回“configIdentity”，当其 package.json 中含“dynamicConfig”: true 时此项为必需。",
	"The_content_mapper_package_0_could_not_be_resolved_100031":                                                   "无法解析内容映射器包“{0}”。",
	"The_content_mapper_process_could_not_be_started_or_initialized_100041":                                       "内容映射器进程无法启动或初始化。",
	"The_content_mapper_process_exited_before_responding_to_the_initialize_request_exit_code_0_100059":            "内容映射器进程在响应“initialize”请求之前退出（退出码 {0}）。",
	"The_content_mapper_process_failed_while_handling_the_project_request_100049":                                 "内容映射器进程在处理项目请求时失败。",
	"The_content_mapper_process_failed_while_handling_the_transform_request_100042":                               "内容映射器进程在处理转换请求时失败。",
	"The_content_mapper_returned_a_diagnostic_directive_with_invalid_policy_0_100064":                             "内容映射器返回的诊断指令的策略“{0}”无效。",
	"The_content_mapper_returned_a_non_absolute_path_in_watchedFiles_100051":                                      "内容映射器在“watchedFiles”中返回了非绝对路径。",
	"The_content_mapper_returned_a_project_response_that_could_not_be_decoded_100048":                             "内容映射器返回的项目响应无法解码。",
	"The_content_mapper_returned_an_initialize_response_that_could_not_be_decoded_Colon_0_100061":                 "内容映射器返回的“initialize”响应无法解码：{0}",
	"The_content_mapper_returned_an_invalid_transform_response_100043":                                            "内容映射器返回了无效的转换响应。",
	"The_content_mapper_returned_an_output_with_unsupported_virtual_extension_0_100056":                           "内容映射器返回了虚拟扩展名“{0}”不受支持的输出。",
	"The_content_mapper_returned_configIdentity_which_is_only_allowed_when_it_declares_dynamicConfig_Colo_100052": "内容映射器返回了“configIdentity”，仅当其 package.json 中声明“dynamicConfig”: true 时才允许。",
	"The_content_mapper_returned_diagnostic_directives_with_overlapping_virtual_ranges_100066":                    "内容映射器返回的诊断指令存在重叠的虚拟范围。",
	"The_content_mapper_returned_watchedFiles_which_is_only_allowed_when_it_declares_dynamicConfig_Colon__100053": "内容映射器返回了“watchedFiles”，仅当其 package.json 中声明“dynamicConfig”: true 时才允许。",
	"The_content_mapper_s_initialize_request_failed_Colon_0_100062":                                               "内容映射器的“initialize”请求失败：{0}",
	"The_content_mapper_selected_unsupported_position_encoding_0_100045":                                          "内容映射器选择了不受支持的位置编码“{0}”。",
	"The_inferred_type_of_0_cannot_be_named_without_a_reference_to_2_from_1_This_is_likely_not_portable_A_2883":   "“{0}”的推断类型无法在缺少来自“{1}”的“{2}”引用时命名。这很可能不可移植，必须添加类型标注。",
	"The_invalid_diagnostic_directive_is_in_supplemental_output_0_returned_by_the_content_mapper_100067":          "无效的诊断指令位于内容映射器返回的补充输出 {0} 中。",
	"The_package_json_of_the_content_mapper_package_0_could_not_be_parsed_100032":                                 "无法解析内容映射器包“{0}”的“package.json”。",
	"The_package_json_of_the_content_mapper_package_0_does_not_declare_a_typescript_contentMapper_object_100034":  "内容映射器包“{0}”的“package.json”未声明“typescript.contentMapper”对象。",
	"The_package_json_of_the_content_mapper_package_0_does_not_specify_a_name_100033":                             "内容映射器包“{0}”的“package.json”未指定“name”。",
	"The_typescript_contentMapper_exec_of_the_content_mapper_package_0_must_be_a_non_empty_array_of_strin_100035": "内容映射器包“{0}”的“typescript.contentMapper.exec”必须是非空字符串数组。",
	"This_location_is_in_virtual_code_produced_by_the_content_mapper_0_and_has_no_corresponding_location__100030": "此位置位于内容映射器“{0}”生成的虚拟代码中，在原始文件里没有对应位置。",
	"true_unless_strict_is_false_6905":                                                                            "true，除非 strict 为 false",
	"Virtual_code_produced_by_the_content_mapper_0_has_problems_with_no_corresponding_location_in_this_fi_100036": "内容映射器“{0}”生成的虚拟代码存在问题，且在本文件中没有对应位置。",
}

// zhOverrides 是「覆盖」：这些键上游 zh-CN 已经有译文，但我们希望换个说法。
//
// 目前只有一条：--help 的首行。上游把它写成 “tsc: TypeScript 编译器”（产品名沿用 tsc），
// 而本产品的命令叫 chtsc，所以中文里改成 “chtsc: …”。
// **只覆盖简体中文**：英文仍是 “tsc: The TypeScript Compiler”，因此与上游 help 基线
// 逐字节一致（零回归），不需要给 judge_gotest 增加新一类解释规则。
var zhOverrides = map[Key]string{
	"tsc_Colon_The_TypeScript_Compiler_6922": "chtsc: TypeScript 编译器",
}
