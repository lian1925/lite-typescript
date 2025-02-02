// Generated from src/compiler/LiteParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LiteParserListener } from "./LiteParserListener";
import { LiteParserVisitor } from "./LiteParserVisitor";


export class LiteParser extends Parser {
	public static readonly LinqFrom = 1;
	public static readonly LinqBy = 2;
	public static readonly LinqSelect = 3;
	public static readonly LinqWhere = 4;
	public static readonly LinqGroup = 5;
	public static readonly LinqInto = 6;
	public static readonly LinqOrderby = 7;
	public static readonly LinqJoin = 8;
	public static readonly LinqLet = 9;
	public static readonly LinqIn = 10;
	public static readonly LinqOn = 11;
	public static readonly LinqEquals = 12;
	public static readonly LinqAscending = 13;
	public static readonly LinqDescending = 14;
	public static readonly Pow = 15;
	public static readonly Root = 16;
	public static readonly Log = 17;
	public static readonly Add_Equal = 18;
	public static readonly Sub_Equal = 19;
	public static readonly Mul_Equal = 20;
	public static readonly Div_Equal = 21;
	public static readonly Mod_Equal = 22;
	public static readonly Colon_Equal = 23;
	public static readonly Equal_Equal = 24;
	public static readonly Less_Equal = 25;
	public static readonly Greater_Equal = 26;
	public static readonly Not_Equal = 27;
	public static readonly Dot_Dot_Dot = 28;
	public static readonly Dot_Dot = 29;
	public static readonly Dot = 30;
	public static readonly Comma = 31;
	public static readonly Equal_Arrow = 32;
	public static readonly Right_Arrow = 33;
	public static readonly Left_Arrow = 34;
	public static readonly Right_Flow = 35;
	public static readonly Left_Flow = 36;
	public static readonly Equal = 37;
	public static readonly Less = 38;
	public static readonly Greater = 39;
	public static readonly Semi = 40;
	public static readonly Left_Paren = 41;
	public static readonly Right_Paren = 42;
	public static readonly Left_Brace = 43;
	public static readonly Right_Brace = 44;
	public static readonly Left_Brack = 45;
	public static readonly Right_Brack = 46;
	public static readonly Colon_Colon = 47;
	public static readonly Colon = 48;
	public static readonly Question = 49;
	public static readonly At = 50;
	public static readonly Bang = 51;
	public static readonly Wave = 52;
	public static readonly Add = 53;
	public static readonly Sub = 54;
	public static readonly Mul = 55;
	public static readonly Div = 56;
	public static readonly Mod = 57;
	public static readonly Slash = 58;
	public static readonly And = 59;
	public static readonly Or = 60;
	public static readonly TypeI8 = 61;
	public static readonly TypeU8 = 62;
	public static readonly TypeI16 = 63;
	public static readonly TypeU16 = 64;
	public static readonly TypeI32 = 65;
	public static readonly TypeU32 = 66;
	public static readonly TypeI64 = 67;
	public static readonly TypeU64 = 68;
	public static readonly TypeF32 = 69;
	public static readonly TypeF64 = 70;
	public static readonly TypeChr = 71;
	public static readonly TypeStr = 72;
	public static readonly TypeBool = 73;
	public static readonly TypeInt = 74;
	public static readonly TypeNum = 75;
	public static readonly TypeByte = 76;
	public static readonly TypeAny = 77;
	public static readonly NilLiteral = 78;
	public static readonly TrueLiteral = 79;
	public static readonly FalseLiteral = 80;
	public static readonly UndefinedLiteral = 81;
	public static readonly NumberLiteral = 82;
	public static readonly TextLiteral = 83;
	public static readonly CharLiteral = 84;
	public static readonly IDPrivate = 85;
	public static readonly IDPublic = 86;
	public static readonly Discard = 87;
	public static readonly Big_Big_Comment = 88;
	public static readonly Big_Comment = 89;
	public static readonly Comment = 90;
	public static readonly New_Line = 91;
	public static readonly WS = 92;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_exportStatement = 2;
	public static readonly RULE_importStatement = 3;
	public static readonly RULE_namespaceSupportStatement = 4;
	public static readonly RULE_typeAliasStatement = 5;
	public static readonly RULE_typeRedefineStatement = 6;
	public static readonly RULE_enumStatement = 7;
	public static readonly RULE_enumSupportStatement = 8;
	public static readonly RULE_namespaceVariableStatement = 9;
	public static readonly RULE_namespaceControlStatement = 10;
	public static readonly RULE_namespaceConstantStatement = 11;
	public static readonly RULE_namespaceFunctionStatement = 12;
	public static readonly RULE_packageStatement = 13;
	public static readonly RULE_packageSupportStatement = 14;
	public static readonly RULE_includeStatement = 15;
	public static readonly RULE_packageNewStatement = 16;
	public static readonly RULE_packageVariableStatement = 17;
	public static readonly RULE_packageControlSubStatement = 18;
	public static readonly RULE_packageEventStatement = 19;
	public static readonly RULE_implementStatement = 20;
	public static readonly RULE_implementSupportStatement = 21;
	public static readonly RULE_implementFunctionStatement = 22;
	public static readonly RULE_implementControlStatement = 23;
	public static readonly RULE_overrideStatement = 24;
	public static readonly RULE_overrideSupportStatement = 25;
	public static readonly RULE_overrideFunctionStatement = 26;
	public static readonly RULE_overrideControlStatement = 27;
	public static readonly RULE_protocolStatement = 28;
	public static readonly RULE_protocolSupportStatement = 29;
	public static readonly RULE_protocolControlStatement = 30;
	public static readonly RULE_protocolControlSubStatement = 31;
	public static readonly RULE_protocolFunctionStatement = 32;
	public static readonly RULE_functionStatement = 33;
	public static readonly RULE_returnStatement = 34;
	public static readonly RULE_parameterClauseIn = 35;
	public static readonly RULE_parameterClauseOut = 36;
	public static readonly RULE_parameterClauseSelf = 37;
	public static readonly RULE_parameter = 38;
	public static readonly RULE_functionSupportStatement = 39;
	public static readonly RULE_judgeCaseStatement = 40;
	public static readonly RULE_caseDefaultStatement = 41;
	public static readonly RULE_caseExprStatement = 42;
	public static readonly RULE_caseStatement = 43;
	public static readonly RULE_judgeStatement = 44;
	public static readonly RULE_judgeElseStatement = 45;
	public static readonly RULE_judgeIfStatement = 46;
	public static readonly RULE_judgeElseIfStatement = 47;
	public static readonly RULE_loopStatement = 48;
	public static readonly RULE_loopEachStatement = 49;
	public static readonly RULE_loopCaseStatement = 50;
	public static readonly RULE_loopInfiniteStatement = 51;
	public static readonly RULE_loopJumpStatement = 52;
	public static readonly RULE_loopContinueStatement = 53;
	public static readonly RULE_checkStatement = 54;
	public static readonly RULE_usingStatement = 55;
	public static readonly RULE_checkErrorStatement = 56;
	public static readonly RULE_checkFinallyStatment = 57;
	public static readonly RULE_reportStatement = 58;
	public static readonly RULE_iteratorStatement = 59;
	public static readonly RULE_variableStatement = 60;
	public static readonly RULE_variableDeclaredStatement = 61;
	public static readonly RULE_channelAssignStatement = 62;
	public static readonly RULE_assignStatement = 63;
	public static readonly RULE_expressionStatement = 64;
	public static readonly RULE_primaryExpression = 65;
	public static readonly RULE_expression = 66;
	public static readonly RULE_callExpression = 67;
	public static readonly RULE_tuple = 68;
	public static readonly RULE_expressionList = 69;
	public static readonly RULE_annotationSupport = 70;
	public static readonly RULE_annotation = 71;
	public static readonly RULE_annotationList = 72;
	public static readonly RULE_annotationItem = 73;
	public static readonly RULE_annotationAssign = 74;
	public static readonly RULE_callFunc = 75;
	public static readonly RULE_callChannel = 76;
	public static readonly RULE_callElement = 77;
	public static readonly RULE_callPkg = 78;
	public static readonly RULE_callNew = 79;
	public static readonly RULE_getType = 80;
	public static readonly RULE_typeConversion = 81;
	public static readonly RULE_pkgAssign = 82;
	public static readonly RULE_pkgAssignElement = 83;
	public static readonly RULE_listAssign = 84;
	public static readonly RULE_setAssign = 85;
	public static readonly RULE_dictionaryAssign = 86;
	public static readonly RULE_callAwait = 87;
	public static readonly RULE_list = 88;
	public static readonly RULE_set = 89;
	public static readonly RULE_dictionary = 90;
	public static readonly RULE_dictionaryElement = 91;
	public static readonly RULE_slice = 92;
	public static readonly RULE_sliceFull = 93;
	public static readonly RULE_sliceStart = 94;
	public static readonly RULE_sliceEnd = 95;
	public static readonly RULE_nameSpaceItem = 96;
	public static readonly RULE_name = 97;
	public static readonly RULE_templateDefine = 98;
	public static readonly RULE_templateDefineItem = 99;
	public static readonly RULE_templateCall = 100;
	public static readonly RULE_lambda = 101;
	public static readonly RULE_lambdaIn = 102;
	public static readonly RULE_pkgAnonymous = 103;
	public static readonly RULE_pkgAnonymousAssign = 104;
	public static readonly RULE_pkgAnonymousAssignElement = 105;
	public static readonly RULE_functionExpression = 106;
	public static readonly RULE_tupleExpression = 107;
	public static readonly RULE_plusMinus = 108;
	public static readonly RULE_negate = 109;
	public static readonly RULE_linq = 110;
	public static readonly RULE_linqItem = 111;
	public static readonly RULE_linqKeyword = 112;
	public static readonly RULE_linqHeadKeyword = 113;
	public static readonly RULE_linqBodyKeyword = 114;
	public static readonly RULE_stringExpression = 115;
	public static readonly RULE_stringExpressionElement = 116;
	public static readonly RULE_dataStatement = 117;
	public static readonly RULE_floatExpr = 118;
	public static readonly RULE_integerExpr = 119;
	public static readonly RULE_typeNotNull = 120;
	public static readonly RULE_typeReference = 121;
	public static readonly RULE_typeNullable = 122;
	public static readonly RULE_typeType = 123;
	public static readonly RULE_typeTuple = 124;
	public static readonly RULE_typeArray = 125;
	public static readonly RULE_typeList = 126;
	public static readonly RULE_typeSet = 127;
	public static readonly RULE_typeDictionary = 128;
	public static readonly RULE_typeChannel = 129;
	public static readonly RULE_typePackage = 130;
	public static readonly RULE_typeFunction = 131;
	public static readonly RULE_typeAny = 132;
	public static readonly RULE_typeFunctionParameterClause = 133;
	public static readonly RULE_typeBasic = 134;
	public static readonly RULE_nilExpr = 135;
	public static readonly RULE_boolExpr = 136;
	public static readonly RULE_judgeType = 137;
	public static readonly RULE_judge = 138;
	public static readonly RULE_assign = 139;
	public static readonly RULE_add = 140;
	public static readonly RULE_mul = 141;
	public static readonly RULE_pow = 142;
	public static readonly RULE_call = 143;
	public static readonly RULE_wave = 144;
	public static readonly RULE_id = 145;
	public static readonly RULE_idItem = 146;
	public static readonly RULE_end = 147;
	public static readonly RULE_more = 148;
	public static readonly RULE_left_brace = 149;
	public static readonly RULE_right_brace = 150;
	public static readonly RULE_left_paren = 151;
	public static readonly RULE_right_paren = 152;
	public static readonly RULE_left_brack = 153;
	public static readonly RULE_right_brack = 154;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "exportStatement", "importStatement", "namespaceSupportStatement", 
		"typeAliasStatement", "typeRedefineStatement", "enumStatement", "enumSupportStatement", 
		"namespaceVariableStatement", "namespaceControlStatement", "namespaceConstantStatement", 
		"namespaceFunctionStatement", "packageStatement", "packageSupportStatement", 
		"includeStatement", "packageNewStatement", "packageVariableStatement", 
		"packageControlSubStatement", "packageEventStatement", "implementStatement", 
		"implementSupportStatement", "implementFunctionStatement", "implementControlStatement", 
		"overrideStatement", "overrideSupportStatement", "overrideFunctionStatement", 
		"overrideControlStatement", "protocolStatement", "protocolSupportStatement", 
		"protocolControlStatement", "protocolControlSubStatement", "protocolFunctionStatement", 
		"functionStatement", "returnStatement", "parameterClauseIn", "parameterClauseOut", 
		"parameterClauseSelf", "parameter", "functionSupportStatement", "judgeCaseStatement", 
		"caseDefaultStatement", "caseExprStatement", "caseStatement", "judgeStatement", 
		"judgeElseStatement", "judgeIfStatement", "judgeElseIfStatement", "loopStatement", 
		"loopEachStatement", "loopCaseStatement", "loopInfiniteStatement", "loopJumpStatement", 
		"loopContinueStatement", "checkStatement", "usingStatement", "checkErrorStatement", 
		"checkFinallyStatment", "reportStatement", "iteratorStatement", "variableStatement", 
		"variableDeclaredStatement", "channelAssignStatement", "assignStatement", 
		"expressionStatement", "primaryExpression", "expression", "callExpression", 
		"tuple", "expressionList", "annotationSupport", "annotation", "annotationList", 
		"annotationItem", "annotationAssign", "callFunc", "callChannel", "callElement", 
		"callPkg", "callNew", "getType", "typeConversion", "pkgAssign", "pkgAssignElement", 
		"listAssign", "setAssign", "dictionaryAssign", "callAwait", "list", "set", 
		"dictionary", "dictionaryElement", "slice", "sliceFull", "sliceStart", 
		"sliceEnd", "nameSpaceItem", "name", "templateDefine", "templateDefineItem", 
		"templateCall", "lambda", "lambdaIn", "pkgAnonymous", "pkgAnonymousAssign", 
		"pkgAnonymousAssignElement", "functionExpression", "tupleExpression", 
		"plusMinus", "negate", "linq", "linqItem", "linqKeyword", "linqHeadKeyword", 
		"linqBodyKeyword", "stringExpression", "stringExpressionElement", "dataStatement", 
		"floatExpr", "integerExpr", "typeNotNull", "typeReference", "typeNullable", 
		"typeType", "typeTuple", "typeArray", "typeList", "typeSet", "typeDictionary", 
		"typeChannel", "typePackage", "typeFunction", "typeAny", "typeFunctionParameterClause", 
		"typeBasic", "nilExpr", "boolExpr", "judgeType", "judge", "assign", "add", 
		"mul", "pow", "call", "wave", "id", "idItem", "end", "more", "left_brace", 
		"right_brace", "left_paren", "right_paren", "left_brack", "right_brack",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'from'", "'by'", "'select'", "'where'", "'group'", "'into'", 
		"'orderby'", "'join'", "'let'", "'in'", "'on'", "'equals'", "'ascending'", 
		"'descending'", "'**'", "'//'", "'%%'", "'+='", "'-='", "'*='", "'/='", 
		"'%='", "':='", "'=='", "'<='", "'>='", "'><'", "'...'", "'..'", "'.'", 
		"','", "'=>'", "'->'", "'<-'", "'~>'", "'<~'", "'='", "'<'", "'>'", "';'", 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "'::'", "':'", "'?'", "'@'", 
		"'!'", "'~'", "'+'", "'-'", "'*'", "'/'", "'%'", "'\\'", "'&'", "'|'", 
		"'I8'", "'U8'", "'I16'", "'U16'", "'I32'", "'U32'", "'I64'", "'U64'", 
		"'F32'", "'F64'", "'Chr'", "'Str'", "'Bool'", "'Int'", "'Num'", "'Byte'", 
		"'Any'", "'Nil'", "'True'", "'False'", "'Undefined'", undefined, undefined, 
		undefined, undefined, undefined, "'_'", undefined, undefined, undefined, 
		"'\n'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LinqFrom", "LinqBy", "LinqSelect", "LinqWhere", "LinqGroup", 
		"LinqInto", "LinqOrderby", "LinqJoin", "LinqLet", "LinqIn", "LinqOn", 
		"LinqEquals", "LinqAscending", "LinqDescending", "Pow", "Root", "Log", 
		"Add_Equal", "Sub_Equal", "Mul_Equal", "Div_Equal", "Mod_Equal", "Colon_Equal", 
		"Equal_Equal", "Less_Equal", "Greater_Equal", "Not_Equal", "Dot_Dot_Dot", 
		"Dot_Dot", "Dot", "Comma", "Equal_Arrow", "Right_Arrow", "Left_Arrow", 
		"Right_Flow", "Left_Flow", "Equal", "Less", "Greater", "Semi", "Left_Paren", 
		"Right_Paren", "Left_Brace", "Right_Brace", "Left_Brack", "Right_Brack", 
		"Colon_Colon", "Colon", "Question", "At", "Bang", "Wave", "Add", "Sub", 
		"Mul", "Div", "Mod", "Slash", "And", "Or", "TypeI8", "TypeU8", "TypeI16", 
		"TypeU16", "TypeI32", "TypeU32", "TypeI64", "TypeU64", "TypeF32", "TypeF64", 
		"TypeChr", "TypeStr", "TypeBool", "TypeInt", "TypeNum", "TypeByte", "TypeAny", 
		"NilLiteral", "TrueLiteral", "FalseLiteral", "UndefinedLiteral", "NumberLiteral", 
		"TextLiteral", "CharLiteral", "IDPrivate", "IDPublic", "Discard", "Big_Big_Comment", 
		"Big_Comment", "Comment", "New_Line", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LiteParser._LITERAL_NAMES, LiteParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LiteParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "LiteParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return LiteParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LiteParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LiteParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LiteParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 310;
				this.statement();
				}
				}
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LiteParser.Left_Brack || _la === LiteParser.TextLiteral || _la === LiteParser.New_Line);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LiteParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 315;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 320;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 322;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 321;
				this.annotationSupport();
				}
			}

			this.state = 324;
			this.exportStatement();
			this.state = 328;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 325;
					this.match(LiteParser.New_Line);
					}
					}
				}
				this.state = 330;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 334;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 331;
					this.namespaceSupportStatement();
					}
					}
				}
				this.state = 336;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exportStatement(): ExportStatementContext {
		let _localctx: ExportStatementContext = new ExportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LiteParser.RULE_exportStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(LiteParser.TextLiteral);
			this.state = 338;
			this.left_brace();
			this.state = 343;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 341;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case LiteParser.Left_Brack:
					case LiteParser.TextLiteral:
						{
						this.state = 339;
						this.importStatement();
						}
						break;
					case LiteParser.New_Line:
						{
						this.state = 340;
						this.match(LiteParser.New_Line);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 345;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			this.state = 346;
			this.right_brace();
			this.state = 347;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let _localctx: ImportStatementContext = new ImportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LiteParser.RULE_importStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 349;
				this.annotationSupport();
				}
			}

			this.state = 352;
			this.match(LiteParser.TextLiteral);
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (LiteParser.TypeI8 - 61)) | (1 << (LiteParser.TypeU8 - 61)) | (1 << (LiteParser.TypeI16 - 61)) | (1 << (LiteParser.TypeU16 - 61)) | (1 << (LiteParser.TypeI32 - 61)) | (1 << (LiteParser.TypeU32 - 61)) | (1 << (LiteParser.TypeI64 - 61)) | (1 << (LiteParser.TypeU64 - 61)) | (1 << (LiteParser.TypeF32 - 61)) | (1 << (LiteParser.TypeF64 - 61)) | (1 << (LiteParser.TypeChr - 61)) | (1 << (LiteParser.TypeStr - 61)) | (1 << (LiteParser.TypeBool - 61)) | (1 << (LiteParser.TypeInt - 61)) | (1 << (LiteParser.TypeNum - 61)) | (1 << (LiteParser.TypeByte - 61)) | (1 << (LiteParser.TypeAny - 61)) | (1 << (LiteParser.IDPrivate - 61)) | (1 << (LiteParser.IDPublic - 61)))) !== 0)) {
				{
				this.state = 353;
				this.id();
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.Dot) {
					{
					this.state = 354;
					this.call();
					}
				}

				}
			}

			this.state = 359;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceSupportStatement(): NamespaceSupportStatementContext {
		let _localctx: NamespaceSupportStatementContext = new NamespaceSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LiteParser.RULE_namespaceSupportStatement);
		try {
			this.state = 374;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 361;
				this.namespaceVariableStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 362;
				this.namespaceControlStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 363;
				this.namespaceFunctionStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 364;
				this.namespaceConstantStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 365;
				this.packageStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 366;
				this.protocolStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 367;
				this.implementStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 368;
				this.overrideStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 369;
				this.packageNewStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 370;
				this.enumStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 371;
				this.typeAliasStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 372;
				this.typeRedefineStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 373;
				this.match(LiteParser.New_Line);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAliasStatement(): TypeAliasStatementContext {
		let _localctx: TypeAliasStatementContext = new TypeAliasStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LiteParser.RULE_typeAliasStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 376;
			this.id();
			this.state = 377;
			this.match(LiteParser.Equal_Arrow);
			this.state = 378;
			this.typeType();
			this.state = 379;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeRedefineStatement(): TypeRedefineStatementContext {
		let _localctx: TypeRedefineStatementContext = new TypeRedefineStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LiteParser.RULE_typeRedefineStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 381;
			this.id();
			this.state = 382;
			this.match(LiteParser.Right_Arrow);
			this.state = 383;
			this.typeType();
			this.state = 384;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumStatement(): EnumStatementContext {
		let _localctx: EnumStatementContext = new EnumStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LiteParser.RULE_enumStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 386;
				this.annotationSupport();
				}
			}

			this.state = 389;
			this.id();
			this.state = 390;
			this.match(LiteParser.Right_Arrow);
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 391;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 397;
			this.typeType();
			this.state = 398;
			this.left_brack();
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (LiteParser.TypeI8 - 61)) | (1 << (LiteParser.TypeU8 - 61)) | (1 << (LiteParser.TypeI16 - 61)) | (1 << (LiteParser.TypeU16 - 61)) | (1 << (LiteParser.TypeI32 - 61)) | (1 << (LiteParser.TypeU32 - 61)) | (1 << (LiteParser.TypeI64 - 61)) | (1 << (LiteParser.TypeU64 - 61)) | (1 << (LiteParser.TypeF32 - 61)) | (1 << (LiteParser.TypeF64 - 61)) | (1 << (LiteParser.TypeChr - 61)) | (1 << (LiteParser.TypeStr - 61)) | (1 << (LiteParser.TypeBool - 61)) | (1 << (LiteParser.TypeInt - 61)) | (1 << (LiteParser.TypeNum - 61)) | (1 << (LiteParser.TypeByte - 61)) | (1 << (LiteParser.TypeAny - 61)) | (1 << (LiteParser.IDPrivate - 61)) | (1 << (LiteParser.IDPublic - 61)))) !== 0)) {
				{
				{
				this.state = 399;
				this.enumSupportStatement();
				}
				}
				this.state = 404;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 405;
			this.right_brack();
			this.state = 406;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumSupportStatement(): EnumSupportStatementContext {
		let _localctx: EnumSupportStatementContext = new EnumSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LiteParser.RULE_enumSupportStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.id();
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Equal) {
				{
				this.state = 409;
				this.match(LiteParser.Equal);
				this.state = 411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.Add || _la === LiteParser.Sub) {
					{
					this.state = 410;
					this.add();
					}
				}

				this.state = 413;
				this.integerExpr();
				}
			}

			this.state = 416;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceVariableStatement(): NamespaceVariableStatementContext {
		let _localctx: NamespaceVariableStatementContext = new NamespaceVariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LiteParser.RULE_namespaceVariableStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 418;
				this.annotationSupport();
				}
			}

			this.state = 421;
			this.id();
			this.state = 430;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Colon_Equal:
				{
				this.state = 422;
				this.match(LiteParser.Colon_Equal);
				this.state = 423;
				this.expression(0);
				}
				break;
			case LiteParser.Colon:
				{
				this.state = 424;
				this.match(LiteParser.Colon);
				this.state = 425;
				this.typeType();
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.Equal) {
					{
					this.state = 426;
					this.match(LiteParser.Equal);
					this.state = 427;
					this.expression(0);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 432;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceControlStatement(): NamespaceControlStatementContext {
		let _localctx: NamespaceControlStatementContext = new NamespaceControlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LiteParser.RULE_namespaceControlStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 434;
				this.annotationSupport();
				}
			}

			this.state = 437;
			this.id();
			this.state = 438;
			this.match(LiteParser.Colon);
			this.state = 439;
			this.typeType();
			this.state = 442;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Equal) {
				{
				this.state = 440;
				this.match(LiteParser.Equal);
				this.state = 441;
				this.expression(0);
				}
			}

			this.state = 444;
			this.match(LiteParser.Right_Arrow);
			this.state = 446;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 445;
				this.packageControlSubStatement();
				}
				}
				this.state = 448;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (LiteParser.TypeI8 - 61)) | (1 << (LiteParser.TypeU8 - 61)) | (1 << (LiteParser.TypeI16 - 61)) | (1 << (LiteParser.TypeU16 - 61)) | (1 << (LiteParser.TypeI32 - 61)) | (1 << (LiteParser.TypeU32 - 61)) | (1 << (LiteParser.TypeI64 - 61)) | (1 << (LiteParser.TypeU64 - 61)) | (1 << (LiteParser.TypeF32 - 61)) | (1 << (LiteParser.TypeF64 - 61)) | (1 << (LiteParser.TypeChr - 61)) | (1 << (LiteParser.TypeStr - 61)) | (1 << (LiteParser.TypeBool - 61)) | (1 << (LiteParser.TypeInt - 61)) | (1 << (LiteParser.TypeNum - 61)) | (1 << (LiteParser.TypeByte - 61)) | (1 << (LiteParser.TypeAny - 61)) | (1 << (LiteParser.IDPrivate - 61)) | (1 << (LiteParser.IDPublic - 61)))) !== 0));
			this.state = 450;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceConstantStatement(): NamespaceConstantStatementContext {
		let _localctx: NamespaceConstantStatementContext = new NamespaceConstantStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LiteParser.RULE_namespaceConstantStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 453;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 452;
				this.annotationSupport();
				}
			}

			this.state = 455;
			this.id();
			this.state = 461;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Colon:
				{
				this.state = 456;
				this.match(LiteParser.Colon);
				this.state = 457;
				this.typeType();
				this.state = 458;
				this.match(LiteParser.Colon);
				}
				break;
			case LiteParser.Colon_Colon:
				{
				this.state = 460;
				this.match(LiteParser.Colon_Colon);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 463;
			this.expression(0);
			this.state = 464;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public namespaceFunctionStatement(): NamespaceFunctionStatementContext {
		let _localctx: NamespaceFunctionStatementContext = new NamespaceFunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LiteParser.RULE_namespaceFunctionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 466;
				this.annotationSupport();
				}
			}

			this.state = 469;
			this.id();
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 470;
				this.templateDefine();
				}
			}

			this.state = 473;
			this.parameterClauseIn();
			this.state = 474;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 475;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 481;
			this.parameterClauseOut();
			this.state = 482;
			this.left_brace();
			this.state = 486;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 483;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 488;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			this.state = 489;
			this.right_brace();
			this.state = 490;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageStatement(): PackageStatementContext {
		let _localctx: PackageStatementContext = new PackageStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LiteParser.RULE_packageStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 492;
				this.annotationSupport();
				}
			}

			this.state = 495;
			this.id();
			this.state = 497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 496;
				this.templateDefine();
				}
			}

			this.state = 499;
			this.match(LiteParser.Right_Arrow);
			this.state = 500;
			this.left_brace();
			this.state = 504;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 501;
					this.packageSupportStatement();
					}
					}
				}
				this.state = 506;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			this.state = 507;
			this.right_brace();
			this.state = 508;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageSupportStatement(): PackageSupportStatementContext {
		let _localctx: PackageSupportStatementContext = new PackageSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LiteParser.RULE_packageSupportStatement);
		try {
			this.state = 514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 510;
				this.includeStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 511;
				this.packageVariableStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 512;
				this.packageEventStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 513;
				this.match(LiteParser.New_Line);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public includeStatement(): IncludeStatementContext {
		let _localctx: IncludeStatementContext = new IncludeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, LiteParser.RULE_includeStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this.match(LiteParser.Colon);
			this.state = 517;
			this.typeType();
			this.state = 518;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageNewStatement(): PackageNewStatementContext {
		let _localctx: PackageNewStatementContext = new PackageNewStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LiteParser.RULE_packageNewStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 520;
				this.annotationSupport();
				}
			}

			this.state = 523;
			this.parameterClauseSelf();
			this.state = 524;
			this.match(LiteParser.Less);
			this.state = 525;
			this.match(LiteParser.Greater);
			this.state = 526;
			this.parameterClauseIn();
			this.state = 533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 527;
				this.left_paren();
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)) | (1 << (LiteParser.TypeI64 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
					{
					this.state = 528;
					this.expressionList();
					}
				}

				this.state = 531;
				this.right_paren();
				}
			}

			this.state = 535;
			this.left_brace();
			this.state = 539;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 536;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 541;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 542;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageVariableStatement(): PackageVariableStatementContext {
		let _localctx: PackageVariableStatementContext = new PackageVariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LiteParser.RULE_packageVariableStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 545;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 544;
				this.annotationSupport();
				}
			}

			this.state = 547;
			this.id();
			this.state = 556;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Colon_Equal:
				{
				this.state = 548;
				this.match(LiteParser.Colon_Equal);
				this.state = 549;
				this.expression(0);
				}
				break;
			case LiteParser.Colon:
				{
				this.state = 550;
				this.match(LiteParser.Colon);
				this.state = 551;
				this.typeType();
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.Equal) {
					{
					this.state = 552;
					this.match(LiteParser.Equal);
					this.state = 553;
					this.expression(0);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 558;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageControlSubStatement(): PackageControlSubStatementContext {
		let _localctx: PackageControlSubStatementContext = new PackageControlSubStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, LiteParser.RULE_packageControlSubStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			this.id();
			this.state = 565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 561;
				this.left_paren();
				this.state = 562;
				this.id();
				this.state = 563;
				this.right_paren();
				}
			}

			this.state = 567;
			this.left_brace();
			this.state = 569;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 568;
					this.functionSupportStatement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 571;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 573;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public packageEventStatement(): PackageEventStatementContext {
		let _localctx: PackageEventStatementContext = new PackageEventStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, LiteParser.RULE_packageEventStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 575;
			this.id();
			this.state = 576;
			this.match(LiteParser.Colon);
			this.state = 577;
			this.left_brack();
			this.state = 578;
			this.match(LiteParser.Question);
			this.state = 579;
			this.right_brack();
			this.state = 580;
			this.nameSpaceItem();
			this.state = 581;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementStatement(): ImplementStatementContext {
		let _localctx: ImplementStatementContext = new ImplementStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, LiteParser.RULE_implementStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 583;
			this.parameterClauseSelf();
			this.state = 584;
			this.match(LiteParser.Right_Arrow);
			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LiteParser.Left_Paren - 41)) | (1 << (LiteParser.Left_Brack - 41)) | (1 << (LiteParser.Question - 41)) | (1 << (LiteParser.Bang - 41)) | (1 << (LiteParser.TypeI8 - 41)) | (1 << (LiteParser.TypeU8 - 41)) | (1 << (LiteParser.TypeI16 - 41)) | (1 << (LiteParser.TypeU16 - 41)) | (1 << (LiteParser.TypeI32 - 41)) | (1 << (LiteParser.TypeU32 - 41)) | (1 << (LiteParser.TypeI64 - 41)) | (1 << (LiteParser.TypeU64 - 41)) | (1 << (LiteParser.TypeF32 - 41)) | (1 << (LiteParser.TypeF64 - 41)) | (1 << (LiteParser.TypeChr - 41)) | (1 << (LiteParser.TypeStr - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (LiteParser.TypeBool - 73)) | (1 << (LiteParser.TypeInt - 73)) | (1 << (LiteParser.TypeNum - 73)) | (1 << (LiteParser.TypeByte - 73)) | (1 << (LiteParser.TypeAny - 73)) | (1 << (LiteParser.IDPrivate - 73)) | (1 << (LiteParser.IDPublic - 73)))) !== 0)) {
				{
				this.state = 585;
				this.typeType();
				}
			}

			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 588;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 594;
			this.left_brace();
			this.state = 598;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 595;
					this.implementSupportStatement();
					}
					}
				}
				this.state = 600;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
			}
			this.state = 601;
			this.right_brace();
			this.state = 602;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementSupportStatement(): ImplementSupportStatementContext {
		let _localctx: ImplementSupportStatementContext = new ImplementSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, LiteParser.RULE_implementSupportStatement);
		try {
			this.state = 607;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 604;
				this.implementFunctionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 605;
				this.implementControlStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 606;
				this.match(LiteParser.New_Line);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementFunctionStatement(): ImplementFunctionStatementContext {
		let _localctx: ImplementFunctionStatementContext = new ImplementFunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, LiteParser.RULE_implementFunctionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 609;
				this.annotationSupport();
				}
			}

			this.state = 613;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Discard) {
				{
				this.state = 612;
				_localctx._n = this.match(LiteParser.Discard);
				}
			}

			this.state = 615;
			this.id();
			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 616;
				this.templateDefine();
				}
			}

			this.state = 619;
			this.parameterClauseIn();
			this.state = 620;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 621;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 626;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 627;
			this.parameterClauseOut();
			this.state = 628;
			this.left_brace();
			this.state = 632;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 629;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 634;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 49, this._ctx);
			}
			this.state = 635;
			this.right_brace();
			this.state = 636;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementControlStatement(): ImplementControlStatementContext {
		let _localctx: ImplementControlStatementContext = new ImplementControlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, LiteParser.RULE_implementControlStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 638;
				this.annotationSupport();
				}
			}

			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Discard) {
				{
				this.state = 641;
				_localctx._n = this.match(LiteParser.Discard);
				}
			}

			this.state = 644;
			this.id();
			this.state = 645;
			this.match(LiteParser.Colon);
			this.state = 646;
			this.typeType();
			this.state = 647;
			this.match(LiteParser.Right_Arrow);
			this.state = 649;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 648;
				this.packageControlSubStatement();
				}
				}
				this.state = 651;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (LiteParser.TypeI8 - 61)) | (1 << (LiteParser.TypeU8 - 61)) | (1 << (LiteParser.TypeI16 - 61)) | (1 << (LiteParser.TypeU16 - 61)) | (1 << (LiteParser.TypeI32 - 61)) | (1 << (LiteParser.TypeU32 - 61)) | (1 << (LiteParser.TypeI64 - 61)) | (1 << (LiteParser.TypeU64 - 61)) | (1 << (LiteParser.TypeF32 - 61)) | (1 << (LiteParser.TypeF64 - 61)) | (1 << (LiteParser.TypeChr - 61)) | (1 << (LiteParser.TypeStr - 61)) | (1 << (LiteParser.TypeBool - 61)) | (1 << (LiteParser.TypeInt - 61)) | (1 << (LiteParser.TypeNum - 61)) | (1 << (LiteParser.TypeByte - 61)) | (1 << (LiteParser.TypeAny - 61)) | (1 << (LiteParser.IDPrivate - 61)) | (1 << (LiteParser.IDPublic - 61)))) !== 0));
			this.state = 653;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideStatement(): OverrideStatementContext {
		let _localctx: OverrideStatementContext = new OverrideStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, LiteParser.RULE_overrideStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 655;
			this.parameterClauseSelf();
			this.state = 656;
			this.left_paren();
			this.state = 657;
			this.id();
			this.state = 658;
			this.right_paren();
			this.state = 659;
			this.match(LiteParser.Right_Arrow);
			this.state = 663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 660;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 666;
			this.left_brace();
			this.state = 670;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 667;
					this.overrideSupportStatement();
					}
					}
				}
				this.state = 672;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
			}
			this.state = 673;
			this.right_brace();
			this.state = 674;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideSupportStatement(): OverrideSupportStatementContext {
		let _localctx: OverrideSupportStatementContext = new OverrideSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, LiteParser.RULE_overrideSupportStatement);
		try {
			this.state = 679;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 676;
				this.overrideFunctionStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 677;
				this.overrideControlStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 678;
				this.match(LiteParser.New_Line);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideFunctionStatement(): OverrideFunctionStatementContext {
		let _localctx: OverrideFunctionStatementContext = new OverrideFunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, LiteParser.RULE_overrideFunctionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 682;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 681;
				this.annotationSupport();
				}
			}

			this.state = 685;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Discard) {
				{
				this.state = 684;
				_localctx._n = this.match(LiteParser.Discard);
				}
			}

			this.state = 687;
			this.id();
			this.state = 689;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 688;
				this.templateDefine();
				}
			}

			this.state = 691;
			this.parameterClauseIn();
			this.state = 692;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 693;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 699;
			this.parameterClauseOut();
			this.state = 700;
			this.left_brace();
			this.state = 704;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 701;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 706;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 60, this._ctx);
			}
			this.state = 707;
			this.right_brace();
			this.state = 708;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public overrideControlStatement(): OverrideControlStatementContext {
		let _localctx: OverrideControlStatementContext = new OverrideControlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, LiteParser.RULE_overrideControlStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 711;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 710;
				this.annotationSupport();
				}
			}

			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Discard) {
				{
				this.state = 713;
				_localctx._n = this.match(LiteParser.Discard);
				}
			}

			this.state = 716;
			this.id();
			this.state = 717;
			this.match(LiteParser.Colon);
			this.state = 718;
			this.typeType();
			this.state = 719;
			this.match(LiteParser.Right_Arrow);
			this.state = 721;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 720;
				this.packageControlSubStatement();
				}
				}
				this.state = 723;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (LiteParser.TypeI8 - 61)) | (1 << (LiteParser.TypeU8 - 61)) | (1 << (LiteParser.TypeI16 - 61)) | (1 << (LiteParser.TypeU16 - 61)) | (1 << (LiteParser.TypeI32 - 61)) | (1 << (LiteParser.TypeU32 - 61)) | (1 << (LiteParser.TypeI64 - 61)) | (1 << (LiteParser.TypeU64 - 61)) | (1 << (LiteParser.TypeF32 - 61)) | (1 << (LiteParser.TypeF64 - 61)) | (1 << (LiteParser.TypeChr - 61)) | (1 << (LiteParser.TypeStr - 61)) | (1 << (LiteParser.TypeBool - 61)) | (1 << (LiteParser.TypeInt - 61)) | (1 << (LiteParser.TypeNum - 61)) | (1 << (LiteParser.TypeByte - 61)) | (1 << (LiteParser.TypeAny - 61)) | (1 << (LiteParser.IDPrivate - 61)) | (1 << (LiteParser.IDPublic - 61)))) !== 0));
			this.state = 725;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocolStatement(): ProtocolStatementContext {
		let _localctx: ProtocolStatementContext = new ProtocolStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, LiteParser.RULE_protocolStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 727;
				this.annotationSupport();
				}
			}

			this.state = 730;
			this.id();
			this.state = 732;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 731;
				this.templateDefine();
				}
			}

			this.state = 734;
			this.match(LiteParser.Left_Arrow);
			this.state = 735;
			this.left_brace();
			this.state = 739;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 736;
					this.protocolSupportStatement();
					}
					}
				}
				this.state = 741;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			}
			this.state = 742;
			this.right_brace();
			this.state = 743;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocolSupportStatement(): ProtocolSupportStatementContext {
		let _localctx: ProtocolSupportStatementContext = new ProtocolSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, LiteParser.RULE_protocolSupportStatement);
		try {
			this.state = 749;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 745;
				this.includeStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 746;
				this.protocolFunctionStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 747;
				this.protocolControlStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 748;
				this.match(LiteParser.New_Line);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocolControlStatement(): ProtocolControlStatementContext {
		let _localctx: ProtocolControlStatementContext = new ProtocolControlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, LiteParser.RULE_protocolControlStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 751;
				this.annotationSupport();
				}
			}

			this.state = 754;
			this.id();
			this.state = 755;
			this.match(LiteParser.Colon);
			this.state = 756;
			this.typeType();
			this.state = 757;
			this.match(LiteParser.Right_Arrow);
			this.state = 758;
			this.protocolControlSubStatement();
			this.state = 763;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 759;
				this.match(LiteParser.Comma);
				this.state = 760;
				this.protocolControlSubStatement();
				}
				}
				this.state = 765;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 766;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocolControlSubStatement(): ProtocolControlSubStatementContext {
		let _localctx: ProtocolControlSubStatementContext = new ProtocolControlSubStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, LiteParser.RULE_protocolControlSubStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public protocolFunctionStatement(): ProtocolFunctionStatementContext {
		let _localctx: ProtocolFunctionStatementContext = new ProtocolFunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, LiteParser.RULE_protocolFunctionStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 771;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 770;
				this.annotationSupport();
				}
			}

			this.state = 773;
			this.id();
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 774;
				this.templateDefine();
				}
			}

			this.state = 777;
			this.parameterClauseIn();
			this.state = 778;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 782;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 779;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 784;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 785;
			this.parameterClauseOut();
			this.state = 786;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionStatement(): FunctionStatementContext {
		let _localctx: FunctionStatementContext = new FunctionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, LiteParser.RULE_functionStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 788;
			this.id();
			this.state = 790;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 789;
				this.templateDefine();
				}
			}

			this.state = 792;
			this.parameterClauseIn();
			this.state = 793;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 794;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 800;
			this.parameterClauseOut();
			this.state = 801;
			this.left_brace();
			this.state = 805;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 802;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 807;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
			}
			this.state = 808;
			this.right_brace();
			this.state = 809;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, LiteParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 811;
			this.match(LiteParser.Left_Arrow);
			this.state = 812;
			this.tuple();
			this.state = 813;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterClauseIn(): ParameterClauseInContext {
		let _localctx: ParameterClauseInContext = new ParameterClauseInContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, LiteParser.RULE_parameterClauseIn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 815;
			this.left_paren();
			this.state = 817;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (LiteParser.Left_Brack - 45)) | (1 << (LiteParser.TypeI8 - 45)) | (1 << (LiteParser.TypeU8 - 45)) | (1 << (LiteParser.TypeI16 - 45)) | (1 << (LiteParser.TypeU16 - 45)) | (1 << (LiteParser.TypeI32 - 45)) | (1 << (LiteParser.TypeU32 - 45)) | (1 << (LiteParser.TypeI64 - 45)) | (1 << (LiteParser.TypeU64 - 45)) | (1 << (LiteParser.TypeF32 - 45)) | (1 << (LiteParser.TypeF64 - 45)) | (1 << (LiteParser.TypeChr - 45)) | (1 << (LiteParser.TypeStr - 45)) | (1 << (LiteParser.TypeBool - 45)) | (1 << (LiteParser.TypeInt - 45)) | (1 << (LiteParser.TypeNum - 45)) | (1 << (LiteParser.TypeByte - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (LiteParser.TypeAny - 77)) | (1 << (LiteParser.IDPrivate - 77)) | (1 << (LiteParser.IDPublic - 77)))) !== 0)) {
				{
				this.state = 816;
				this.parameter();
				}
			}

			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 819;
				this.more();
				this.state = 820;
				this.parameter();
				}
				}
				this.state = 826;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 827;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterClauseOut(): ParameterClauseOutContext {
		let _localctx: ParameterClauseOutContext = new ParameterClauseOutContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, LiteParser.RULE_parameterClauseOut);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.left_paren();
			this.state = 831;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & ((1 << (LiteParser.Left_Brack - 45)) | (1 << (LiteParser.TypeI8 - 45)) | (1 << (LiteParser.TypeU8 - 45)) | (1 << (LiteParser.TypeI16 - 45)) | (1 << (LiteParser.TypeU16 - 45)) | (1 << (LiteParser.TypeI32 - 45)) | (1 << (LiteParser.TypeU32 - 45)) | (1 << (LiteParser.TypeI64 - 45)) | (1 << (LiteParser.TypeU64 - 45)) | (1 << (LiteParser.TypeF32 - 45)) | (1 << (LiteParser.TypeF64 - 45)) | (1 << (LiteParser.TypeChr - 45)) | (1 << (LiteParser.TypeStr - 45)) | (1 << (LiteParser.TypeBool - 45)) | (1 << (LiteParser.TypeInt - 45)) | (1 << (LiteParser.TypeNum - 45)) | (1 << (LiteParser.TypeByte - 45)))) !== 0) || ((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (LiteParser.TypeAny - 77)) | (1 << (LiteParser.IDPrivate - 77)) | (1 << (LiteParser.IDPublic - 77)))) !== 0)) {
				{
				this.state = 830;
				this.parameter();
				}
			}

			this.state = 838;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 833;
				this.more();
				this.state = 834;
				this.parameter();
				}
				}
				this.state = 840;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 841;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterClauseSelf(): ParameterClauseSelfContext {
		let _localctx: ParameterClauseSelfContext = new ParameterClauseSelfContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, LiteParser.RULE_parameterClauseSelf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 843;
			this.left_paren();
			this.state = 844;
			this.id();
			this.state = 845;
			this.match(LiteParser.Colon);
			this.state = 846;
			this.typeType();
			this.state = 847;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, LiteParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 849;
				this.annotationSupport();
				}
			}

			this.state = 852;
			this.id();
			this.state = 853;
			this.match(LiteParser.Colon);
			this.state = 854;
			this.typeType();
			this.state = 857;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Equal) {
				{
				this.state = 855;
				this.match(LiteParser.Equal);
				this.state = 856;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionSupportStatement(): FunctionSupportStatementContext {
		let _localctx: FunctionSupportStatementContext = new FunctionSupportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, LiteParser.RULE_functionSupportStatement);
		try {
			this.state = 878;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 859;
				this.returnStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 860;
				this.judgeCaseStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 861;
				this.judgeStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 862;
				this.loopStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 863;
				this.loopEachStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 864;
				this.loopCaseStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 865;
				this.loopInfiniteStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 866;
				this.loopJumpStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 867;
				this.loopContinueStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 868;
				this.usingStatement();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 869;
				this.checkStatement();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 870;
				this.reportStatement();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 871;
				this.functionStatement();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 872;
				this.variableStatement();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 873;
				this.variableDeclaredStatement();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 874;
				this.channelAssignStatement();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 875;
				this.assignStatement();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 876;
				this.expressionStatement();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 877;
				this.match(LiteParser.New_Line);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judgeCaseStatement(): JudgeCaseStatementContext {
		let _localctx: JudgeCaseStatementContext = new JudgeCaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, LiteParser.RULE_judgeCaseStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 880;
			this.expression(0);
			this.state = 881;
			this.match(LiteParser.Question);
			this.state = 883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 882;
				this.caseStatement();
				}
				}
				this.state = 885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Colon - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)) | (1 << (LiteParser.TypeI64 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0));
			this.state = 887;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseDefaultStatement(): CaseDefaultStatementContext {
		let _localctx: CaseDefaultStatementContext = new CaseDefaultStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, LiteParser.RULE_caseDefaultStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 889;
			this.match(LiteParser.Discard);
			this.state = 890;
			this.left_brace();
			this.state = 894;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 891;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 896;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			}
			this.state = 897;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseExprStatement(): CaseExprStatementContext {
		let _localctx: CaseExprStatementContext = new CaseExprStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, LiteParser.RULE_caseExprStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 905;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 899;
				this.expression(0);
				}
				break;

			case 2:
				{
				this.state = 901;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (LiteParser.TypeI8 - 61)) | (1 << (LiteParser.TypeU8 - 61)) | (1 << (LiteParser.TypeI16 - 61)) | (1 << (LiteParser.TypeU16 - 61)) | (1 << (LiteParser.TypeI32 - 61)) | (1 << (LiteParser.TypeU32 - 61)) | (1 << (LiteParser.TypeI64 - 61)) | (1 << (LiteParser.TypeU64 - 61)) | (1 << (LiteParser.TypeF32 - 61)) | (1 << (LiteParser.TypeF64 - 61)) | (1 << (LiteParser.TypeChr - 61)) | (1 << (LiteParser.TypeStr - 61)) | (1 << (LiteParser.TypeBool - 61)) | (1 << (LiteParser.TypeInt - 61)) | (1 << (LiteParser.TypeNum - 61)) | (1 << (LiteParser.TypeByte - 61)) | (1 << (LiteParser.TypeAny - 61)) | (1 << (LiteParser.IDPrivate - 61)) | (1 << (LiteParser.IDPublic - 61)))) !== 0)) {
					{
					this.state = 900;
					this.id();
					}
				}

				this.state = 903;
				this.match(LiteParser.Colon);
				this.state = 904;
				this.typeType();
				}
				break;
			}
			this.state = 907;
			this.left_brace();
			this.state = 911;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 908;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 913;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			}
			this.state = 914;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public caseStatement(): CaseStatementContext {
		let _localctx: CaseStatementContext = new CaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, LiteParser.RULE_caseStatement);
		try {
			this.state = 918;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 916;
				this.caseDefaultStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 917;
				this.caseExprStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judgeStatement(): JudgeStatementContext {
		let _localctx: JudgeStatementContext = new JudgeStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, LiteParser.RULE_judgeStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 939;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 920;
				this.judgeIfStatement();
				this.state = 924;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 921;
						this.judgeElseIfStatement();
						}
						}
					}
					this.state = 926;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
				}
				this.state = 927;
				this.judgeElseStatement();
				this.state = 928;
				this.end();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 930;
				this.judgeIfStatement();
				this.state = 934;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)) | (1 << (LiteParser.TypeI64 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
					{
					{
					this.state = 931;
					this.judgeElseIfStatement();
					}
					}
					this.state = 936;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 937;
				this.end();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judgeElseStatement(): JudgeElseStatementContext {
		let _localctx: JudgeElseStatementContext = new JudgeElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, LiteParser.RULE_judgeElseStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 941;
			this.match(LiteParser.Discard);
			this.state = 942;
			this.left_brace();
			this.state = 946;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 943;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 948;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			}
			this.state = 949;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judgeIfStatement(): JudgeIfStatementContext {
		let _localctx: JudgeIfStatementContext = new JudgeIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, LiteParser.RULE_judgeIfStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 951;
			this.match(LiteParser.Question);
			this.state = 952;
			this.expression(0);
			this.state = 953;
			this.left_brace();
			this.state = 957;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 954;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 959;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
			}
			this.state = 960;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judgeElseIfStatement(): JudgeElseIfStatementContext {
		let _localctx: JudgeElseIfStatementContext = new JudgeElseIfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, LiteParser.RULE_judgeElseIfStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 962;
			this.expression(0);
			this.state = 963;
			this.left_brace();
			this.state = 967;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 964;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 969;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			this.state = 970;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopStatement(): LoopStatementContext {
		let _localctx: LoopStatementContext = new LoopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, LiteParser.RULE_loopStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 972;
			this.iteratorStatement();
			this.state = 973;
			this.match(LiteParser.At);
			this.state = 974;
			this.id();
			this.state = 975;
			this.left_brace();
			this.state = 979;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 976;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 981;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			}
			this.state = 982;
			this.right_brace();
			this.state = 983;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopEachStatement(): LoopEachStatementContext {
		let _localctx: LoopEachStatementContext = new LoopEachStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, LiteParser.RULE_loopEachStatement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 985;
			this.expression(0);
			this.state = 986;
			this.match(LiteParser.At);
			this.state = 991;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Brack) {
				{
				this.state = 987;
				this.match(LiteParser.Left_Brack);
				this.state = 988;
				this.id();
				this.state = 989;
				this.match(LiteParser.Right_Brack);
				}
			}

			this.state = 993;
			this.id();
			this.state = 994;
			this.left_brace();
			this.state = 998;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 995;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1000;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			}
			this.state = 1001;
			this.right_brace();
			this.state = 1002;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopCaseStatement(): LoopCaseStatementContext {
		let _localctx: LoopCaseStatementContext = new LoopCaseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, LiteParser.RULE_loopCaseStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1004;
			this.match(LiteParser.At);
			this.state = 1005;
			this.expression(0);
			this.state = 1006;
			this.left_brace();
			this.state = 1010;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1007;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1012;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			}
			this.state = 1013;
			this.right_brace();
			this.state = 1014;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopInfiniteStatement(): LoopInfiniteStatementContext {
		let _localctx: LoopInfiniteStatementContext = new LoopInfiniteStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, LiteParser.RULE_loopInfiniteStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1016;
			this.match(LiteParser.At);
			this.state = 1017;
			this.left_brace();
			this.state = 1021;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1018;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1023;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 99, this._ctx);
			}
			this.state = 1024;
			this.right_brace();
			this.state = 1025;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopJumpStatement(): LoopJumpStatementContext {
		let _localctx: LoopJumpStatementContext = new LoopJumpStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, LiteParser.RULE_loopJumpStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1027;
			this.match(LiteParser.Left_Arrow);
			this.state = 1028;
			this.match(LiteParser.At);
			this.state = 1029;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopContinueStatement(): LoopContinueStatementContext {
		let _localctx: LoopContinueStatementContext = new LoopContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, LiteParser.RULE_loopContinueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1031;
			this.match(LiteParser.Right_Arrow);
			this.state = 1032;
			this.match(LiteParser.At);
			this.state = 1033;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public checkStatement(): CheckStatementContext {
		let _localctx: CheckStatementContext = new CheckStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, LiteParser.RULE_checkStatement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1069;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1035;
				this.match(LiteParser.Bang);
				this.state = 1036;
				this.left_brace();
				this.state = 1040;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1037;
						this.functionSupportStatement();
						}
						}
					}
					this.state = 1042;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 100, this._ctx);
				}
				this.state = 1043;
				this.right_brace();
				this.state = 1047;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (LiteParser.TypeI8 - 61)) | (1 << (LiteParser.TypeU8 - 61)) | (1 << (LiteParser.TypeI16 - 61)) | (1 << (LiteParser.TypeU16 - 61)) | (1 << (LiteParser.TypeI32 - 61)) | (1 << (LiteParser.TypeU32 - 61)) | (1 << (LiteParser.TypeI64 - 61)) | (1 << (LiteParser.TypeU64 - 61)) | (1 << (LiteParser.TypeF32 - 61)) | (1 << (LiteParser.TypeF64 - 61)) | (1 << (LiteParser.TypeChr - 61)) | (1 << (LiteParser.TypeStr - 61)) | (1 << (LiteParser.TypeBool - 61)) | (1 << (LiteParser.TypeInt - 61)) | (1 << (LiteParser.TypeNum - 61)) | (1 << (LiteParser.TypeByte - 61)) | (1 << (LiteParser.TypeAny - 61)) | (1 << (LiteParser.IDPrivate - 61)) | (1 << (LiteParser.IDPublic - 61)))) !== 0)) {
					{
					{
					this.state = 1044;
					this.checkErrorStatement();
					}
					}
					this.state = 1049;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1050;
				this.checkFinallyStatment();
				this.state = 1051;
				this.end();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1053;
				this.match(LiteParser.Bang);
				this.state = 1054;
				this.left_brace();
				this.state = 1058;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1055;
						this.functionSupportStatement();
						}
						}
					}
					this.state = 1060;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 102, this._ctx);
				}
				this.state = 1061;
				this.right_brace();
				this.state = 1063;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1062;
					this.checkErrorStatement();
					}
					}
					this.state = 1065;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (LiteParser.TypeI8 - 61)) | (1 << (LiteParser.TypeU8 - 61)) | (1 << (LiteParser.TypeI16 - 61)) | (1 << (LiteParser.TypeU16 - 61)) | (1 << (LiteParser.TypeI32 - 61)) | (1 << (LiteParser.TypeU32 - 61)) | (1 << (LiteParser.TypeI64 - 61)) | (1 << (LiteParser.TypeU64 - 61)) | (1 << (LiteParser.TypeF32 - 61)) | (1 << (LiteParser.TypeF64 - 61)) | (1 << (LiteParser.TypeChr - 61)) | (1 << (LiteParser.TypeStr - 61)) | (1 << (LiteParser.TypeBool - 61)) | (1 << (LiteParser.TypeInt - 61)) | (1 << (LiteParser.TypeNum - 61)) | (1 << (LiteParser.TypeByte - 61)) | (1 << (LiteParser.TypeAny - 61)) | (1 << (LiteParser.IDPrivate - 61)) | (1 << (LiteParser.IDPublic - 61)))) !== 0));
				this.state = 1067;
				this.end();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public usingStatement(): UsingStatementContext {
		let _localctx: UsingStatementContext = new UsingStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, LiteParser.RULE_usingStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1071;
			this.expression(0);
			this.state = 1072;
			this.match(LiteParser.Bang);
			this.state = 1073;
			this.expression(0);
			this.state = 1076;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Colon) {
				{
				this.state = 1074;
				this.match(LiteParser.Colon);
				this.state = 1075;
				this.typeType();
				}
			}

			this.state = 1078;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public checkErrorStatement(): CheckErrorStatementContext {
		let _localctx: CheckErrorStatementContext = new CheckErrorStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, LiteParser.RULE_checkErrorStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1085;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 1080;
				this.id();
				}
				break;

			case 2:
				{
				this.state = 1081;
				this.id();
				this.state = 1082;
				this.match(LiteParser.Colon);
				this.state = 1083;
				this.typeType();
				}
				break;
			}
			this.state = 1087;
			this.left_brace();
			this.state = 1091;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1088;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1093;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
			}
			this.state = 1094;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public checkFinallyStatment(): CheckFinallyStatmentContext {
		let _localctx: CheckFinallyStatmentContext = new CheckFinallyStatmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, LiteParser.RULE_checkFinallyStatment);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1096;
			this.match(LiteParser.Discard);
			this.state = 1097;
			this.left_brace();
			this.state = 1101;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1098;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1103;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 108, this._ctx);
			}
			this.state = 1104;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reportStatement(): ReportStatementContext {
		let _localctx: ReportStatementContext = new ReportStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, LiteParser.RULE_reportStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1106;
			this.match(LiteParser.Bang);
			this.state = 1107;
			this.left_paren();
			this.state = 1109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)) | (1 << (LiteParser.TypeI64 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 1108;
				this.expression(0);
				}
			}

			this.state = 1111;
			this.right_paren();
			this.state = 1112;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iteratorStatement(): IteratorStatementContext {
		let _localctx: IteratorStatementContext = new IteratorStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, LiteParser.RULE_iteratorStatement);
		let _la: number;
		try {
			this.state = 1128;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1114;
				this.match(LiteParser.Left_Brack);
				this.state = 1115;
				this.expression(0);
				this.state = 1116;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (LiteParser.Less_Equal - 25)) | (1 << (LiteParser.Greater_Equal - 25)) | (1 << (LiteParser.Less - 25)) | (1 << (LiteParser.Greater - 25)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1117;
				this.expression(0);
				this.state = 1118;
				this.more();
				this.state = 1119;
				this.expression(0);
				this.state = 1120;
				this.match(LiteParser.Right_Brack);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1122;
				this.match(LiteParser.Left_Brack);
				this.state = 1123;
				this.expression(0);
				this.state = 1124;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (LiteParser.Less_Equal - 25)) | (1 << (LiteParser.Greater_Equal - 25)) | (1 << (LiteParser.Less - 25)) | (1 << (LiteParser.Greater - 25)))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1125;
				this.expression(0);
				this.state = 1126;
				this.match(LiteParser.Right_Brack);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let _localctx: VariableStatementContext = new VariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, LiteParser.RULE_variableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1130;
			this.expression(0);
			this.state = 1136;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Colon_Equal:
				{
				this.state = 1131;
				this.match(LiteParser.Colon_Equal);
				}
				break;
			case LiteParser.Colon:
				{
				this.state = 1132;
				this.match(LiteParser.Colon);
				this.state = 1133;
				this.typeType();
				this.state = 1134;
				this.match(LiteParser.Equal);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1138;
			this.expression(0);
			this.state = 1139;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaredStatement(): VariableDeclaredStatementContext {
		let _localctx: VariableDeclaredStatementContext = new VariableDeclaredStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, LiteParser.RULE_variableDeclaredStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1141;
			this.expression(0);
			this.state = 1142;
			this.match(LiteParser.Colon);
			this.state = 1143;
			this.typeType();
			this.state = 1144;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public channelAssignStatement(): ChannelAssignStatementContext {
		let _localctx: ChannelAssignStatementContext = new ChannelAssignStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, LiteParser.RULE_channelAssignStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1146;
			this.expression(0);
			this.state = 1147;
			this.match(LiteParser.Left_Brack);
			this.state = 1148;
			this.match(LiteParser.Left_Arrow);
			this.state = 1149;
			this.match(LiteParser.Right_Brack);
			this.state = 1150;
			this.assign();
			this.state = 1151;
			this.expression(0);
			this.state = 1152;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignStatement(): AssignStatementContext {
		let _localctx: AssignStatementContext = new AssignStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, LiteParser.RULE_assignStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1154;
			this.expression(0);
			this.state = 1155;
			this.assign();
			this.state = 1156;
			this.expression(0);
			this.state = 1157;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, LiteParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1159;
			this.expression(0);
			this.state = 1160;
			this.end();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, LiteParser.RULE_primaryExpression);
		try {
			this.state = 1172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.LinqFrom:
			case LiteParser.LinqBy:
			case LiteParser.LinqSelect:
			case LiteParser.LinqWhere:
			case LiteParser.LinqGroup:
			case LiteParser.LinqInto:
			case LiteParser.LinqOrderby:
			case LiteParser.LinqJoin:
			case LiteParser.LinqLet:
			case LiteParser.LinqIn:
			case LiteParser.LinqOn:
			case LiteParser.LinqEquals:
			case LiteParser.LinqAscending:
			case LiteParser.LinqDescending:
			case LiteParser.TypeI8:
			case LiteParser.TypeU8:
			case LiteParser.TypeI16:
			case LiteParser.TypeU16:
			case LiteParser.TypeI32:
			case LiteParser.TypeU32:
			case LiteParser.TypeI64:
			case LiteParser.TypeU64:
			case LiteParser.TypeF32:
			case LiteParser.TypeF64:
			case LiteParser.TypeChr:
			case LiteParser.TypeStr:
			case LiteParser.TypeBool:
			case LiteParser.TypeInt:
			case LiteParser.TypeNum:
			case LiteParser.TypeByte:
			case LiteParser.TypeAny:
			case LiteParser.IDPrivate:
			case LiteParser.IDPublic:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1162;
				this.id();
				this.state = 1164;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
				case 1:
					{
					this.state = 1163;
					this.templateCall();
					}
					break;
				}
				}
				break;
			case LiteParser.Discard:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1166;
				_localctx._t = this.match(LiteParser.Discard);
				}
				break;
			case LiteParser.Left_Paren:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1167;
				this.left_paren();
				this.state = 1168;
				this.expression(0);
				this.state = 1169;
				this.right_paren();
				}
				break;
			case LiteParser.NilLiteral:
			case LiteParser.TrueLiteral:
			case LiteParser.FalseLiteral:
			case LiteParser.UndefinedLiteral:
			case LiteParser.NumberLiteral:
			case LiteParser.TextLiteral:
			case LiteParser.CharLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1171;
				this.dataStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 132;
		this.enterRecursionRule(_localctx, 132, LiteParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1194;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1175;
				this.linq();
				}
				break;

			case 2:
				{
				this.state = 1176;
				this.callFunc();
				}
				break;

			case 3:
				{
				this.state = 1177;
				this.primaryExpression();
				}
				break;

			case 4:
				{
				this.state = 1178;
				this.callChannel();
				}
				break;

			case 5:
				{
				this.state = 1179;
				this.callElement();
				}
				break;

			case 6:
				{
				this.state = 1180;
				this.callNew();
				}
				break;

			case 7:
				{
				this.state = 1181;
				this.callPkg();
				}
				break;

			case 8:
				{
				this.state = 1182;
				this.getType();
				}
				break;

			case 9:
				{
				this.state = 1183;
				this.callAwait();
				}
				break;

			case 10:
				{
				this.state = 1184;
				this.list();
				}
				break;

			case 11:
				{
				this.state = 1185;
				this.set();
				}
				break;

			case 12:
				{
				this.state = 1186;
				this.dictionary();
				}
				break;

			case 13:
				{
				this.state = 1187;
				this.lambda();
				}
				break;

			case 14:
				{
				this.state = 1188;
				this.functionExpression();
				}
				break;

			case 15:
				{
				this.state = 1189;
				this.pkgAnonymous();
				}
				break;

			case 16:
				{
				this.state = 1190;
				this.tupleExpression();
				}
				break;

			case 17:
				{
				this.state = 1191;
				this.plusMinus();
				}
				break;

			case 18:
				{
				this.state = 1192;
				this.negate();
				}
				break;

			case 19:
				{
				this.state = 1193;
				this.stringExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1230;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 1228;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 115, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1196;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 1197;
						this.judge();
						this.state = 1198;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1200;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 1201;
						this.add();
						this.state = 1202;
						this.expression(5);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1204;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 1205;
						this.mul();
						this.state = 1206;
						this.expression(4);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1208;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 1209;
						this.pow();
						this.state = 1210;
						this.expression(3);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1212;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 1213;
						_localctx._op = this.match(LiteParser.Bang);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1214;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 1215;
						_localctx._op = this.match(LiteParser.Question);
						}
						break;

					case 7:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1216;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 1217;
						_localctx._op = this.match(LiteParser.Left_Flow);
						}
						break;

					case 8:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1218;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 1219;
						this.typeConversion();
						}
						break;

					case 9:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1220;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 1221;
						this.call();
						this.state = 1222;
						this.callExpression(0);
						}
						break;

					case 10:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_expression);
						this.state = 1224;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 1225;
						this.judgeType();
						this.state = 1226;
						this.typeType();
						}
						break;
					}
					}
				}
				this.state = 1232;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public callExpression(): CallExpressionContext;
	public callExpression(_p: number): CallExpressionContext;
	// @RuleVersion(0)
	public callExpression(_p?: number): CallExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: CallExpressionContext = new CallExpressionContext(this._ctx, _parentState);
		let _prevctx: CallExpressionContext = _localctx;
		let _startState: number = 134;
		this.enterRecursionRule(_localctx, 134, LiteParser.RULE_callExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1238;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
			case 1:
				{
				this.state = 1234;
				this.callElement();
				}
				break;

			case 2:
				{
				this.state = 1235;
				this.callFunc();
				}
				break;

			case 3:
				{
				this.state = 1236;
				this.callPkg();
				}
				break;

			case 4:
				{
				this.state = 1237;
				this.id();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 1249;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new CallExpressionContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, LiteParser.RULE_callExpression);
					this.state = 1240;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 1241;
					this.call();
					this.state = 1243;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === LiteParser.New_Line) {
						{
						this.state = 1242;
						this.match(LiteParser.New_Line);
						}
					}

					this.state = 1245;
					this.callExpression(2);
					}
					}
				}
				this.state = 1251;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple(): TupleContext {
		let _localctx: TupleContext = new TupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, LiteParser.RULE_tuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1252;
			this.left_paren();
			this.state = 1262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)) | (1 << (LiteParser.TypeI64 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 1253;
				this.expression(0);
				this.state = 1259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LiteParser.Comma) {
					{
					{
					this.state = 1254;
					this.more();
					this.state = 1255;
					this.expression(0);
					}
					}
					this.state = 1261;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1264;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionList(): ExpressionListContext {
		let _localctx: ExpressionListContext = new ExpressionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, LiteParser.RULE_expressionList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1266;
			this.expression(0);
			this.state = 1272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1267;
				this.more();
				this.state = 1268;
				this.expression(0);
				}
				}
				this.state = 1274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationSupport(): AnnotationSupportContext {
		let _localctx: AnnotationSupportContext = new AnnotationSupportContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, LiteParser.RULE_annotationSupport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1275;
			this.annotation();
			this.state = 1277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1276;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let _localctx: AnnotationContext = new AnnotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, LiteParser.RULE_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1279;
			this.match(LiteParser.Left_Brack);
			this.state = 1283;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				{
				this.state = 1280;
				this.id();
				this.state = 1281;
				this.match(LiteParser.Right_Arrow);
				}
				break;
			}
			this.state = 1285;
			this.annotationList();
			this.state = 1286;
			this.match(LiteParser.Right_Brack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationList(): AnnotationListContext {
		let _localctx: AnnotationListContext = new AnnotationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, LiteParser.RULE_annotationList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1288;
			this.annotationItem();
			this.state = 1294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1289;
				this.more();
				this.state = 1290;
				this.annotationItem();
				}
				}
				this.state = 1296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationItem(): AnnotationItemContext {
		let _localctx: AnnotationItemContext = new AnnotationItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, LiteParser.RULE_annotationItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1297;
			this.id();
			this.state = 1310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Left_Paren) {
				{
				this.state = 1298;
				this.left_paren();
				this.state = 1299;
				this.annotationAssign();
				this.state = 1305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LiteParser.Comma) {
					{
					{
					this.state = 1300;
					this.more();
					this.state = 1301;
					this.annotationAssign();
					}
					}
					this.state = 1307;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1308;
				this.right_paren();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public annotationAssign(): AnnotationAssignContext {
		let _localctx: AnnotationAssignContext = new AnnotationAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, LiteParser.RULE_annotationAssign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 128, this._ctx) ) {
			case 1:
				{
				this.state = 1312;
				this.id();
				this.state = 1313;
				this.match(LiteParser.Equal);
				}
				break;
			}
			this.state = 1317;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callFunc(): CallFuncContext {
		let _localctx: CallFuncContext = new CallFuncContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, LiteParser.RULE_callFunc);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1319;
			this.id();
			this.state = 1321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Less) {
				{
				this.state = 1320;
				this.templateCall();
				}
			}

			this.state = 1325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.Left_Paren:
				{
				this.state = 1323;
				this.tuple();
				}
				break;
			case LiteParser.Left_Brace:
				{
				this.state = 1324;
				this.lambda();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callChannel(): CallChannelContext {
		let _localctx: CallChannelContext = new CallChannelContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, LiteParser.RULE_callChannel);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1327;
			this.id();
			this.state = 1329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Question) {
				{
				this.state = 1328;
				_localctx._op = this.match(LiteParser.Question);
				}
			}

			this.state = 1331;
			this.match(LiteParser.Left_Brack);
			this.state = 1332;
			this.match(LiteParser.Left_Arrow);
			this.state = 1333;
			this.match(LiteParser.Right_Brack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callElement(): CallElementContext {
		let _localctx: CallElementContext = new CallElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, LiteParser.RULE_callElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1335;
			this.id();
			this.state = 1337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Question) {
				{
				this.state = 1336;
				_localctx._op = this.match(LiteParser.Question);
				}
			}

			this.state = 1339;
			this.match(LiteParser.Left_Brack);
			this.state = 1342;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				this.state = 1340;
				this.slice();
				}
				break;

			case 2:
				{
				this.state = 1341;
				this.expression(0);
				}
				break;
			}
			this.state = 1344;
			this.match(LiteParser.Right_Brack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callPkg(): CallPkgContext {
		let _localctx: CallPkgContext = new CallPkgContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, LiteParser.RULE_callPkg);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1346;
			this.typeType();
			this.state = 1347;
			this.left_brace();
			this.state = 1352;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1348;
				this.pkgAssign();
				}
				break;

			case 2:
				{
				this.state = 1349;
				this.listAssign();
				}
				break;

			case 3:
				{
				this.state = 1350;
				this.setAssign();
				}
				break;

			case 4:
				{
				this.state = 1351;
				this.dictionaryAssign();
				}
				break;
			}
			this.state = 1354;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callNew(): CallNewContext {
		let _localctx: CallNewContext = new CallNewContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, LiteParser.RULE_callNew);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1356;
			this.match(LiteParser.Less);
			this.state = 1357;
			this.typeType();
			this.state = 1358;
			this.match(LiteParser.Greater);
			this.state = 1359;
			this.left_paren();
			this.state = 1361;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1360;
				this.match(LiteParser.New_Line);
				}
				break;
			}
			this.state = 1364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)) | (1 << (LiteParser.TypeI64 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 1363;
				this.expressionList();
				}
			}

			this.state = 1367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1366;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1369;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getType(): GetTypeContext {
		let _localctx: GetTypeContext = new GetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, LiteParser.RULE_getType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1371;
			this.match(LiteParser.Question);
			this.state = 1372;
			this.left_paren();
			this.state = 1376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.LinqFrom:
			case LiteParser.LinqBy:
			case LiteParser.LinqSelect:
			case LiteParser.LinqWhere:
			case LiteParser.LinqGroup:
			case LiteParser.LinqInto:
			case LiteParser.LinqOrderby:
			case LiteParser.LinqJoin:
			case LiteParser.LinqLet:
			case LiteParser.LinqIn:
			case LiteParser.LinqOn:
			case LiteParser.LinqEquals:
			case LiteParser.LinqAscending:
			case LiteParser.LinqDescending:
			case LiteParser.Left_Flow:
			case LiteParser.Less:
			case LiteParser.Left_Paren:
			case LiteParser.Left_Brace:
			case LiteParser.Left_Brack:
			case LiteParser.Question:
			case LiteParser.Bang:
			case LiteParser.Wave:
			case LiteParser.Add:
			case LiteParser.Sub:
			case LiteParser.TypeI8:
			case LiteParser.TypeU8:
			case LiteParser.TypeI16:
			case LiteParser.TypeU16:
			case LiteParser.TypeI32:
			case LiteParser.TypeU32:
			case LiteParser.TypeI64:
			case LiteParser.TypeU64:
			case LiteParser.TypeF32:
			case LiteParser.TypeF64:
			case LiteParser.TypeChr:
			case LiteParser.TypeStr:
			case LiteParser.TypeBool:
			case LiteParser.TypeInt:
			case LiteParser.TypeNum:
			case LiteParser.TypeByte:
			case LiteParser.TypeAny:
			case LiteParser.NilLiteral:
			case LiteParser.TrueLiteral:
			case LiteParser.FalseLiteral:
			case LiteParser.UndefinedLiteral:
			case LiteParser.NumberLiteral:
			case LiteParser.TextLiteral:
			case LiteParser.CharLiteral:
			case LiteParser.IDPrivate:
			case LiteParser.IDPublic:
			case LiteParser.Discard:
				{
				this.state = 1373;
				this.expression(0);
				}
				break;
			case LiteParser.Colon:
				{
				this.state = 1374;
				this.match(LiteParser.Colon);
				this.state = 1375;
				this.typeType();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1378;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeConversion(): TypeConversionContext {
		let _localctx: TypeConversionContext = new TypeConversionContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, LiteParser.RULE_typeConversion);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1380;
			this.match(LiteParser.Colon);
			this.state = 1381;
			this.left_paren();
			this.state = 1382;
			this.typeType();
			this.state = 1383;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pkgAssign(): PkgAssignContext {
		let _localctx: PkgAssignContext = new PkgAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, LiteParser.RULE_pkgAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1385;
			this.pkgAssignElement();
			this.state = 1391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1386;
				this.more();
				this.state = 1387;
				this.pkgAssignElement();
				}
				}
				this.state = 1393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pkgAssignElement(): PkgAssignElementContext {
		let _localctx: PkgAssignElementContext = new PkgAssignElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, LiteParser.RULE_pkgAssignElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1394;
			this.name();
			this.state = 1395;
			this.match(LiteParser.Equal);
			this.state = 1396;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listAssign(): ListAssignContext {
		let _localctx: ListAssignContext = new ListAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, LiteParser.RULE_listAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1398;
			this.expression(0);
			this.state = 1404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1399;
				this.more();
				this.state = 1400;
				this.expression(0);
				}
				}
				this.state = 1406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setAssign(): SetAssignContext {
		let _localctx: SetAssignContext = new SetAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, LiteParser.RULE_setAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1407;
			this.match(LiteParser.Left_Brack);
			this.state = 1408;
			this.expression(0);
			this.state = 1409;
			this.match(LiteParser.Right_Brack);
			this.state = 1417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1410;
				this.more();
				this.state = 1411;
				this.match(LiteParser.Left_Brack);
				this.state = 1412;
				this.expression(0);
				this.state = 1413;
				this.match(LiteParser.Right_Brack);
				}
				}
				this.state = 1419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictionaryAssign(): DictionaryAssignContext {
		let _localctx: DictionaryAssignContext = new DictionaryAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, LiteParser.RULE_dictionaryAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1420;
			this.dictionaryElement();
			this.state = 1426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1421;
				this.more();
				this.state = 1422;
				this.dictionaryElement();
				}
				}
				this.state = 1428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public callAwait(): CallAwaitContext {
		let _localctx: CallAwaitContext = new CallAwaitContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, LiteParser.RULE_callAwait);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1429;
			this.match(LiteParser.Left_Flow);
			this.state = 1430;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, LiteParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1432;
			this.left_brace();
			this.state = 1433;
			this.expression(0);
			this.state = 1439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1434;
				this.more();
				this.state = 1435;
				this.expression(0);
				}
				}
				this.state = 1441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1442;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, LiteParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1444;
			this.left_brace();
			this.state = 1445;
			this.match(LiteParser.Left_Brack);
			this.state = 1446;
			this.expression(0);
			this.state = 1447;
			this.match(LiteParser.Right_Brack);
			this.state = 1455;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1448;
				this.more();
				this.state = 1449;
				this.match(LiteParser.Left_Brack);
				this.state = 1450;
				this.expression(0);
				this.state = 1451;
				this.match(LiteParser.Right_Brack);
				}
				}
				this.state = 1457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1458;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictionary(): DictionaryContext {
		let _localctx: DictionaryContext = new DictionaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, LiteParser.RULE_dictionary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1460;
			this.left_brace();
			this.state = 1461;
			this.dictionaryElement();
			this.state = 1467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1462;
				this.more();
				this.state = 1463;
				this.dictionaryElement();
				}
				}
				this.state = 1469;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1470;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictionaryElement(): DictionaryElementContext {
		let _localctx: DictionaryElementContext = new DictionaryElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, LiteParser.RULE_dictionaryElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1472;
			this.match(LiteParser.Left_Brack);
			this.state = 1473;
			this.expression(0);
			this.state = 1474;
			this.match(LiteParser.Right_Brack);
			this.state = 1475;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public slice(): SliceContext {
		let _localctx: SliceContext = new SliceContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, LiteParser.RULE_slice);
		try {
			this.state = 1480;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 146, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1477;
				this.sliceFull();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1478;
				this.sliceStart();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1479;
				this.sliceEnd();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceFull(): SliceFullContext {
		let _localctx: SliceFullContext = new SliceFullContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, LiteParser.RULE_sliceFull);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1482;
			this.expression(0);
			this.state = 1483;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (LiteParser.Less_Equal - 25)) | (1 << (LiteParser.Greater_Equal - 25)) | (1 << (LiteParser.Less - 25)) | (1 << (LiteParser.Greater - 25)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1484;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceStart(): SliceStartContext {
		let _localctx: SliceStartContext = new SliceStartContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, LiteParser.RULE_sliceStart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1486;
			this.expression(0);
			this.state = 1487;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (LiteParser.Less_Equal - 25)) | (1 << (LiteParser.Greater_Equal - 25)) | (1 << (LiteParser.Less - 25)) | (1 << (LiteParser.Greater - 25)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sliceEnd(): SliceEndContext {
		let _localctx: SliceEndContext = new SliceEndContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, LiteParser.RULE_sliceEnd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1489;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & ((1 << (LiteParser.Less_Equal - 25)) | (1 << (LiteParser.Greater_Equal - 25)) | (1 << (LiteParser.Less - 25)) | (1 << (LiteParser.Greater - 25)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1490;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameSpaceItem(): NameSpaceItemContext {
		let _localctx: NameSpaceItemContext = new NameSpaceItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, LiteParser.RULE_nameSpaceItem);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1499;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1492;
					this.id();
					this.state = 1493;
					this.call();
					this.state = 1495;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === LiteParser.New_Line) {
						{
						this.state = 1494;
						this.match(LiteParser.New_Line);
						}
					}

					}
					}
				}
				this.state = 1501;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
			}
			this.state = 1502;
			this.id();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, LiteParser.RULE_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1504;
			this.id();
			this.state = 1513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Dot) {
				{
				{
				this.state = 1505;
				this.call();
				this.state = 1507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === LiteParser.New_Line) {
					{
					this.state = 1506;
					this.match(LiteParser.New_Line);
					}
				}

				this.state = 1509;
				this.id();
				}
				}
				this.state = 1515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateDefine(): TemplateDefineContext {
		let _localctx: TemplateDefineContext = new TemplateDefineContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, LiteParser.RULE_templateDefine);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1516;
			this.match(LiteParser.Less);
			this.state = 1517;
			this.templateDefineItem();
			this.state = 1523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1518;
				this.more();
				this.state = 1519;
				this.templateDefineItem();
				}
				}
				this.state = 1525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1526;
			this.match(LiteParser.Greater);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateDefineItem(): TemplateDefineItemContext {
		let _localctx: TemplateDefineItemContext = new TemplateDefineItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, LiteParser.RULE_templateDefineItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1528;
			this.id();
			this.state = 1531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.Colon) {
				{
				this.state = 1529;
				this.match(LiteParser.Colon);
				this.state = 1530;
				this.id();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public templateCall(): TemplateCallContext {
		let _localctx: TemplateCallContext = new TemplateCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, LiteParser.RULE_templateCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1533;
			this.match(LiteParser.Less);
			this.state = 1534;
			this.typeType();
			this.state = 1540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1535;
				this.more();
				this.state = 1536;
				this.typeType();
				}
				}
				this.state = 1542;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1543;
			this.match(LiteParser.Greater);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambda(): LambdaContext {
		let _localctx: LambdaContext = new LambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, LiteParser.RULE_lambda);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 159, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1545;
				this.left_brace();
				this.state = 1547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (LiteParser.TypeI8 - 61)) | (1 << (LiteParser.TypeU8 - 61)) | (1 << (LiteParser.TypeI16 - 61)) | (1 << (LiteParser.TypeU16 - 61)) | (1 << (LiteParser.TypeI32 - 61)) | (1 << (LiteParser.TypeU32 - 61)) | (1 << (LiteParser.TypeI64 - 61)) | (1 << (LiteParser.TypeU64 - 61)) | (1 << (LiteParser.TypeF32 - 61)) | (1 << (LiteParser.TypeF64 - 61)) | (1 << (LiteParser.TypeChr - 61)) | (1 << (LiteParser.TypeStr - 61)) | (1 << (LiteParser.TypeBool - 61)) | (1 << (LiteParser.TypeInt - 61)) | (1 << (LiteParser.TypeNum - 61)) | (1 << (LiteParser.TypeByte - 61)) | (1 << (LiteParser.TypeAny - 61)) | (1 << (LiteParser.IDPrivate - 61)) | (1 << (LiteParser.IDPublic - 61)))) !== 0)) {
					{
					this.state = 1546;
					this.lambdaIn();
					}
				}

				this.state = 1549;
				_localctx._t = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
					_localctx._t = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1553;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === LiteParser.New_Line) {
					{
					{
					this.state = 1550;
					this.match(LiteParser.New_Line);
					}
					}
					this.state = 1555;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1556;
				this.expressionList();
				this.state = 1557;
				this.right_brace();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1559;
				this.left_brace();
				this.state = 1561;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (LiteParser.TypeI8 - 61)) | (1 << (LiteParser.TypeU8 - 61)) | (1 << (LiteParser.TypeI16 - 61)) | (1 << (LiteParser.TypeU16 - 61)) | (1 << (LiteParser.TypeI32 - 61)) | (1 << (LiteParser.TypeU32 - 61)) | (1 << (LiteParser.TypeI64 - 61)) | (1 << (LiteParser.TypeU64 - 61)) | (1 << (LiteParser.TypeF32 - 61)) | (1 << (LiteParser.TypeF64 - 61)) | (1 << (LiteParser.TypeChr - 61)) | (1 << (LiteParser.TypeStr - 61)) | (1 << (LiteParser.TypeBool - 61)) | (1 << (LiteParser.TypeInt - 61)) | (1 << (LiteParser.TypeNum - 61)) | (1 << (LiteParser.TypeByte - 61)) | (1 << (LiteParser.TypeAny - 61)) | (1 << (LiteParser.IDPrivate - 61)) | (1 << (LiteParser.IDPublic - 61)))) !== 0)) {
					{
					this.state = 1560;
					this.lambdaIn();
					}
				}

				this.state = 1563;
				_localctx._t = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
					_localctx._t = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1567;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1564;
						this.match(LiteParser.New_Line);
						}
						}
					}
					this.state = 1569;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
				}
				this.state = 1573;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1570;
						this.functionSupportStatement();
						}
						}
					}
					this.state = 1575;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 158, this._ctx);
				}
				this.state = 1576;
				this.right_brace();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lambdaIn(): LambdaInContext {
		let _localctx: LambdaInContext = new LambdaInContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, LiteParser.RULE_lambdaIn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1580;
			this.id();
			this.state = 1586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1581;
				this.more();
				this.state = 1582;
				this.id();
				}
				}
				this.state = 1588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pkgAnonymous(): PkgAnonymousContext {
		let _localctx: PkgAnonymousContext = new PkgAnonymousContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, LiteParser.RULE_pkgAnonymous);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1589;
			this.pkgAnonymousAssign();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pkgAnonymousAssign(): PkgAnonymousAssignContext {
		let _localctx: PkgAnonymousAssignContext = new PkgAnonymousAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, LiteParser.RULE_pkgAnonymousAssign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1591;
			this.left_brace();
			this.state = 1592;
			this.pkgAnonymousAssignElement();
			this.state = 1598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1593;
				this.more();
				this.state = 1594;
				this.pkgAnonymousAssignElement();
				}
				}
				this.state = 1600;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1601;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pkgAnonymousAssignElement(): PkgAnonymousAssignElementContext {
		let _localctx: PkgAnonymousAssignElementContext = new PkgAnonymousAssignElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, LiteParser.RULE_pkgAnonymousAssignElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1603;
			this.name();
			this.state = 1604;
			this.match(LiteParser.Equal);
			this.state = 1605;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionExpression(): FunctionExpressionContext {
		let _localctx: FunctionExpressionContext = new FunctionExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, LiteParser.RULE_functionExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1607;
			this.parameterClauseIn();
			this.state = 1608;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 1609;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 1614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1615;
			this.parameterClauseOut();
			this.state = 1616;
			this.left_brace();
			this.state = 1620;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1617;
					this.functionSupportStatement();
					}
					}
				}
				this.state = 1622;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
			}
			this.state = 1623;
			this.right_brace();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tupleExpression(): TupleExpressionContext {
		let _localctx: TupleExpressionContext = new TupleExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, LiteParser.RULE_tupleExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1625;
			this.left_paren();
			this.state = 1626;
			this.expression(0);
			this.state = 1632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1627;
				this.more();
				this.state = 1628;
				this.expression(0);
				}
				}
				this.state = 1634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1635;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public plusMinus(): PlusMinusContext {
		let _localctx: PlusMinusContext = new PlusMinusContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, LiteParser.RULE_plusMinus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1637;
			this.add();
			this.state = 1638;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public negate(): NegateContext {
		let _localctx: NegateContext = new NegateContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, LiteParser.RULE_negate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1640;
			this.wave();
			this.state = 1641;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linq(): LinqContext {
		let _localctx: LinqContext = new LinqContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, LiteParser.RULE_linq);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1643;
			this.linqHeadKeyword();
			this.state = 1645;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1644;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1647;
			this.expression(0);
			this.state = 1648;
			this.match(LiteParser.Right_Arrow);
			this.state = 1650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1649;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1653;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1652;
					this.linqItem();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1655;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1657;
			_localctx._k = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.LinqBy || _la === LiteParser.LinqSelect)) {
				_localctx._k = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1659;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1658;
				this.match(LiteParser.New_Line);
				}
			}

			this.state = 1661;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linqItem(): LinqItemContext {
		let _localctx: LinqItemContext = new LinqItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, LiteParser.RULE_linqItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1663;
			this.linqKeyword();
			this.state = 1665;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LiteParser.Left_Flow - 36)) | (1 << (LiteParser.Less - 36)) | (1 << (LiteParser.Left_Paren - 36)) | (1 << (LiteParser.Left_Brace - 36)) | (1 << (LiteParser.Left_Brack - 36)) | (1 << (LiteParser.Question - 36)) | (1 << (LiteParser.Bang - 36)) | (1 << (LiteParser.Wave - 36)) | (1 << (LiteParser.Add - 36)) | (1 << (LiteParser.Sub - 36)) | (1 << (LiteParser.TypeI8 - 36)) | (1 << (LiteParser.TypeU8 - 36)) | (1 << (LiteParser.TypeI16 - 36)) | (1 << (LiteParser.TypeU16 - 36)) | (1 << (LiteParser.TypeI32 - 36)) | (1 << (LiteParser.TypeU32 - 36)) | (1 << (LiteParser.TypeI64 - 36)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (LiteParser.TypeU64 - 68)) | (1 << (LiteParser.TypeF32 - 68)) | (1 << (LiteParser.TypeF64 - 68)) | (1 << (LiteParser.TypeChr - 68)) | (1 << (LiteParser.TypeStr - 68)) | (1 << (LiteParser.TypeBool - 68)) | (1 << (LiteParser.TypeInt - 68)) | (1 << (LiteParser.TypeNum - 68)) | (1 << (LiteParser.TypeByte - 68)) | (1 << (LiteParser.TypeAny - 68)) | (1 << (LiteParser.NilLiteral - 68)) | (1 << (LiteParser.TrueLiteral - 68)) | (1 << (LiteParser.FalseLiteral - 68)) | (1 << (LiteParser.UndefinedLiteral - 68)) | (1 << (LiteParser.NumberLiteral - 68)) | (1 << (LiteParser.TextLiteral - 68)) | (1 << (LiteParser.CharLiteral - 68)) | (1 << (LiteParser.IDPrivate - 68)) | (1 << (LiteParser.IDPublic - 68)) | (1 << (LiteParser.Discard - 68)))) !== 0)) {
				{
				this.state = 1664;
				this.expression(0);
				}
			}

			this.state = 1667;
			this.match(LiteParser.Right_Arrow);
			this.state = 1669;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1668;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linqKeyword(): LinqKeywordContext {
		let _localctx: LinqKeywordContext = new LinqKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, LiteParser.RULE_linqKeyword);
		try {
			this.state = 1673;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.LinqFrom:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1671;
				this.linqHeadKeyword();
				}
				break;
			case LiteParser.LinqBy:
			case LiteParser.LinqSelect:
			case LiteParser.LinqWhere:
			case LiteParser.LinqGroup:
			case LiteParser.LinqInto:
			case LiteParser.LinqOrderby:
			case LiteParser.LinqJoin:
			case LiteParser.LinqLet:
			case LiteParser.LinqIn:
			case LiteParser.LinqOn:
			case LiteParser.LinqEquals:
			case LiteParser.LinqAscending:
			case LiteParser.LinqDescending:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1672;
				this.linqBodyKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linqHeadKeyword(): LinqHeadKeywordContext {
		let _localctx: LinqHeadKeywordContext = new LinqHeadKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, LiteParser.RULE_linqHeadKeyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1675;
			_localctx._k = this.match(LiteParser.LinqFrom);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linqBodyKeyword(): LinqBodyKeywordContext {
		let _localctx: LinqBodyKeywordContext = new LinqBodyKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, LiteParser.RULE_linqBodyKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1677;
			_localctx._k = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0))) {
				_localctx._k = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringExpression(): StringExpressionContext {
		let _localctx: StringExpressionContext = new StringExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, LiteParser.RULE_stringExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1679;
			this.match(LiteParser.TextLiteral);
			this.state = 1681;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1680;
					this.stringExpressionElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1683;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringExpressionElement(): StringExpressionElementContext {
		let _localctx: StringExpressionElementContext = new StringExpressionElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, LiteParser.RULE_stringExpressionElement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1685;
			this.expression(0);
			this.state = 1686;
			this.match(LiteParser.TextLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataStatement(): DataStatementContext {
		let _localctx: DataStatementContext = new DataStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, LiteParser.RULE_dataStatement);
		try {
			this.state = 1696;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1688;
				this.floatExpr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1689;
				this.integerExpr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1690;
				_localctx._t = this.match(LiteParser.TextLiteral);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1691;
				_localctx._t = this.match(LiteParser.CharLiteral);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1692;
				_localctx._t = this.match(LiteParser.TrueLiteral);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1693;
				_localctx._t = this.match(LiteParser.FalseLiteral);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1694;
				this.nilExpr();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1695;
				_localctx._t = this.match(LiteParser.UndefinedLiteral);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatExpr(): FloatExprContext {
		let _localctx: FloatExprContext = new FloatExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, LiteParser.RULE_floatExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1698;
			this.integerExpr();
			this.state = 1699;
			this.call();
			this.state = 1700;
			this.integerExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerExpr(): IntegerExprContext {
		let _localctx: IntegerExprContext = new IntegerExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, LiteParser.RULE_integerExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1702;
			this.match(LiteParser.NumberLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNotNull(): TypeNotNullContext {
		let _localctx: TypeNotNullContext = new TypeNotNullContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, LiteParser.RULE_typeNotNull);
		try {
			this.state = 1714;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1704;
				this.typeAny();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1705;
				this.typeTuple();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1706;
				this.typeArray();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1707;
				this.typeList();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1708;
				this.typeSet();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1709;
				this.typeDictionary();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1710;
				this.typeChannel();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1711;
				this.typeBasic();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1712;
				this.typePackage();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1713;
				this.typeFunction();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeReference(): TypeReferenceContext {
		let _localctx: TypeReferenceContext = new TypeReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, LiteParser.RULE_typeReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1716;
			this.match(LiteParser.Bang);
			this.state = 1719;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.LinqFrom:
			case LiteParser.LinqBy:
			case LiteParser.LinqSelect:
			case LiteParser.LinqWhere:
			case LiteParser.LinqGroup:
			case LiteParser.LinqInto:
			case LiteParser.LinqOrderby:
			case LiteParser.LinqJoin:
			case LiteParser.LinqLet:
			case LiteParser.LinqIn:
			case LiteParser.LinqOn:
			case LiteParser.LinqEquals:
			case LiteParser.LinqAscending:
			case LiteParser.LinqDescending:
			case LiteParser.Left_Paren:
			case LiteParser.Left_Brack:
			case LiteParser.TypeI8:
			case LiteParser.TypeU8:
			case LiteParser.TypeI16:
			case LiteParser.TypeU16:
			case LiteParser.TypeI32:
			case LiteParser.TypeU32:
			case LiteParser.TypeI64:
			case LiteParser.TypeU64:
			case LiteParser.TypeF32:
			case LiteParser.TypeF64:
			case LiteParser.TypeChr:
			case LiteParser.TypeStr:
			case LiteParser.TypeBool:
			case LiteParser.TypeInt:
			case LiteParser.TypeNum:
			case LiteParser.TypeByte:
			case LiteParser.TypeAny:
			case LiteParser.IDPrivate:
			case LiteParser.IDPublic:
				{
				this.state = 1717;
				this.typeNotNull();
				}
				break;
			case LiteParser.Question:
				{
				this.state = 1718;
				this.typeNullable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeNullable(): TypeNullableContext {
		let _localctx: TypeNullableContext = new TypeNullableContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, LiteParser.RULE_typeNullable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1721;
			this.match(LiteParser.Question);
			this.state = 1722;
			this.typeNotNull();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeType(): TypeTypeContext {
		let _localctx: TypeTypeContext = new TypeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, LiteParser.RULE_typeType);
		try {
			this.state = 1727;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.LinqFrom:
			case LiteParser.LinqBy:
			case LiteParser.LinqSelect:
			case LiteParser.LinqWhere:
			case LiteParser.LinqGroup:
			case LiteParser.LinqInto:
			case LiteParser.LinqOrderby:
			case LiteParser.LinqJoin:
			case LiteParser.LinqLet:
			case LiteParser.LinqIn:
			case LiteParser.LinqOn:
			case LiteParser.LinqEquals:
			case LiteParser.LinqAscending:
			case LiteParser.LinqDescending:
			case LiteParser.Left_Paren:
			case LiteParser.Left_Brack:
			case LiteParser.TypeI8:
			case LiteParser.TypeU8:
			case LiteParser.TypeI16:
			case LiteParser.TypeU16:
			case LiteParser.TypeI32:
			case LiteParser.TypeU32:
			case LiteParser.TypeI64:
			case LiteParser.TypeU64:
			case LiteParser.TypeF32:
			case LiteParser.TypeF64:
			case LiteParser.TypeChr:
			case LiteParser.TypeStr:
			case LiteParser.TypeBool:
			case LiteParser.TypeInt:
			case LiteParser.TypeNum:
			case LiteParser.TypeByte:
			case LiteParser.TypeAny:
			case LiteParser.IDPrivate:
			case LiteParser.IDPublic:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1724;
				this.typeNotNull();
				}
				break;
			case LiteParser.Question:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1725;
				this.typeNullable();
				}
				break;
			case LiteParser.Bang:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1726;
				this.typeReference();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeTuple(): TypeTupleContext {
		let _localctx: TypeTupleContext = new TypeTupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, LiteParser.RULE_typeTuple);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1729;
			this.left_paren();
			this.state = 1730;
			this.typeType();
			this.state = 1734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1731;
				this.more();
				this.state = 1732;
				this.typeType();
				}
				}
				this.state = 1736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LiteParser.Comma);
			this.state = 1738;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeArray(): TypeArrayContext {
		let _localctx: TypeArrayContext = new TypeArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, LiteParser.RULE_typeArray);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1740;
			this.match(LiteParser.Left_Brack);
			this.state = 1741;
			this.match(LiteParser.Colon);
			this.state = 1742;
			this.match(LiteParser.Right_Brack);
			this.state = 1743;
			this.typeType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeList(): TypeListContext {
		let _localctx: TypeListContext = new TypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, LiteParser.RULE_typeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1745;
			this.match(LiteParser.Left_Brack);
			this.state = 1746;
			this.match(LiteParser.Right_Brack);
			this.state = 1747;
			this.typeType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeSet(): TypeSetContext {
		let _localctx: TypeSetContext = new TypeSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, LiteParser.RULE_typeSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1749;
			this.match(LiteParser.Left_Brack);
			this.state = 1750;
			this.typeType();
			this.state = 1751;
			this.match(LiteParser.Right_Brack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeDictionary(): TypeDictionaryContext {
		let _localctx: TypeDictionaryContext = new TypeDictionaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, LiteParser.RULE_typeDictionary);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1753;
			this.match(LiteParser.Left_Brack);
			this.state = 1754;
			this.typeType();
			this.state = 1755;
			this.match(LiteParser.Right_Brack);
			this.state = 1756;
			this.typeType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeChannel(): TypeChannelContext {
		let _localctx: TypeChannelContext = new TypeChannelContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, LiteParser.RULE_typeChannel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1758;
			this.match(LiteParser.Left_Brack);
			this.state = 1759;
			this.match(LiteParser.Right_Arrow);
			this.state = 1760;
			this.match(LiteParser.Right_Brack);
			this.state = 1761;
			this.typeType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typePackage(): TypePackageContext {
		let _localctx: TypePackageContext = new TypePackageContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, LiteParser.RULE_typePackage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1763;
			this.nameSpaceItem();
			this.state = 1765;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1764;
				this.templateCall();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeFunction(): TypeFunctionContext {
		let _localctx: TypeFunctionContext = new TypeFunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, LiteParser.RULE_typeFunction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1767;
			this.typeFunctionParameterClause();
			this.state = 1768;
			_localctx._t = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Right_Arrow || _la === LiteParser.Right_Flow)) {
				_localctx._t = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1772;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 1769;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 1774;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1775;
			this.typeFunctionParameterClause();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeAny(): TypeAnyContext {
		let _localctx: TypeAnyContext = new TypeAnyContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, LiteParser.RULE_typeAny);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1777;
			this.match(LiteParser.TypeAny);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeFunctionParameterClause(): TypeFunctionParameterClauseContext {
		let _localctx: TypeFunctionParameterClauseContext = new TypeFunctionParameterClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, LiteParser.RULE_typeFunctionParameterClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1779;
			this.left_paren();
			this.state = 1781;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.LinqFrom) | (1 << LiteParser.LinqBy) | (1 << LiteParser.LinqSelect) | (1 << LiteParser.LinqWhere) | (1 << LiteParser.LinqGroup) | (1 << LiteParser.LinqInto) | (1 << LiteParser.LinqOrderby) | (1 << LiteParser.LinqJoin) | (1 << LiteParser.LinqLet) | (1 << LiteParser.LinqIn) | (1 << LiteParser.LinqOn) | (1 << LiteParser.LinqEquals) | (1 << LiteParser.LinqAscending) | (1 << LiteParser.LinqDescending))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LiteParser.Left_Paren - 41)) | (1 << (LiteParser.Left_Brack - 41)) | (1 << (LiteParser.Question - 41)) | (1 << (LiteParser.Bang - 41)) | (1 << (LiteParser.TypeI8 - 41)) | (1 << (LiteParser.TypeU8 - 41)) | (1 << (LiteParser.TypeI16 - 41)) | (1 << (LiteParser.TypeU16 - 41)) | (1 << (LiteParser.TypeI32 - 41)) | (1 << (LiteParser.TypeU32 - 41)) | (1 << (LiteParser.TypeI64 - 41)) | (1 << (LiteParser.TypeU64 - 41)) | (1 << (LiteParser.TypeF32 - 41)) | (1 << (LiteParser.TypeF64 - 41)) | (1 << (LiteParser.TypeChr - 41)) | (1 << (LiteParser.TypeStr - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (LiteParser.TypeBool - 73)) | (1 << (LiteParser.TypeInt - 73)) | (1 << (LiteParser.TypeNum - 73)) | (1 << (LiteParser.TypeByte - 73)) | (1 << (LiteParser.TypeAny - 73)) | (1 << (LiteParser.IDPrivate - 73)) | (1 << (LiteParser.IDPublic - 73)))) !== 0)) {
				{
				this.state = 1780;
				this.typeType();
				}
			}

			this.state = 1788;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.Comma) {
				{
				{
				this.state = 1783;
				this.more();
				this.state = 1784;
				this.typeType();
				}
				}
				this.state = 1790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1791;
			this.right_paren();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeBasic(): TypeBasicContext {
		let _localctx: TypeBasicContext = new TypeBasicContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, LiteParser.RULE_typeBasic);
		try {
			this.state = 1809;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.TypeI8:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1793;
				_localctx._t = this.match(LiteParser.TypeI8);
				}
				break;
			case LiteParser.TypeU8:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1794;
				_localctx._t = this.match(LiteParser.TypeU8);
				}
				break;
			case LiteParser.TypeI16:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1795;
				_localctx._t = this.match(LiteParser.TypeI16);
				}
				break;
			case LiteParser.TypeU16:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1796;
				_localctx._t = this.match(LiteParser.TypeU16);
				}
				break;
			case LiteParser.TypeI32:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1797;
				_localctx._t = this.match(LiteParser.TypeI32);
				}
				break;
			case LiteParser.TypeU32:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1798;
				_localctx._t = this.match(LiteParser.TypeU32);
				}
				break;
			case LiteParser.TypeI64:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1799;
				_localctx._t = this.match(LiteParser.TypeI64);
				}
				break;
			case LiteParser.TypeU64:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1800;
				_localctx._t = this.match(LiteParser.TypeU64);
				}
				break;
			case LiteParser.TypeF32:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1801;
				_localctx._t = this.match(LiteParser.TypeF32);
				}
				break;
			case LiteParser.TypeF64:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1802;
				_localctx._t = this.match(LiteParser.TypeF64);
				}
				break;
			case LiteParser.TypeChr:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1803;
				_localctx._t = this.match(LiteParser.TypeChr);
				}
				break;
			case LiteParser.TypeStr:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1804;
				_localctx._t = this.match(LiteParser.TypeStr);
				}
				break;
			case LiteParser.TypeBool:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1805;
				_localctx._t = this.match(LiteParser.TypeBool);
				}
				break;
			case LiteParser.TypeInt:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1806;
				_localctx._t = this.match(LiteParser.TypeInt);
				}
				break;
			case LiteParser.TypeNum:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1807;
				_localctx._t = this.match(LiteParser.TypeNum);
				}
				break;
			case LiteParser.TypeByte:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1808;
				_localctx._t = this.match(LiteParser.TypeByte);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nilExpr(): NilExprContext {
		let _localctx: NilExprContext = new NilExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, LiteParser.RULE_nilExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1811;
			this.match(LiteParser.NilLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public boolExpr(): BoolExprContext {
		let _localctx: BoolExprContext = new BoolExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, LiteParser.RULE_boolExpr);
		try {
			this.state = 1815;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.TrueLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1813;
				_localctx._t = this.match(LiteParser.TrueLiteral);
				}
				break;
			case LiteParser.FalseLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1814;
				_localctx._t = this.match(LiteParser.FalseLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judgeType(): JudgeTypeContext {
		let _localctx: JudgeTypeContext = new JudgeTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, LiteParser.RULE_judgeType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1817;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Equal_Equal || _la === LiteParser.Not_Equal)) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1818;
			this.match(LiteParser.Colon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public judge(): JudgeContext {
		let _localctx: JudgeContext = new JudgeContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, LiteParser.RULE_judge);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1820;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.Equal_Equal) | (1 << LiteParser.Less_Equal) | (1 << LiteParser.Greater_Equal) | (1 << LiteParser.Not_Equal))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (LiteParser.Less - 38)) | (1 << (LiteParser.Greater - 38)) | (1 << (LiteParser.And - 38)) | (1 << (LiteParser.Or - 38)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1821;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign(): AssignContext {
		let _localctx: AssignContext = new AssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, LiteParser.RULE_assign);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1824;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (LiteParser.Add_Equal - 18)) | (1 << (LiteParser.Sub_Equal - 18)) | (1 << (LiteParser.Mul_Equal - 18)) | (1 << (LiteParser.Div_Equal - 18)) | (1 << (LiteParser.Mod_Equal - 18)) | (1 << (LiteParser.Equal - 18)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1825;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public add(): AddContext {
		let _localctx: AddContext = new AddContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, LiteParser.RULE_add);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1828;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Add || _la === LiteParser.Sub)) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1829;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mul(): MulContext {
		let _localctx: MulContext = new MulContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, LiteParser.RULE_mul);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1832;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!(((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (LiteParser.Mul - 55)) | (1 << (LiteParser.Div - 55)) | (1 << (LiteParser.Mod - 55)))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1834;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1833;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pow(): PowContext {
		let _localctx: PowContext = new PowContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, LiteParser.RULE_pow);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1836;
			_localctx._op = this._input.LT(1);
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LiteParser.Pow) | (1 << LiteParser.Root) | (1 << LiteParser.Log))) !== 0))) {
				_localctx._op = this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1838;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LiteParser.New_Line) {
				{
				this.state = 1837;
				this.match(LiteParser.New_Line);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public call(): CallContext {
		let _localctx: CallContext = new CallContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, LiteParser.RULE_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1840;
			_localctx._op = this.match(LiteParser.Dot);
			this.state = 1842;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 189, this._ctx) ) {
			case 1:
				{
				this.state = 1841;
				this.match(LiteParser.New_Line);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wave(): WaveContext {
		let _localctx: WaveContext = new WaveContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, LiteParser.RULE_wave);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1844;
			_localctx._op = this.match(LiteParser.Wave);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, LiteParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1846;
			this.idItem();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idItem(): IdItemContext {
		let _localctx: IdItemContext = new IdItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, LiteParser.RULE_idItem);
		let _la: number;
		try {
			this.state = 1852;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LiteParser.IDPrivate:
			case LiteParser.IDPublic:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1848;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === LiteParser.IDPrivate || _la === LiteParser.IDPublic)) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case LiteParser.TypeI8:
			case LiteParser.TypeU8:
			case LiteParser.TypeI16:
			case LiteParser.TypeU16:
			case LiteParser.TypeI32:
			case LiteParser.TypeU32:
			case LiteParser.TypeI64:
			case LiteParser.TypeU64:
			case LiteParser.TypeF32:
			case LiteParser.TypeF64:
			case LiteParser.TypeChr:
			case LiteParser.TypeStr:
			case LiteParser.TypeBool:
			case LiteParser.TypeInt:
			case LiteParser.TypeNum:
			case LiteParser.TypeByte:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1849;
				this.typeBasic();
				}
				break;
			case LiteParser.TypeAny:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1850;
				this.typeAny();
				}
				break;
			case LiteParser.LinqFrom:
			case LiteParser.LinqBy:
			case LiteParser.LinqSelect:
			case LiteParser.LinqWhere:
			case LiteParser.LinqGroup:
			case LiteParser.LinqInto:
			case LiteParser.LinqOrderby:
			case LiteParser.LinqJoin:
			case LiteParser.LinqLet:
			case LiteParser.LinqIn:
			case LiteParser.LinqOn:
			case LiteParser.LinqEquals:
			case LiteParser.LinqAscending:
			case LiteParser.LinqDescending:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1851;
				this.linqKeyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end(): EndContext {
		let _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, LiteParser.RULE_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1854;
			_la = this._input.LA(1);
			if (!(_la === LiteParser.Semi || _la === LiteParser.New_Line)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public more(): MoreContext {
		let _localctx: MoreContext = new MoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, LiteParser.RULE_more);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1856;
			this.match(LiteParser.Comma);
			this.state = 1860;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 1857;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 1862;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public left_brace(): Left_braceContext {
		let _localctx: Left_braceContext = new Left_braceContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, LiteParser.RULE_left_brace);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1863;
			this.match(LiteParser.Left_Brace);
			this.state = 1867;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1864;
					this.match(LiteParser.New_Line);
					}
					}
				}
				this.state = 1869;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 192, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public right_brace(): Right_braceContext {
		let _localctx: Right_braceContext = new Right_braceContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, LiteParser.RULE_right_brace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1873;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 1870;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 1875;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1876;
			this.match(LiteParser.Right_Brace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public left_paren(): Left_parenContext {
		let _localctx: Left_parenContext = new Left_parenContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, LiteParser.RULE_left_paren);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1878;
			this.match(LiteParser.Left_Paren);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public right_paren(): Right_parenContext {
		let _localctx: Right_parenContext = new Right_parenContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, LiteParser.RULE_right_paren);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1880;
			this.match(LiteParser.Right_Paren);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public left_brack(): Left_brackContext {
		let _localctx: Left_brackContext = new Left_brackContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, LiteParser.RULE_left_brack);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1882;
			this.match(LiteParser.Left_Brack);
			this.state = 1886;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1883;
					this.match(LiteParser.New_Line);
					}
					}
				}
				this.state = 1888;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public right_brack(): Right_brackContext {
		let _localctx: Right_brackContext = new Right_brackContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, LiteParser.RULE_right_brack);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1892;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LiteParser.New_Line) {
				{
				{
				this.state = 1889;
				this.match(LiteParser.New_Line);
				}
				}
				this.state = 1894;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1895;
			this.match(LiteParser.Right_Brack);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 66:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 67:
			return this.callExpression_sempred(_localctx as CallExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);

		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 11);

		case 5:
			return this.precpred(this._ctx, 10);

		case 6:
			return this.precpred(this._ctx, 9);

		case 7:
			return this.precpred(this._ctx, 8);

		case 8:
			return this.precpred(this._ctx, 7);

		case 9:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}
	private callExpression_sempred(_localctx: CallExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03^\u076C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x03\x02\x06\x02\u013A\n\x02\r\x02\x0E\x02" +
		"\u013B\x03\x03\x07\x03\u013F\n\x03\f\x03\x0E\x03\u0142\v\x03\x03\x03\x05" +
		"\x03\u0145\n\x03\x03\x03\x03\x03\x07\x03\u0149\n\x03\f\x03\x0E\x03\u014C" +
		"\v\x03\x03\x03\x07\x03\u014F\n\x03\f\x03\x0E\x03\u0152\v\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04\u0158\n\x04\f\x04\x0E\x04\u015B\v\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x05\x05\u0161\n\x05\x03\x05\x03\x05\x03\x05" +
		"\x05\x05\u0166\n\x05\x05\x05\u0168\n\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x05\x06\u0179\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x05\t\u0186\n\t\x03\t\x03\t\x03" +
		"\t\x07\t\u018B\n\t\f\t\x0E\t\u018E\v\t\x03\t\x03\t\x03\t\x07\t\u0193\n" +
		"\t\f\t\x0E\t\u0196\v\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x05\n\u019E" +
		"\n\n\x03\n\x05\n\u01A1\n\n\x03\n\x03\n\x03\v\x05\v\u01A6\n\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u01AF\n\v\x05\v\u01B1\n\v\x03\v" +
		"\x03\v\x03\f\x05\f\u01B6\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u01BD" +
		"\n\f\x03\f\x03\f\x06\f\u01C1\n\f\r\f\x0E\f\u01C2\x03\f\x03\f\x03\r\x05" +
		"\r\u01C8\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01D0\n\r\x03\r" +
		"\x03\r\x03\r\x03\x0E\x05\x0E\u01D6\n\x0E\x03\x0E\x03\x0E\x05\x0E\u01DA" +
		"\n\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u01DF\n\x0E\f\x0E\x0E\x0E\u01E2" +
		"\v\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u01E7\n\x0E\f\x0E\x0E\x0E\u01EA" +
		"\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x05\x0F\u01F0\n\x0F\x03\x0F\x03" +
		"\x0F\x05\x0F\u01F4\n\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01F9\n\x0F\f" +
		"\x0F\x0E\x0F\u01FC\v\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x05\x10\u0205\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x05" +
		"\x12\u020C\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12" +
		"\u0214\n\x12\x03\x12\x03\x12\x05\x12\u0218\n\x12\x03\x12\x03\x12\x07\x12" +
		"\u021C\n\x12\f\x12\x0E\x12\u021F\v\x12\x03\x12\x03\x12\x03\x13\x05\x13" +
		"\u0224\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05" +
		"\x13\u022D\n\x13\x05\x13\u022F\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x05\x14\u0238\n\x14\x03\x14\x03\x14\x06\x14\u023C" +
		"\n\x14\r\x14\x0E\x14\u023D\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x05\x16\u024D" +
		"\n\x16\x03\x16\x07\x16\u0250\n\x16\f\x16\x0E\x16\u0253\v\x16\x03\x16\x03" +
		"\x16\x07\x16\u0257\n\x16\f\x16\x0E\x16\u025A\v\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x03\x17\x05\x17\u0262\n\x17\x03\x18\x05\x18\u0265" +
		"\n\x18\x03\x18\x05\x18\u0268\n\x18\x03\x18\x03\x18\x05\x18\u026C\n\x18" +
		"\x03\x18\x03\x18\x03\x18\x07\x18\u0271\n\x18\f\x18\x0E\x18\u0274\v\x18" +
		"\x03\x18\x03\x18\x03\x18\x07\x18\u0279\n\x18\f\x18\x0E\x18\u027C\v\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x19\x05\x19\u0282\n\x19\x03\x19\x05\x19\u0285" +
		"\n\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x06\x19\u028C\n\x19\r\x19" +
		"\x0E\x19\u028D\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x07\x1A\u0298\n\x1A\f\x1A\x0E\x1A\u029B\v\x1A\x03\x1A\x03\x1A" +
		"\x07\x1A\u029F\n\x1A\f\x1A\x0E\x1A\u02A2\v\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02AA\n\x1B\x03\x1C\x05\x1C\u02AD\n\x1C" +
		"\x03\x1C\x05\x1C\u02B0\n\x1C\x03\x1C\x03\x1C\x05\x1C\u02B4\n\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x07\x1C\u02B9\n\x1C\f\x1C\x0E\x1C\u02BC\v\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x07\x1C\u02C1\n\x1C\f\x1C\x0E\x1C\u02C4\v\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1D\x05\x1D\u02CA\n\x1D\x03\x1D\x05\x1D\u02CD\n\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x06\x1D\u02D4\n\x1D\r\x1D\x0E" +
		"\x1D\u02D5\x03\x1D\x03\x1D\x03\x1E\x05\x1E\u02DB\n\x1E\x03\x1E\x03\x1E" +
		"\x05\x1E\u02DF\n\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u02E4\n\x1E\f\x1E" +
		"\x0E\x1E\u02E7\v\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x05\x1F\u02F0\n\x1F\x03 \x05 \u02F3\n \x03 \x03 \x03 \x03 \x03 \x03" +
		" \x03 \x07 \u02FC\n \f \x0E \u02FF\v \x03 \x03 \x03!\x03!\x03\"\x05\"" +
		"\u0306\n\"\x03\"\x03\"\x05\"\u030A\n\"\x03\"\x03\"\x03\"\x07\"\u030F\n" +
		"\"\f\"\x0E\"\u0312\v\"\x03\"\x03\"\x03\"\x03#\x03#\x05#\u0319\n#\x03#" +
		"\x03#\x03#\x07#\u031E\n#\f#\x0E#\u0321\v#\x03#\x03#\x03#\x07#\u0326\n" +
		"#\f#\x0E#\u0329\v#\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03%\x03%\x05%\u0334" +
		"\n%\x03%\x03%\x03%\x07%\u0339\n%\f%\x0E%\u033C\v%\x03%\x03%\x03&\x03&" +
		"\x05&\u0342\n&\x03&\x03&\x03&\x07&\u0347\n&\f&\x0E&\u034A\v&\x03&\x03" +
		"&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x05(\u0355\n(\x03(\x03(\x03" +
		"(\x03(\x03(\x05(\u035C\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03" +
		")\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x05)\u0371\n)\x03" +
		"*\x03*\x03*\x06*\u0376\n*\r*\x0E*\u0377\x03*\x03*\x03+\x03+\x03+\x07+" +
		"\u037F\n+\f+\x0E+\u0382\v+\x03+\x03+\x03,\x03,\x05,\u0388\n,\x03,\x03" +
		",\x05,\u038C\n,\x03,\x03,\x07,\u0390\n,\f,\x0E,\u0393\v,\x03,\x03,\x03" +
		"-\x03-\x05-\u0399\n-\x03.\x03.\x07.\u039D\n.\f.\x0E.\u03A0\v.\x03.\x03" +
		".\x03.\x03.\x03.\x07.\u03A7\n.\f.\x0E.\u03AA\v.\x03.\x03.\x05.\u03AE\n" +
		".\x03/\x03/\x03/\x07/\u03B3\n/\f/\x0E/\u03B6\v/\x03/\x03/\x030\x030\x03" +
		"0\x030\x070\u03BE\n0\f0\x0E0\u03C1\v0\x030\x030\x031\x031\x031\x071\u03C8" +
		"\n1\f1\x0E1\u03CB\v1\x031\x031\x032\x032\x032\x032\x032\x072\u03D4\n2" +
		"\f2\x0E2\u03D7\v2\x032\x032\x032\x033\x033\x033\x033\x033\x033\x053\u03E2" +
		"\n3\x033\x033\x033\x073\u03E7\n3\f3\x0E3\u03EA\v3\x033\x033\x033\x034" +
		"\x034\x034\x034\x074\u03F3\n4\f4\x0E4\u03F6\v4\x034\x034\x034\x035\x03" +
		"5\x035\x075\u03FE\n5\f5\x0E5\u0401\v5\x035\x035\x035\x036\x036\x036\x03" +
		"6\x037\x037\x037\x037\x038\x038\x038\x078\u0411\n8\f8\x0E8\u0414\v8\x03" +
		"8\x038\x078\u0418\n8\f8\x0E8\u041B\v8\x038\x038\x038\x038\x038\x038\x07" +
		"8\u0423\n8\f8\x0E8\u0426\v8\x038\x038\x068\u042A\n8\r8\x0E8\u042B\x03" +
		"8\x038\x058\u0430\n8\x039\x039\x039\x039\x039\x059\u0437\n9\x039\x039" +
		"\x03:\x03:\x03:\x03:\x03:\x05:\u0440\n:\x03:\x03:\x07:\u0444\n:\f:\x0E" +
		":\u0447\v:\x03:\x03:\x03;\x03;\x03;\x07;\u044E\n;\f;\x0E;\u0451\v;\x03" +
		";\x03;\x03<\x03<\x03<\x05<\u0458\n<\x03<\x03<\x03<\x03=\x03=\x03=\x03" +
		"=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u046B\n=\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x05>\u0473\n>\x03>\x03>\x03>\x03?\x03?\x03" +
		"?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03" +
		"A\x03A\x03B\x03B\x03B\x03C\x03C\x05C\u048F\nC\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x05C\u0497\nC\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u04AD\nD\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03" +
		"D\x03D\x03D\x03D\x07D\u04CF\nD\fD\x0ED\u04D2\vD\x03E\x03E\x03E\x03E\x03" +
		"E\x05E\u04D9\nE\x03E\x03E\x03E\x05E\u04DE\nE\x03E\x03E\x07E\u04E2\nE\f" +
		"E\x0EE\u04E5\vE\x03F\x03F\x03F\x03F\x03F\x07F\u04EC\nF\fF\x0EF\u04EF\v" +
		"F\x05F\u04F1\nF\x03F\x03F\x03G\x03G\x03G\x03G\x07G\u04F9\nG\fG\x0EG\u04FC" +
		"\vG\x03H\x03H\x05H\u0500\nH\x03I\x03I\x03I\x03I\x05I\u0506\nI\x03I\x03" +
		"I\x03I\x03J\x03J\x03J\x03J\x07J\u050F\nJ\fJ\x0EJ\u0512\vJ\x03K\x03K\x03" +
		"K\x03K\x03K\x03K\x07K\u051A\nK\fK\x0EK\u051D\vK\x03K\x03K\x05K\u0521\n" +
		"K\x03L\x03L\x03L\x05L\u0526\nL\x03L\x03L\x03M\x03M\x05M\u052C\nM\x03M" +
		"\x03M\x05M\u0530\nM\x03N\x03N\x05N\u0534\nN\x03N\x03N\x03N\x03N\x03O\x03" +
		"O\x05O\u053C\nO\x03O\x03O\x03O\x05O\u0541\nO\x03O\x03O\x03P\x03P\x03P" +
		"\x03P\x03P\x03P\x05P\u054B\nP\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q" +
		"\u0554\nQ\x03Q\x05Q\u0557\nQ\x03Q\x05Q\u055A\nQ\x03Q\x03Q\x03R\x03R\x03" +
		"R\x03R\x03R\x05R\u0563\nR\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x03T\x03" +
		"T\x03T\x03T\x07T\u0570\nT\fT\x0ET\u0573\vT\x03U\x03U\x03U\x03U\x03V\x03" +
		"V\x03V\x03V\x07V\u057D\nV\fV\x0EV\u0580\vV\x03W\x03W\x03W\x03W\x03W\x03" +
		"W\x03W\x03W\x07W\u058A\nW\fW\x0EW\u058D\vW\x03X\x03X\x03X\x03X\x07X\u0593" +
		"\nX\fX\x0EX\u0596\vX\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x07Z\u05A0" +
		"\nZ\fZ\x0EZ\u05A3\vZ\x03Z\x03Z\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03" +
		"[\x03[\x07[\u05B0\n[\f[\x0E[\u05B3\v[\x03[\x03[\x03\\\x03\\\x03\\\x03" +
		"\\\x03\\\x07\\\u05BC\n\\\f\\\x0E\\\u05BF\v\\\x03\\\x03\\\x03]\x03]\x03" +
		"]\x03]\x03]\x03^\x03^\x03^\x05^\u05CB\n^\x03_\x03_\x03_\x03_\x03`\x03" +
		"`\x03`\x03a\x03a\x03a\x03b\x03b\x03b\x05b\u05DA\nb\x07b\u05DC\nb\fb\x0E" +
		"b\u05DF\vb\x03b\x03b\x03c\x03c\x03c\x05c\u05E6\nc\x03c\x03c\x07c\u05EA" +
		"\nc\fc\x0Ec\u05ED\vc\x03d\x03d\x03d\x03d\x03d\x07d\u05F4\nd\fd\x0Ed\u05F7" +
		"\vd\x03d\x03d\x03e\x03e\x03e\x05e\u05FE\ne\x03f\x03f\x03f\x03f\x03f\x07" +
		"f\u0605\nf\ff\x0Ef\u0608\vf\x03f\x03f\x03g\x03g\x05g\u060E\ng\x03g\x03" +
		"g\x07g\u0612\ng\fg\x0Eg\u0615\vg\x03g\x03g\x03g\x03g\x03g\x05g\u061C\n" +
		"g\x03g\x03g\x07g\u0620\ng\fg\x0Eg\u0623\vg\x03g\x07g\u0626\ng\fg\x0Eg" +
		"\u0629\vg\x03g\x03g\x05g\u062D\ng\x03h\x03h\x03h\x03h\x07h\u0633\nh\f" +
		"h\x0Eh\u0636\vh\x03i\x03i\x03j\x03j\x03j\x03j\x03j\x07j\u063F\nj\fj\x0E" +
		"j\u0642\vj\x03j\x03j\x03k\x03k\x03k\x03k\x03l\x03l\x03l\x07l\u064D\nl" +
		"\fl\x0El\u0650\vl\x03l\x03l\x03l\x07l\u0655\nl\fl\x0El\u0658\vl\x03l\x03" +
		"l\x03m\x03m\x03m\x03m\x03m\x07m\u0661\nm\fm\x0Em\u0664\vm\x03m\x03m\x03" +
		"n\x03n\x03n\x03o\x03o\x03o\x03p\x03p\x05p\u0670\np\x03p\x03p\x03p\x05" +
		"p\u0675\np\x03p\x06p\u0678\np\rp\x0Ep\u0679\x03p\x03p\x05p\u067E\np\x03" +
		"p\x03p\x03q\x03q\x05q\u0684\nq\x03q\x03q\x05q\u0688\nq\x03r\x03r\x05r" +
		"\u068C\nr\x03s\x03s\x03t\x03t\x03u\x03u\x06u\u0694\nu\ru\x0Eu\u0695\x03" +
		"v\x03v\x03v\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x03w\x05w\u06A3\nw\x03" +
		"x\x03x\x03x\x03x\x03y\x03y\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03z\x03" +
		"z\x03z\x05z\u06B5\nz\x03{\x03{\x03{\x05{\u06BA\n{\x03|\x03|\x03|\x03}" +
		"\x03}\x03}\x05}\u06C2\n}\x03~\x03~\x03~\x03~\x03~\x06~\u06C9\n~\r~\x0E" +
		"~\u06CA\x03~\x03~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x80\x03" +
		"\x80\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x03\x81\x03\x82\x03\x82\x03" +
		"\x82\x03\x82\x03\x82\x03\x83\x03\x83\x03\x83\x03\x83\x03\x83\x03\x84\x03" +
		"\x84\x05\x84\u06E8\n\x84\x03\x85\x03\x85\x03\x85\x07\x85\u06ED\n\x85\f" +
		"\x85\x0E\x85\u06F0\v\x85\x03\x85\x03\x85\x03\x86\x03\x86\x03\x87\x03\x87" +
		"\x05\x87\u06F8\n\x87\x03\x87\x03\x87\x03\x87\x07\x87\u06FD\n\x87\f\x87" +
		"\x0E\x87\u0700\v\x87\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03\x88\x03" +
		"\x88\x03\x88\x03\x88\x05\x88\u0714\n\x88\x03\x89\x03\x89\x03\x8A\x03\x8A" +
		"\x05\x8A\u071A\n\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x05\x8C\u0721" +
		"\n\x8C\x03\x8D\x03\x8D\x05\x8D\u0725\n\x8D\x03\x8E\x03\x8E\x05\x8E\u0729" +
		"\n\x8E\x03\x8F\x03\x8F\x05\x8F\u072D\n\x8F\x03\x90\x03\x90\x05\x90\u0731" +
		"\n\x90\x03\x91\x03\x91\x05\x91\u0735\n\x91\x03\x92\x03\x92\x03\x93\x03" +
		"\x93\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u073F\n\x94\x03\x95\x03\x95" +
		"\x03\x96\x03\x96\x07\x96\u0745\n\x96\f\x96\x0E\x96\u0748\v\x96\x03\x97" +
		"\x03\x97\x07\x97\u074C\n\x97\f\x97\x0E\x97\u074F\v\x97\x03\x98\x07\x98" +
		"\u0752\n\x98\f\x98\x0E\x98\u0755\v\x98\x03\x98\x03\x98\x03\x99\x03\x99" +
		"\x03\x9A\x03\x9A\x03\x9B\x03\x9B\x07\x9B\u075F\n\x9B\f\x9B\x0E\x9B\u0762" +
		"\v\x9B\x03\x9C\x07\x9C\u0765\n\x9C\f\x9C\x0E\x9C\u0768\v\x9C\x03\x9C\x03" +
		"\x9C\x03\x9C\x02\x02\x04\x86\x88\x9D\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
		"\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
		"\xBE\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02" +
		"\xD0\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02" +
		"\xE2\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02" +
		"\xF4\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104" +
		"\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112" +
		"\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120" +
		"\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E" +
		"\x02\u0130\x02\u0132\x02\u0134\x02\u0136\x02\x02\x0E\x04\x02##%%\x04\x02" +
		"\x1B\x1C()\x03\x02\x04\x05\x03\x02\x04\x10\x04\x02\x1A\x1A\x1D\x1D\x05" +
		"\x02\x1A\x1D()=>\x04\x02\x14\x18\'\'\x03\x0278\x03\x029;\x03\x02\x11\x13" +
		"\x03\x02WX\x04\x02**]]\x02\u07F6\x02\u0139\x03\x02\x02\x02\x04\u0140\x03" +
		"\x02\x02\x02\x06\u0153\x03\x02\x02\x02\b\u0160\x03\x02\x02\x02\n\u0178" +
		"\x03\x02\x02\x02\f\u017A\x03\x02\x02\x02\x0E\u017F\x03\x02\x02\x02\x10" +
		"\u0185\x03\x02\x02\x02\x12\u019A\x03\x02\x02\x02\x14\u01A5\x03\x02\x02" +
		"\x02\x16\u01B5\x03\x02\x02\x02\x18\u01C7\x03\x02\x02\x02\x1A\u01D5\x03" +
		"\x02\x02\x02\x1C\u01EF\x03\x02\x02\x02\x1E\u0204\x03\x02\x02\x02 \u0206" +
		"\x03\x02\x02\x02\"\u020B\x03\x02\x02\x02$\u0223\x03\x02\x02\x02&\u0232" +
		"\x03\x02\x02\x02(\u0241\x03\x02\x02\x02*\u0249\x03\x02\x02\x02,\u0261" +
		"\x03\x02\x02\x02.\u0264\x03\x02\x02\x020\u0281\x03\x02\x02\x022\u0291" +
		"\x03\x02\x02\x024\u02A9\x03\x02\x02\x026\u02AC\x03\x02\x02\x028\u02C9" +
		"\x03\x02\x02\x02:\u02DA\x03\x02\x02\x02<\u02EF\x03\x02\x02\x02>\u02F2" +
		"\x03\x02\x02\x02@\u0302\x03\x02\x02\x02B\u0305\x03\x02\x02\x02D\u0316" +
		"\x03\x02\x02\x02F\u032D\x03\x02\x02\x02H\u0331\x03\x02\x02\x02J\u033F" +
		"\x03\x02\x02\x02L\u034D\x03\x02\x02\x02N\u0354\x03\x02\x02\x02P\u0370" +
		"\x03\x02\x02\x02R\u0372\x03\x02\x02\x02T\u037B\x03\x02\x02\x02V\u038B" +
		"\x03\x02\x02\x02X\u0398\x03\x02\x02\x02Z\u03AD\x03\x02\x02\x02\\\u03AF" +
		"\x03\x02\x02\x02^\u03B9\x03\x02\x02\x02`\u03C4\x03\x02\x02\x02b\u03CE" +
		"\x03\x02\x02\x02d\u03DB\x03\x02\x02\x02f\u03EE\x03\x02\x02\x02h\u03FA" +
		"\x03\x02\x02\x02j\u0405\x03\x02\x02\x02l\u0409\x03\x02\x02\x02n\u042F" +
		"\x03\x02\x02\x02p\u0431\x03\x02\x02\x02r\u043F\x03\x02\x02\x02t\u044A" +
		"\x03\x02\x02\x02v\u0454\x03\x02\x02\x02x\u046A\x03\x02\x02\x02z\u046C" +
		"\x03\x02\x02\x02|\u0477\x03\x02\x02\x02~\u047C\x03\x02\x02\x02\x80\u0484" +
		"\x03\x02\x02\x02\x82\u0489\x03\x02\x02\x02\x84\u0496\x03\x02\x02\x02\x86" +
		"\u04AC\x03\x02\x02\x02\x88\u04D8\x03\x02\x02\x02\x8A\u04E6\x03\x02\x02" +
		"\x02\x8C\u04F4\x03\x02\x02\x02\x8E\u04FD\x03\x02\x02\x02\x90\u0501\x03" +
		"\x02\x02\x02\x92\u050A\x03\x02\x02\x02\x94\u0513\x03\x02\x02\x02\x96\u0525" +
		"\x03\x02\x02\x02\x98\u0529\x03\x02\x02\x02\x9A\u0531\x03\x02\x02\x02\x9C" +
		"\u0539\x03\x02\x02\x02\x9E\u0544\x03\x02\x02\x02\xA0\u054E\x03\x02\x02" +
		"\x02\xA2\u055D\x03\x02\x02\x02\xA4\u0566\x03\x02\x02\x02\xA6\u056B\x03" +
		"\x02\x02\x02\xA8\u0574\x03\x02\x02\x02\xAA\u0578\x03\x02\x02\x02\xAC\u0581" +
		"\x03\x02\x02\x02\xAE\u058E\x03\x02\x02\x02\xB0\u0597\x03\x02\x02\x02\xB2" +
		"\u059A\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\xB4\u05A6\x03\x02\x02\x02\xB6\u05B6\x03\x02\x02\x02\xB8\u05C2\x03" +
		"\x02\x02\x02\xBA\u05CA\x03\x02\x02\x02\xBC\u05CC\x03\x02\x02\x02\xBE\u05D0" +
		"\x03\x02\x02\x02\xC0\u05D3\x03\x02\x02\x02\xC2\u05DD\x03\x02\x02\x02\xC4" +
		"\u05E2\x03\x02\x02\x02\xC6\u05EE\x03\x02\x02\x02\xC8\u05FA\x03\x02\x02" +
		"\x02\xCA\u05FF\x03\x02\x02\x02\xCC\u062C\x03\x02\x02\x02\xCE\u062E\x03" +
		"\x02\x02\x02\xD0\u0637\x03\x02\x02\x02\xD2\u0639\x03\x02\x02\x02\xD4\u0645" +
		"\x03\x02\x02\x02\xD6\u0649\x03\x02\x02\x02\xD8\u065B\x03\x02\x02\x02\xDA" +
		"\u0667\x03\x02\x02\x02\xDC\u066A\x03\x02\x02\x02\xDE\u066D\x03\x02\x02" +
		"\x02\xE0\u0681\x03\x02\x02\x02\xE2\u068B\x03\x02\x02\x02\xE4\u068D\x03" +
		"\x02\x02\x02\xE6\u068F\x03\x02\x02\x02\xE8\u0691\x03\x02\x02\x02\xEA\u0697" +
		"\x03\x02\x02\x02\xEC\u06A2\x03\x02\x02\x02\xEE\u06A4\x03\x02\x02\x02\xF0" +
		"\u06A8\x03\x02\x02\x02\xF2\u06B4\x03\x02\x02\x02\xF4\u06B6\x03\x02\x02" +
		"\x02\xF6\u06BB\x03\x02\x02\x02\xF8\u06C1\x03\x02\x02\x02\xFA\u06C3\x03" +
		"\x02\x02\x02\xFC\u06CE\x03\x02\x02\x02\xFE\u06D3\x03\x02\x02\x02\u0100" +
		"\u06D7\x03\x02\x02\x02\u0102\u06DB\x03\x02\x02\x02\u0104\u06E0\x03\x02" +
		"\x02\x02\u0106\u06E5\x03\x02\x02\x02\u0108\u06E9\x03\x02\x02\x02\u010A" +
		"\u06F3\x03\x02\x02\x02\u010C\u06F5\x03\x02\x02\x02\u010E\u0713\x03\x02" +
		"\x02\x02\u0110\u0715\x03\x02\x02\x02\u0112\u0719\x03\x02\x02\x02\u0114" +
		"\u071B\x03\x02\x02\x02\u0116\u071E\x03\x02\x02\x02\u0118\u0722\x03\x02" +
		"\x02\x02\u011A\u0726\x03\x02\x02\x02\u011C\u072A\x03\x02\x02\x02\u011E" +
		"\u072E\x03\x02\x02\x02\u0120\u0732\x03\x02\x02\x02\u0122\u0736\x03\x02" +
		"\x02\x02\u0124\u0738\x03\x02\x02\x02\u0126\u073E\x03\x02\x02\x02\u0128" +
		"\u0740\x03\x02\x02\x02\u012A\u0742\x03\x02\x02\x02\u012C\u0749\x03\x02" +
		"\x02\x02\u012E\u0753\x03\x02\x02\x02\u0130\u0758\x03\x02\x02\x02\u0132" +
		"\u075A\x03\x02\x02\x02\u0134\u075C\x03\x02\x02\x02\u0136\u0766\x03\x02" +
		"\x02\x02\u0138\u013A\x05\x04\x03\x02\u0139\u0138\x03\x02\x02\x02\u013A" +
		"\u013B\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C\x03\x02" +
		"\x02\x02\u013C\x03\x03\x02\x02\x02\u013D\u013F\x07]\x02\x02\u013E\u013D" +
		"\x03\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02" +
		"\u0140\u0141\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03" +
		"\x02\x02\x02\u0143\u0145\x05\x8EH\x02\u0144\u0143\x03\x02\x02\x02\u0144" +
		"\u0145\x03\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u014A\x05\x06" +
		"\x04\x02\u0147\u0149\x07]\x02\x02\u0148\u0147\x03\x02\x02\x02\u0149\u014C" +
		"\x03\x02\x02\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02" +
		"\u014B\u0150\x03\x02\x02\x02\u014C\u014A\x03\x02\x02\x02\u014D\u014F\x05" +
		"\n\x06\x02\u014E\u014D\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150" +
		"\u014E\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\x05\x03\x02\x02" +
		"\x02\u0152\u0150\x03\x02\x02\x02\u0153\u0154\x07U\x02\x02\u0154\u0159" +
		"\x05\u012C\x97\x02\u0155\u0158\x05\b\x05\x02\u0156\u0158\x07]\x02\x02" +
		"\u0157\u0155\x03\x02\x02\x02\u0157\u0156\x03\x02\x02\x02\u0158\u015B\x03" +
		"\x02\x02\x02\u0159\u0157\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A" +
		"\u015C\x03\x02\x02\x02\u015B\u0159\x03\x02\x02\x02\u015C\u015D\x05\u012E" +
		"\x98\x02\u015D\u015E\x05\u0128\x95\x02\u015E\x07\x03\x02\x02\x02\u015F" +
		"\u0161\x05\x8EH\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02" +
		"\x02\u0161\u0162\x03\x02\x02\x02\u0162\u0167\x07U\x02\x02\u0163\u0165" +
		"\x05\u0124\x93\x02\u0164\u0166\x05\u0120\x91\x02\u0165\u0164\x03\x02\x02" +
		"\x02\u0165\u0166\x03\x02\x02\x02\u0166\u0168\x03\x02\x02\x02\u0167\u0163" +
		"\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02" +
		"\u0169\u016A\x05\u0128\x95\x02\u016A\t\x03\x02\x02\x02\u016B\u0179\x05" +
		"\x14\v\x02\u016C\u0179\x05\x16\f\x02\u016D\u0179\x05\x1A\x0E\x02\u016E" +
		"\u0179\x05\x18\r\x02\u016F\u0179\x05\x1C\x0F\x02\u0170\u0179\x05:\x1E" +
		"\x02\u0171\u0179\x05*\x16\x02\u0172\u0179\x052\x1A\x02\u0173\u0179\x05" +
		"\"\x12\x02\u0174\u0179\x05\x10\t\x02\u0175\u0179\x05\f\x07\x02\u0176\u0179" +
		"\x05\x0E\b\x02\u0177\u0179\x07]\x02\x02\u0178\u016B\x03\x02\x02\x02\u0178" +
		"\u016C\x03\x02\x02\x02\u0178\u016D\x03\x02\x02\x02\u0178\u016E\x03\x02" +
		"\x02\x02\u0178\u016F\x03\x02\x02\x02\u0178\u0170\x03\x02\x02\x02\u0178" +
		"\u0171\x03\x02\x02\x02\u0178\u0172\x03\x02\x02\x02\u0178\u0173\x03\x02" +
		"\x02\x02\u0178\u0174\x03\x02\x02\x02\u0178\u0175\x03\x02\x02\x02\u0178" +
		"\u0176\x03\x02\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179\v\x03\x02\x02" +
		"\x02\u017A\u017B\x05\u0124\x93\x02\u017B\u017C\x07\"\x02\x02\u017C\u017D" +
		"\x05\xF8}\x02\u017D\u017E\x05\u0128\x95\x02\u017E\r\x03\x02\x02\x02\u017F" +
		"\u0180\x05\u0124\x93\x02\u0180\u0181\x07#\x02\x02\u0181\u0182\x05\xF8" +
		"}\x02\u0182\u0183\x05\u0128\x95\x02\u0183\x0F\x03\x02\x02\x02\u0184\u0186" +
		"\x05\x8EH\x02\u0185\u0184\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02" +
		"\u0186\u0187\x03\x02\x02\x02\u0187\u0188\x05\u0124\x93\x02\u0188\u018C" +
		"\x07#\x02\x02\u0189\u018B\x07]\x02\x02\u018A\u0189\x03\x02\x02\x02\u018B" +
		"\u018E\x03\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018C\u018D\x03\x02" +
		"\x02\x02\u018D\u018F\x03\x02\x02\x02\u018E\u018C\x03\x02\x02\x02\u018F" +
		"\u0190\x05\xF8}\x02\u0190\u0194\x05\u0134\x9B\x02\u0191\u0193\x05\x12" +
		"\n\x02\u0192\u0191\x03\x02\x02\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0192" +
		"\x03\x02\x02\x02\u0194\u0195\x03\x02\x02\x02\u0195\u0197\x03\x02\x02\x02" +
		"\u0196\u0194\x03\x02\x02\x02\u0197\u0198\x05\u0136\x9C\x02\u0198\u0199" +
		"\x05\u0128\x95\x02\u0199\x11\x03\x02\x02\x02\u019A\u01A0\x05\u0124\x93" +
		"\x02\u019B\u019D\x07\'\x02\x02\u019C\u019E\x05\u011A\x8E\x02\u019D\u019C" +
		"\x03\x02\x02\x02\u019D\u019E\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02" +
		"\u019F\u01A1\x05\xF0y\x02\u01A0\u019B\x03\x02\x02\x02\u01A0\u01A1\x03" +
		"\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2\u01A3\x05\u0128\x95\x02" +
		"\u01A3\x13\x03\x02\x02\x02\u01A4\u01A6\x05\x8EH\x02\u01A5\u01A4\x03\x02" +
		"\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7" +
		"\u01B0\x05\u0124\x93\x02\u01A8\u01A9\x07\x19\x02\x02\u01A9\u01B1\x05\x86" +
		"D\x02\u01AA\u01AB\x072\x02\x02\u01AB\u01AE\x05\xF8}\x02\u01AC\u01AD\x07" +
		"\'\x02\x02\u01AD\u01AF\x05\x86D\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE" +
		"\u01AF\x03\x02\x02\x02\u01AF\u01B1\x03\x02\x02\x02\u01B0\u01A8\x03\x02" +
		"\x02\x02\u01B0\u01AA\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2" +
		"\u01B3\x05\u0128\x95\x02\u01B3\x15\x03\x02\x02\x02\u01B4\u01B6\x05\x8E" +
		"H\x02\u01B5\u01B4\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7" +
		"\x03\x02\x02\x02\u01B7\u01B8\x05\u0124\x93\x02\u01B8\u01B9\x072\x02\x02" +
		"\u01B9\u01BC\x05\xF8}\x02\u01BA\u01BB\x07\'\x02\x02\u01BB\u01BD\x05\x86" +
		"D\x02\u01BC\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE" +
		"\x03\x02\x02\x02\u01BE\u01C0\x07#\x02\x02\u01BF\u01C1\x05&\x14\x02\u01C0" +
		"\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C0\x03\x02" +
		"\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4" +
		"\u01C5\x05\u0128\x95\x02\u01C5\x17\x03\x02\x02\x02\u01C6\u01C8\x05\x8E" +
		"H\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9" +
		"\x03\x02\x02\x02\u01C9\u01CF\x05\u0124\x93\x02\u01CA\u01CB\x072\x02\x02" +
		"\u01CB\u01CC\x05\xF8}\x02\u01CC\u01CD\x072\x02\x02\u01CD\u01D0\x03\x02" +
		"\x02\x02\u01CE\u01D0\x071\x02\x02\u01CF\u01CA\x03\x02\x02\x02\u01CF\u01CE" +
		"\x03\x02\x02\x02\u01D0\u01D1\x03\x02\x02\x02\u01D1\u01D2\x05\x86D\x02" +
		"\u01D2\u01D3\x05\u0128\x95\x02\u01D3\x19\x03\x02\x02\x02\u01D4\u01D6\x05" +
		"\x8EH\x02\u01D5\u01D4\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02\u01D6" +
		"\u01D7\x03\x02\x02\x02\u01D7\u01D9\x05\u0124\x93\x02\u01D8\u01DA\x05\xC6" +
		"d\x02\u01D9\u01D8\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DB" +
		"\x03\x02\x02\x02\u01DB\u01DC\x05H%\x02\u01DC\u01E0\t\x02\x02\x02\u01DD" +
		"\u01DF\x07]\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF\u01E2\x03\x02\x02" +
		"\x02\u01E0\u01DE\x03\x02\x02\x02\u01E0\u01E1\x03\x02\x02\x02\u01E1\u01E3" +
		"\x03\x02\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E3\u01E4\x05J&\x02\u01E4" +
		"\u01E8\x05\u012C\x97\x02\u01E5\u01E7\x05P)\x02\u01E6\u01E5\x03\x02\x02" +
		"\x02\u01E7\u01EA\x03\x02\x02\x02\u01E8\u01E6\x03\x02\x02\x02\u01E8\u01E9" +
		"\x03\x02\x02\x02\u01E9\u01EB\x03\x02\x02\x02\u01EA\u01E8\x03\x02\x02\x02" +
		"\u01EB\u01EC\x05\u012E\x98\x02\u01EC\u01ED\x05\u0128\x95\x02\u01ED\x1B" +
		"\x03\x02\x02\x02\u01EE\u01F0\x05\x8EH\x02\u01EF\u01EE\x03\x02\x02\x02" +
		"\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F3\x05" +
		"\u0124\x93\x02\u01F2\u01F4\x05\xC6d\x02\u01F3\u01F2\x03\x02\x02\x02\u01F3" +
		"\u01F4\x03\x02\x02\x02\u01F4\u01F5\x03\x02\x02\x02\u01F5\u01F6\x07#\x02" +
		"\x02\u01F6\u01FA\x05\u012C\x97\x02\u01F7\u01F9\x05\x1E\x10\x02\u01F8\u01F7" +
		"\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02" +
		"\u01FA\u01FB\x03\x02\x02\x02\u01FB\u01FD\x03\x02\x02\x02\u01FC\u01FA\x03" +
		"\x02\x02\x02\u01FD\u01FE\x05\u012E\x98\x02\u01FE\u01FF\x05\u0128\x95\x02" +
		"\u01FF\x1D\x03\x02\x02\x02\u0200\u0205\x05 \x11\x02\u0201\u0205\x05$\x13" +
		"\x02\u0202\u0205\x05(\x15\x02\u0203\u0205\x07]\x02\x02\u0204\u0200\x03" +
		"\x02\x02\x02\u0204\u0201\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204" +
		"\u0203\x03\x02\x02\x02\u0205\x1F\x03\x02\x02\x02\u0206\u0207\x072\x02" +
		"\x02\u0207\u0208\x05\xF8}\x02\u0208\u0209\x05\u0128\x95\x02\u0209!\x03" +
		"\x02\x02\x02\u020A\u020C\x05\x8EH\x02\u020B\u020A\x03\x02\x02\x02\u020B" +
		"\u020C\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u020E\x05L\'" +
		"\x02\u020E\u020F\x07(\x02\x02\u020F\u0210\x07)\x02\x02\u0210\u0217\x05" +
		"H%\x02\u0211\u0213\x05\u0130\x99\x02\u0212\u0214\x05\x8CG\x02\u0213\u0212" +
		"\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02" +
		"\u0215\u0216\x05\u0132\x9A\x02\u0216\u0218\x03\x02\x02\x02\u0217\u0211" +
		"\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02" +
		"\u0219\u021D\x05\u012C\x97\x02\u021A\u021C\x05P)\x02\u021B\u021A\x03\x02" +
		"\x02\x02\u021C\u021F\x03\x02\x02\x02\u021D\u021B\x03\x02\x02\x02\u021D" +
		"\u021E\x03\x02\x02\x02\u021E\u0220\x03\x02\x02\x02\u021F\u021D\x03\x02" +
		"\x02\x02\u0220\u0221\x05\u012E\x98\x02\u0221#\x03\x02\x02\x02\u0222\u0224" +
		"\x05\x8EH\x02\u0223\u0222\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02" +
		"\u0224\u0225\x03\x02\x02\x02\u0225\u022E\x05\u0124\x93\x02\u0226\u0227" +
		"\x07\x19\x02\x02\u0227\u022F\x05\x86D\x02\u0228\u0229\x072\x02\x02\u0229" +
		"\u022C\x05\xF8}\x02\u022A\u022B\x07\'\x02\x02\u022B\u022D\x05\x86D\x02" +
		"\u022C\u022A\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022F\x03" +
		"\x02\x02\x02\u022E\u0226\x03\x02\x02\x02\u022E\u0228\x03\x02\x02\x02\u022F" +
		"\u0230\x03\x02\x02\x02\u0230\u0231\x05\u0128\x95\x02\u0231%\x03\x02\x02" +
		"\x02\u0232\u0237\x05\u0124\x93\x02\u0233\u0234\x05\u0130\x99\x02\u0234" +
		"\u0235\x05\u0124\x93\x02\u0235\u0236\x05\u0132\x9A\x02\u0236\u0238\x03" +
		"\x02\x02\x02\u0237\u0233\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238" +
		"\u0239\x03\x02\x02\x02\u0239\u023B\x05\u012C\x97\x02\u023A\u023C\x05P" +
		")\x02\u023B\u023A\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023B" +
		"\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u023F\x03\x02\x02\x02" +
		"\u023F\u0240\x05\u012E\x98\x02\u0240\'\x03\x02\x02\x02\u0241\u0242\x05" +
		"\u0124\x93\x02\u0242\u0243\x072\x02\x02\u0243\u0244\x05\u0134\x9B\x02" +
		"\u0244\u0245\x073\x02\x02\u0245\u0246\x05\u0136\x9C\x02\u0246\u0247\x05" +
		"\xC2b\x02\u0247\u0248\x05\u0128\x95\x02\u0248)\x03\x02\x02\x02\u0249\u024A" +
		"\x05L\'\x02\u024A\u024C\x07#\x02\x02\u024B\u024D\x05\xF8}\x02\u024C\u024B" +
		"\x03\x02\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D\u0251\x03\x02\x02\x02" +
		"\u024E\u0250\x07]\x02\x02\u024F\u024E\x03\x02\x02\x02\u0250\u0253\x03" +
		"\x02\x02\x02\u0251\u024F\x03\x02\x02\x02\u0251\u0252\x03\x02\x02\x02\u0252" +
		"\u0254\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0254\u0258\x05\u012C" +
		"\x97\x02\u0255\u0257\x05,\x17\x02\u0256\u0255\x03\x02\x02\x02\u0257\u025A" +
		"\x03\x02\x02\x02\u0258\u0256\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02" +
		"\u0259\u025B\x03\x02\x02\x02\u025A\u0258\x03\x02\x02\x02\u025B\u025C\x05" +
		"\u012E\x98\x02\u025C\u025D\x05\u0128\x95\x02\u025D+\x03\x02\x02\x02\u025E" +
		"\u0262\x05.\x18\x02\u025F\u0262\x050\x19\x02\u0260\u0262\x07]\x02\x02" +
		"\u0261\u025E\x03\x02\x02\x02\u0261\u025F\x03\x02\x02\x02\u0261\u0260\x03" +
		"\x02\x02\x02\u0262-\x03\x02\x02\x02\u0263\u0265\x05\x8EH\x02\u0264\u0263" +
		"\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0267\x03\x02\x02\x02" +
		"\u0266\u0268\x07Y\x02\x02\u0267\u0266\x03\x02\x02\x02\u0267\u0268\x03" +
		"\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026B\x05\u0124\x93\x02" +
		"\u026A\u026C\x05\xC6d\x02\u026B\u026A\x03\x02\x02\x02\u026B\u026C\x03" +
		"\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\u026E\x05H%\x02\u026E\u0272" +
		"\t\x02\x02\x02\u026F\u0271\x07]\x02\x02\u0270\u026F\x03\x02\x02\x02\u0271" +
		"\u0274\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273\x03\x02" +
		"\x02\x02\u0273\u0275\x03\x02\x02\x02\u0274\u0272\x03\x02\x02\x02\u0275" +
		"\u0276\x05J&\x02\u0276\u027A\x05\u012C\x97\x02\u0277\u0279\x05P)\x02\u0278" +
		"\u0277\x03\x02\x02\x02\u0279\u027C\x03\x02\x02\x02\u027A\u0278\x03\x02" +
		"\x02\x02\u027A\u027B\x03\x02\x02\x02\u027B\u027D\x03\x02\x02\x02\u027C" +
		"\u027A\x03\x02\x02\x02\u027D\u027E\x05\u012E\x98\x02\u027E\u027F\x05\u0128" +
		"\x95\x02\u027F/\x03\x02\x02\x02\u0280\u0282\x05\x8EH\x02\u0281\u0280\x03" +
		"\x02\x02\x02\u0281\u0282\x03\x02\x02\x02\u0282\u0284\x03\x02\x02\x02\u0283" +
		"\u0285\x07Y\x02\x02\u0284\u0283\x03\x02\x02\x02\u0284\u0285\x03\x02\x02" +
		"\x02\u0285\u0286\x03\x02\x02\x02\u0286\u0287\x05\u0124\x93\x02\u0287\u0288" +
		"\x072\x02\x02\u0288\u0289\x05\xF8}\x02\u0289\u028B\x07#\x02\x02\u028A" +
		"\u028C\x05&\x14\x02\u028B\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02" +
		"\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028F" +
		"\x03\x02\x02\x02\u028F\u0290\x05\u0128\x95\x02\u02901\x03\x02\x02\x02" +
		"\u0291\u0292\x05L\'\x02\u0292\u0293\x05\u0130\x99\x02\u0293\u0294\x05" +
		"\u0124\x93\x02\u0294\u0295\x05\u0132\x9A\x02\u0295\u0299\x07#\x02\x02" +
		"\u0296\u0298\x07]\x02\x02\u0297\u0296\x03\x02\x02\x02\u0298\u029B\x03" +
		"\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02\u029A" +
		"\u029C\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02\u029C\u02A0\x05\u012C" +
		"\x97\x02\u029D\u029F\x054\x1B\x02\u029E\u029D\x03\x02\x02\x02\u029F\u02A2" +
		"\x03\x02\x02\x02\u02A0\u029E\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02" +
		"\u02A1\u02A3\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A3\u02A4\x05" +
		"\u012E\x98\x02\u02A4\u02A5\x05\u0128\x95\x02\u02A53\x03\x02\x02\x02\u02A6" +
		"\u02AA\x056\x1C\x02\u02A7\u02AA\x058\x1D\x02\u02A8\u02AA\x07]\x02\x02" +
		"\u02A9\u02A6\x03\x02\x02\x02\u02A9\u02A7\x03\x02\x02\x02\u02A9\u02A8\x03" +
		"\x02\x02\x02\u02AA5\x03\x02\x02\x02\u02AB\u02AD\x05\x8EH\x02\u02AC\u02AB" +
		"\x03\x02\x02\x02\u02AC\u02AD\x03\x02\x02\x02\u02AD\u02AF\x03\x02\x02\x02" +
		"\u02AE\u02B0\x07Y\x02\x02\u02AF\u02AE\x03\x02\x02\x02\u02AF\u02B0\x03" +
		"\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02\u02B1\u02B3\x05\u0124\x93\x02" +
		"\u02B2\u02B4\x05\xC6d\x02\u02B3\u02B2\x03\x02\x02\x02\u02B3\u02B4\x03" +
		"\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5\u02B6\x05H%\x02\u02B6\u02BA" +
		"\t\x02\x02\x02\u02B7\u02B9\x07]\x02\x02\u02B8\u02B7\x03\x02\x02\x02\u02B9" +
		"\u02BC\x03\x02\x02\x02\u02BA\u02B8\x03\x02\x02\x02\u02BA\u02BB\x03\x02" +
		"\x02\x02\u02BB\u02BD\x03\x02\x02\x02\u02BC\u02BA\x03\x02\x02\x02\u02BD" +
		"\u02BE\x05J&\x02\u02BE\u02C2\x05\u012C\x97\x02\u02BF\u02C1\x05P)\x02\u02C0" +
		"\u02BF\x03\x02\x02\x02\u02C1\u02C4\x03\x02\x02\x02\u02C2\u02C0\x03\x02" +
		"\x02\x02\u02C2\u02C3\x03\x02\x02\x02\u02C3\u02C5\x03\x02\x02\x02\u02C4" +
		"\u02C2\x03\x02\x02\x02\u02C5\u02C6\x05\u012E\x98\x02\u02C6\u02C7\x05\u0128" +
		"\x95\x02\u02C77\x03\x02\x02\x02\u02C8\u02CA\x05\x8EH\x02\u02C9\u02C8\x03" +
		"\x02\x02\x02\u02C9\u02CA\x03\x02\x02\x02\u02CA\u02CC\x03\x02\x02\x02\u02CB" +
		"\u02CD\x07Y\x02\x02\u02CC\u02CB\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02" +
		"\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF\x05\u0124\x93\x02\u02CF\u02D0" +
		"\x072\x02\x02\u02D0\u02D1\x05\xF8}\x02\u02D1\u02D3\x07#\x02\x02\u02D2" +
		"\u02D4\x05&\x14\x02\u02D3\u02D2\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02" +
		"\x02\u02D5\u02D3\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D7" +
		"\x03\x02\x02\x02\u02D7\u02D8\x05\u0128\x95\x02\u02D89\x03\x02\x02\x02" +
		"\u02D9\u02DB\x05\x8EH\x02\u02DA\u02D9\x03\x02\x02\x02\u02DA\u02DB\x03" +
		"\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DE\x05\u0124\x93\x02" +
		"\u02DD\u02DF\x05\xC6d\x02\u02DE\u02DD\x03\x02\x02\x02\u02DE\u02DF\x03" +
		"\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E1\x07$\x02\x02\u02E1" +
		"\u02E5\x05\u012C\x97\x02\u02E2\u02E4\x05<\x1F\x02\u02E3\u02E2\x03\x02" +
		"\x02\x02\u02E4\u02E7\x03\x02\x02\x02\u02E5\u02E3\x03\x02\x02\x02\u02E5" +
		"\u02E6\x03\x02\x02\x02\u02E6\u02E8\x03\x02\x02\x02\u02E7\u02E5\x03\x02" +
		"\x02\x02\u02E8\u02E9\x05\u012E\x98\x02\u02E9\u02EA\x05\u0128\x95\x02\u02EA" +
		";\x03\x02\x02\x02\u02EB\u02F0\x05 \x11\x02\u02EC\u02F0\x05B\"\x02\u02ED" +
		"\u02F0\x05> \x02\u02EE\u02F0\x07]\x02\x02\u02EF\u02EB\x03\x02\x02\x02" +
		"\u02EF\u02EC\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02EF\u02EE\x03" +
		"\x02\x02\x02\u02F0=\x03\x02\x02\x02\u02F1\u02F3\x05\x8EH\x02\u02F2\u02F1" +
		"\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02" +
		"\u02F4\u02F5\x05\u0124\x93\x02\u02F5\u02F6\x072\x02\x02\u02F6\u02F7\x05" +
		"\xF8}\x02\u02F7\u02F8\x07#\x02\x02\u02F8\u02FD\x05@!\x02\u02F9\u02FA\x07" +
		"!\x02\x02\u02FA\u02FC\x05@!\x02\u02FB\u02F9\x03\x02\x02\x02\u02FC\u02FF" +
		"\x03\x02\x02\x02\u02FD\u02FB\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02" +
		"\u02FE\u0300\x03\x02\x02\x02\u02FF\u02FD\x03\x02\x02\x02\u0300\u0301\x05" +
		"\u0128\x95\x02\u0301?\x03\x02\x02\x02\u0302\u0303\x05\u0124\x93\x02\u0303" +
		"A\x03\x02\x02\x02\u0304\u0306\x05\x8EH\x02\u0305\u0304\x03\x02\x02\x02" +
		"\u0305\u0306\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307\u0309\x05" +
		"\u0124\x93\x02\u0308\u030A\x05\xC6d\x02\u0309\u0308\x03\x02\x02\x02\u0309" +
		"\u030A\x03\x02\x02\x02\u030A\u030B\x03\x02\x02\x02\u030B\u030C\x05H%\x02" +
		"\u030C\u0310\t\x02\x02\x02\u030D\u030F\x07]\x02\x02\u030E\u030D\x03\x02" +
		"\x02\x02\u030F\u0312\x03\x02\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310" +
		"\u0311\x03\x02\x02\x02\u0311\u0313\x03\x02\x02\x02\u0312\u0310\x03\x02" +
		"\x02\x02\u0313\u0314\x05J&\x02\u0314\u0315\x05\u0128\x95\x02\u0315C\x03" +
		"\x02\x02\x02\u0316\u0318\x05\u0124\x93\x02\u0317\u0319\x05\xC6d\x02\u0318" +
		"\u0317\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u031A\x03\x02" +
		"\x02\x02\u031A\u031B\x05H%\x02\u031B\u031F\t\x02\x02\x02\u031C\u031E\x07" +
		"]\x02\x02\u031D\u031C\x03\x02\x02\x02\u031E\u0321\x03\x02\x02\x02\u031F" +
		"\u031D\x03\x02\x02\x02\u031F\u0320\x03\x02\x02\x02\u0320\u0322\x03\x02" +
		"\x02\x02\u0321\u031F\x03\x02\x02\x02\u0322\u0323\x05J&\x02\u0323\u0327" +
		"\x05\u012C\x97\x02\u0324\u0326\x05P)\x02\u0325\u0324\x03\x02\x02\x02\u0326" +
		"\u0329\x03\x02\x02\x02\u0327\u0325\x03\x02\x02\x02\u0327\u0328\x03\x02" +
		"\x02\x02\u0328\u032A\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u032A" +
		"\u032B\x05\u012E\x98\x02\u032B\u032C\x05\u0128\x95\x02\u032CE\x03\x02" +
		"\x02\x02\u032D\u032E\x07$\x02\x02\u032E\u032F\x05\x8AF\x02\u032F\u0330" +
		"\x05\u0128\x95\x02\u0330G\x03\x02\x02\x02\u0331\u0333\x05\u0130\x99\x02" +
		"\u0332\u0334\x05N(\x02\u0333\u0332\x03\x02\x02\x02\u0333\u0334\x03\x02" +
		"\x02\x02\u0334\u033A\x03\x02\x02\x02\u0335\u0336\x05\u012A\x96\x02\u0336" +
		"\u0337\x05N(\x02\u0337\u0339\x03\x02\x02\x02\u0338\u0335\x03\x02\x02\x02" +
		"\u0339\u033C\x03\x02\x02\x02\u033A\u0338\x03\x02\x02\x02\u033A\u033B\x03" +
		"\x02\x02\x02\u033B\u033D\x03\x02\x02\x02\u033C\u033A\x03\x02\x02\x02\u033D" +
		"\u033E\x05\u0132\x9A\x02\u033EI\x03\x02\x02\x02\u033F\u0341\x05\u0130" +
		"\x99\x02\u0340\u0342\x05N(\x02\u0341\u0340\x03\x02\x02\x02\u0341\u0342" +
		"\x03\x02\x02\x02\u0342\u0348\x03\x02\x02\x02\u0343\u0344\x05\u012A\x96" +
		"\x02\u0344\u0345\x05N(\x02\u0345\u0347\x03\x02\x02\x02\u0346\u0343\x03" +
		"\x02\x02\x02\u0347\u034A\x03\x02\x02\x02\u0348\u0346\x03\x02\x02\x02\u0348" +
		"\u0349\x03\x02\x02\x02\u0349\u034B\x03\x02\x02\x02\u034A\u0348\x03\x02" +
		"\x02\x02\u034B\u034C\x05\u0132\x9A\x02\u034CK\x03\x02\x02\x02\u034D\u034E" +
		"\x05\u0130\x99\x02\u034E\u034F\x05\u0124\x93\x02\u034F\u0350\x072\x02" +
		"\x02\u0350\u0351\x05\xF8}\x02\u0351\u0352\x05\u0132\x9A\x02\u0352M\x03" +
		"\x02\x02\x02\u0353\u0355\x05\x8EH\x02\u0354\u0353\x03\x02\x02\x02\u0354" +
		"\u0355\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0357\x05\u0124" +
		"\x93\x02\u0357\u0358\x072\x02\x02\u0358\u035B\x05\xF8}\x02\u0359\u035A" +
		"\x07\'\x02\x02\u035A\u035C\x05\x86D\x02\u035B\u0359\x03\x02\x02\x02\u035B" +
		"\u035C\x03\x02\x02\x02\u035CO\x03\x02\x02\x02\u035D\u0371\x05F$\x02\u035E" +
		"\u0371\x05R*\x02\u035F\u0371\x05Z.\x02\u0360\u0371\x05b2\x02\u0361\u0371" +
		"\x05d3\x02\u0362\u0371\x05f4\x02\u0363\u0371\x05h5\x02\u0364\u0371\x05" +
		"j6\x02\u0365\u0371\x05l7\x02\u0366\u0371\x05p9\x02\u0367\u0371\x05n8\x02" +
		"\u0368\u0371\x05v<\x02\u0369\u0371\x05D#\x02\u036A\u0371\x05z>\x02\u036B" +
		"\u0371\x05|?\x02\u036C\u0371\x05~@\x02\u036D\u0371\x05\x80A\x02\u036E" +
		"\u0371\x05\x82B\x02\u036F\u0371\x07]\x02\x02\u0370\u035D\x03\x02\x02\x02" +
		"\u0370\u035E\x03\x02\x02\x02\u0370\u035F\x03\x02\x02\x02\u0370\u0360\x03" +
		"\x02\x02\x02\u0370\u0361\x03\x02\x02\x02\u0370\u0362\x03\x02\x02\x02\u0370" +
		"\u0363\x03\x02\x02\x02\u0370\u0364\x03\x02\x02\x02\u0370\u0365\x03\x02" +
		"\x02\x02\u0370\u0366\x03\x02\x02\x02\u0370\u0367\x03\x02\x02\x02\u0370" +
		"\u0368\x03\x02\x02\x02\u0370\u0369\x03\x02\x02\x02\u0370\u036A\x03\x02" +
		"\x02\x02\u0370\u036B\x03\x02\x02\x02\u0370\u036C\x03\x02\x02\x02\u0370" +
		"\u036D\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0370\u036F\x03\x02" +
		"\x02\x02\u0371Q\x03\x02\x02\x02\u0372\u0373\x05\x86D\x02\u0373\u0375\x07" +
		"3\x02\x02\u0374\u0376\x05X-\x02\u0375\u0374\x03\x02\x02\x02\u0376\u0377" +
		"\x03\x02\x02\x02\u0377\u0375\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02" +
		"\u0378\u0379\x03\x02\x02\x02\u0379\u037A\x05\u0128\x95\x02\u037AS\x03" +
		"\x02\x02\x02\u037B\u037C\x07Y\x02\x02\u037C\u0380\x05\u012C\x97\x02\u037D" +
		"\u037F\x05P)\x02\u037E\u037D\x03\x02\x02\x02\u037F\u0382\x03\x02\x02\x02" +
		"\u0380\u037E\x03\x02\x02\x02\u0380\u0381\x03\x02\x02\x02\u0381\u0383\x03" +
		"\x02\x02\x02\u0382\u0380\x03\x02\x02\x02\u0383\u0384\x05\u012E\x98\x02" +
		"\u0384U\x03\x02\x02\x02\u0385\u038C\x05\x86D\x02\u0386\u0388\x05\u0124" +
		"\x93\x02\u0387\u0386\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388" +
		"\u0389\x03\x02\x02\x02\u0389\u038A\x072\x02\x02\u038A\u038C\x05\xF8}\x02" +
		"\u038B\u0385\x03\x02\x02\x02\u038B\u0387\x03\x02\x02\x02\u038C\u038D\x03" +
		"\x02\x02\x02\u038D\u0391\x05\u012C\x97\x02\u038E\u0390\x05P)\x02\u038F" +
		"\u038E\x03\x02\x02\x02\u0390\u0393\x03\x02\x02\x02\u0391\u038F\x03\x02" +
		"\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392\u0394\x03\x02\x02\x02\u0393" +
		"\u0391\x03\x02\x02\x02\u0394\u0395\x05\u012E\x98\x02\u0395W\x03\x02\x02" +
		"\x02\u0396\u0399\x05T+\x02\u0397\u0399\x05V,\x02\u0398\u0396\x03\x02\x02" +
		"\x02\u0398\u0397\x03\x02\x02\x02\u0399Y\x03\x02\x02\x02\u039A\u039E\x05" +
		"^0\x02\u039B\u039D\x05`1\x02\u039C\u039B\x03\x02\x02\x02\u039D\u03A0\x03" +
		"\x02\x02\x02\u039E\u039C\x03\x02\x02\x02\u039E\u039F\x03\x02\x02\x02\u039F" +
		"\u03A1\x03\x02\x02\x02\u03A0\u039E\x03\x02\x02\x02\u03A1\u03A2\x05\\/" +
		"\x02\u03A2\u03A3\x05\u0128\x95\x02\u03A3\u03AE\x03\x02\x02\x02\u03A4\u03A8" +
		"\x05^0\x02\u03A5\u03A7\x05`1\x02\u03A6\u03A5\x03\x02\x02\x02\u03A7\u03AA" +
		"\x03\x02\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8\u03A9\x03\x02\x02\x02" +
		"\u03A9\u03AB\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02\u03AB\u03AC\x05" +
		"\u0128\x95\x02\u03AC\u03AE\x03\x02\x02\x02\u03AD\u039A\x03\x02\x02\x02" +
		"\u03AD\u03A4\x03\x02\x02\x02\u03AE[\x03\x02\x02\x02\u03AF\u03B0\x07Y\x02" +
		"\x02\u03B0\u03B4\x05\u012C\x97\x02\u03B1\u03B3\x05P)\x02\u03B2\u03B1\x03" +
		"\x02\x02\x02\u03B3\u03B6\x03\x02\x02\x02\u03B4\u03B2\x03\x02\x02\x02\u03B4" +
		"\u03B5\x03\x02\x02\x02\u03B5\u03B7\x03\x02\x02\x02\u03B6\u03B4\x03\x02" +
		"\x02\x02\u03B7\u03B8\x05\u012E\x98\x02\u03B8";
	private static readonly _serializedATNSegment2: string =
		"]\x03\x02\x02\x02\u03B9\u03BA\x073\x02\x02\u03BA\u03BB\x05\x86D\x02\u03BB" +
		"\u03BF\x05\u012C\x97\x02\u03BC\u03BE\x05P)\x02\u03BD\u03BC\x03\x02\x02" +
		"\x02\u03BE\u03C1\x03\x02\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03BF\u03C0" +
		"\x03\x02\x02\x02\u03C0\u03C2\x03\x02\x02\x02\u03C1\u03BF\x03\x02\x02\x02" +
		"\u03C2\u03C3\x05\u012E\x98\x02\u03C3_\x03\x02\x02\x02\u03C4\u03C5\x05" +
		"\x86D\x02\u03C5\u03C9\x05\u012C\x97\x02\u03C6\u03C8\x05P)\x02\u03C7\u03C6" +
		"\x03\x02\x02\x02\u03C8\u03CB\x03\x02\x02\x02\u03C9\u03C7\x03\x02\x02\x02" +
		"\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CC\x03\x02\x02\x02\u03CB\u03C9\x03" +
		"\x02\x02\x02\u03CC\u03CD\x05\u012E\x98\x02\u03CDa\x03\x02\x02\x02\u03CE" +
		"\u03CF\x05x=\x02\u03CF\u03D0\x074\x02\x02\u03D0\u03D1\x05\u0124\x93\x02" +
		"\u03D1\u03D5\x05\u012C\x97\x02\u03D2\u03D4\x05P)\x02\u03D3\u03D2\x03\x02" +
		"\x02\x02\u03D4\u03D7\x03\x02\x02\x02\u03D5\u03D3\x03\x02\x02\x02\u03D5" +
		"\u03D6\x03\x02\x02\x02\u03D6\u03D8\x03\x02\x02\x02\u03D7\u03D5\x03\x02" +
		"\x02\x02\u03D8\u03D9\x05\u012E\x98\x02\u03D9\u03DA\x05\u0128\x95\x02\u03DA" +
		"c\x03\x02\x02\x02\u03DB\u03DC\x05\x86D\x02\u03DC\u03E1\x074\x02\x02\u03DD" +
		"\u03DE\x07/\x02\x02\u03DE\u03DF\x05\u0124\x93\x02\u03DF\u03E0\x070\x02" +
		"\x02\u03E0\u03E2\x03\x02\x02\x02\u03E1\u03DD\x03\x02\x02\x02\u03E1\u03E2" +
		"\x03\x02\x02\x02\u03E2\u03E3\x03\x02\x02\x02\u03E3\u03E4\x05\u0124\x93" +
		"\x02\u03E4\u03E8\x05\u012C\x97\x02\u03E5\u03E7\x05P)\x02\u03E6\u03E5\x03" +
		"\x02\x02\x02\u03E7\u03EA\x03\x02\x02\x02\u03E8\u03E6\x03\x02\x02\x02\u03E8" +
		"\u03E9\x03\x02\x02\x02\u03E9\u03EB\x03\x02\x02\x02\u03EA\u03E8\x03\x02" +
		"\x02\x02\u03EB\u03EC\x05\u012E\x98\x02\u03EC\u03ED\x05\u0128\x95\x02\u03ED" +
		"e\x03\x02\x02\x02\u03EE\u03EF\x074\x02\x02\u03EF\u03F0\x05\x86D\x02\u03F0" +
		"\u03F4\x05\u012C\x97\x02\u03F1\u03F3\x05P)\x02\u03F2\u03F1\x03\x02\x02" +
		"\x02\u03F3\u03F6\x03\x02\x02\x02\u03F4\u03F2\x03\x02\x02\x02\u03F4\u03F5" +
		"\x03\x02\x02\x02\u03F5\u03F7\x03\x02\x02\x02\u03F6\u03F4\x03\x02\x02\x02" +
		"\u03F7\u03F8\x05\u012E\x98\x02\u03F8\u03F9\x05\u0128\x95\x02\u03F9g\x03" +
		"\x02\x02\x02\u03FA\u03FB\x074\x02\x02\u03FB\u03FF\x05\u012C\x97\x02\u03FC" +
		"\u03FE\x05P)\x02\u03FD\u03FC\x03\x02\x02\x02\u03FE\u0401\x03\x02\x02\x02" +
		"\u03FF\u03FD\x03\x02\x02\x02\u03FF\u0400\x03\x02\x02\x02\u0400\u0402\x03" +
		"\x02\x02\x02\u0401\u03FF\x03\x02\x02\x02\u0402\u0403\x05\u012E\x98\x02" +
		"\u0403\u0404\x05\u0128\x95\x02\u0404i\x03\x02\x02\x02\u0405\u0406\x07" +
		"$\x02\x02\u0406\u0407\x074\x02\x02\u0407\u0408\x05\u0128\x95\x02\u0408" +
		"k\x03\x02\x02\x02\u0409\u040A\x07#\x02\x02\u040A\u040B\x074\x02\x02\u040B" +
		"\u040C\x05\u0128\x95\x02\u040Cm\x03\x02\x02\x02\u040D\u040E\x075\x02\x02" +
		"\u040E\u0412\x05\u012C\x97\x02\u040F\u0411\x05P)\x02\u0410\u040F\x03\x02" +
		"\x02\x02\u0411\u0414\x03\x02\x02\x02\u0412\u0410\x03\x02\x02\x02\u0412" +
		"\u0413\x03\x02\x02\x02\u0413\u0415\x03\x02\x02\x02\u0414\u0412\x03\x02" +
		"\x02\x02\u0415\u0419\x05\u012E\x98\x02\u0416\u0418\x05r:\x02\u0417\u0416" +
		"\x03\x02\x02\x02\u0418\u041B\x03\x02\x02\x02\u0419\u0417\x03\x02\x02\x02" +
		"\u0419\u041A\x03\x02\x02\x02\u041A\u041C\x03\x02\x02\x02\u041B\u0419\x03" +
		"\x02\x02\x02\u041C\u041D\x05t;\x02\u041D\u041E\x05\u0128\x95\x02\u041E" +
		"\u0430\x03\x02\x02\x02\u041F\u0420\x075\x02\x02\u0420\u0424\x05\u012C" +
		"\x97\x02\u0421\u0423\x05P)\x02\u0422\u0421\x03\x02\x02\x02\u0423\u0426" +
		"\x03\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02" +
		"\u0425\u0427\x03\x02\x02\x02\u0426\u0424\x03\x02\x02\x02\u0427\u0429\x05" +
		"\u012E\x98\x02\u0428\u042A\x05r:\x02\u0429\u0428\x03\x02\x02\x02\u042A" +
		"\u042B\x03\x02\x02\x02\u042B\u0429\x03\x02\x02\x02\u042B\u042C\x03\x02" +
		"\x02\x02\u042C\u042D\x03\x02\x02\x02\u042D\u042E\x05\u0128\x95\x02\u042E" +
		"\u0430\x03\x02\x02\x02\u042F\u040D\x03\x02\x02\x02\u042F\u041F\x03\x02" +
		"\x02\x02\u0430o\x03\x02\x02\x02\u0431\u0432\x05\x86D\x02\u0432\u0433\x07" +
		"5\x02\x02\u0433\u0436\x05\x86D\x02\u0434\u0435\x072\x02\x02\u0435\u0437" +
		"\x05\xF8}\x02\u0436\u0434\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02" +
		"\u0437\u0438\x03\x02\x02\x02\u0438\u0439\x05\u0128\x95\x02\u0439q\x03" +
		"\x02\x02\x02\u043A\u0440\x05\u0124\x93\x02\u043B\u043C\x05\u0124\x93\x02" +
		"\u043C\u043D\x072\x02\x02\u043D\u043E\x05\xF8}\x02\u043E\u0440\x03\x02" +
		"\x02\x02\u043F\u043A\x03\x02\x02\x02\u043F\u043B\x03\x02\x02\x02\u0440" +
		"\u0441\x03\x02\x02\x02\u0441\u0445\x05\u012C\x97\x02\u0442\u0444\x05P" +
		")\x02\u0443\u0442\x03\x02\x02\x02\u0444\u0447\x03\x02\x02\x02\u0445\u0443" +
		"\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0448\x03\x02\x02\x02" +
		"\u0447\u0445\x03\x02\x02\x02\u0448\u0449\x05\u012E\x98\x02\u0449s\x03" +
		"\x02\x02\x02\u044A\u044B\x07Y\x02\x02\u044B\u044F\x05\u012C\x97\x02\u044C" +
		"\u044E\x05P)\x02\u044D\u044C\x03\x02\x02\x02\u044E\u0451\x03\x02\x02\x02" +
		"\u044F\u044D\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0452\x03" +
		"\x02\x02\x02\u0451\u044F\x03\x02\x02\x02\u0452\u0453\x05\u012E\x98\x02" +
		"\u0453u\x03\x02\x02\x02\u0454\u0455\x075\x02\x02\u0455\u0457\x05\u0130" +
		"\x99\x02\u0456\u0458\x05\x86D\x02\u0457\u0456\x03\x02\x02\x02\u0457\u0458" +
		"\x03\x02\x02\x02\u0458\u0459\x03\x02\x02\x02\u0459\u045A\x05\u0132\x9A" +
		"\x02\u045A\u045B\x05\u0128\x95\x02\u045Bw\x03\x02\x02\x02\u045C\u045D" +
		"\x07/\x02\x02\u045D\u045E\x05\x86D\x02\u045E\u045F\t\x03\x02\x02\u045F" +
		"\u0460\x05\x86D\x02\u0460\u0461\x05\u012A\x96\x02\u0461\u0462\x05\x86" +
		"D\x02\u0462\u0463\x070\x02\x02\u0463\u046B\x03\x02\x02\x02\u0464\u0465" +
		"\x07/\x02\x02\u0465\u0466\x05\x86D\x02\u0466\u0467\t\x03\x02\x02\u0467" +
		"\u0468\x05\x86D\x02\u0468\u0469\x070\x02\x02\u0469\u046B\x03\x02\x02\x02" +
		"\u046A\u045C\x03\x02\x02\x02\u046A\u0464\x03\x02\x02\x02\u046By\x03\x02" +
		"\x02\x02\u046C\u0472\x05\x86D\x02\u046D\u0473\x07\x19\x02\x02\u046E\u046F" +
		"\x072\x02\x02\u046F\u0470\x05\xF8}\x02\u0470\u0471\x07\'\x02\x02\u0471" +
		"\u0473\x03\x02\x02\x02\u0472\u046D\x03\x02\x02\x02\u0472\u046E\x03\x02" +
		"\x02\x02\u0473\u0474\x03\x02\x02\x02\u0474\u0475\x05\x86D\x02\u0475\u0476" +
		"\x05\u0128\x95\x02\u0476{\x03\x02\x02\x02\u0477\u0478\x05\x86D\x02\u0478" +
		"\u0479\x072\x02\x02\u0479\u047A\x05\xF8}\x02\u047A\u047B\x05\u0128\x95" +
		"\x02\u047B}\x03\x02\x02\x02\u047C\u047D\x05\x86D\x02\u047D\u047E\x07/" +
		"\x02\x02\u047E\u047F\x07$\x02\x02\u047F\u0480\x070\x02\x02\u0480\u0481" +
		"\x05\u0118\x8D\x02\u0481\u0482\x05\x86D\x02\u0482\u0483\x05\u0128\x95" +
		"\x02\u0483\x7F\x03\x02\x02\x02\u0484\u0485\x05\x86D\x02\u0485\u0486\x05" +
		"\u0118\x8D\x02\u0486\u0487\x05\x86D\x02\u0487\u0488\x05\u0128\x95\x02" +
		"\u0488\x81\x03\x02\x02\x02\u0489\u048A\x05\x86D\x02\u048A\u048B\x05\u0128" +
		"\x95\x02\u048B\x83\x03\x02\x02\x02\u048C\u048E\x05\u0124\x93\x02\u048D" +
		"\u048F\x05\xCAf\x02\u048E\u048D\x03\x02\x02\x02\u048E\u048F\x03\x02\x02" +
		"\x02\u048F\u0497\x03\x02\x02\x02\u0490\u0497\x07Y\x02\x02\u0491\u0492" +
		"\x05\u0130\x99\x02\u0492\u0493\x05\x86D\x02\u0493\u0494\x05\u0132\x9A" +
		"\x02\u0494\u0497\x03\x02\x02\x02\u0495\u0497\x05\xECw\x02\u0496\u048C" +
		"\x03\x02\x02\x02\u0496\u0490\x03\x02\x02\x02\u0496\u0491\x03\x02\x02\x02" +
		"\u0496\u0495\x03\x02\x02\x02\u0497\x85\x03\x02\x02\x02\u0498\u0499\bD" +
		"\x01\x02\u0499\u04AD\x05\xDEp\x02\u049A\u04AD\x05\x98M\x02\u049B\u04AD" +
		"\x05\x84C\x02\u049C\u04AD\x05\x9AN\x02\u049D\u04AD\x05\x9CO\x02\u049E" +
		"\u04AD\x05\xA0Q\x02\u049F\u04AD\x05\x9EP\x02\u04A0\u04AD\x05\xA2R\x02" +
		"\u04A1\u04AD\x05\xB0Y\x02\u04A2\u04AD\x05\xB2Z\x02\u04A3\u04AD\x05\xB4" +
		"[\x02\u04A4\u04AD\x05\xB6\\\x02\u04A5\u04AD\x05\xCCg\x02\u04A6\u04AD\x05" +
		"\xD6l\x02\u04A7\u04AD\x05\xD0i\x02\u04A8\u04AD\x05\xD8m\x02\u04A9\u04AD" +
		"\x05\xDAn\x02\u04AA\u04AD\x05\xDCo\x02\u04AB\u04AD\x05\xE8u\x02\u04AC" +
		"\u0498\x03\x02\x02\x02\u04AC\u049A\x03\x02\x02\x02\u04AC\u049B\x03\x02" +
		"\x02\x02\u04AC\u049C\x03\x02\x02\x02\u04AC\u049D\x03\x02\x02\x02\u04AC" +
		"\u049E\x03\x02\x02\x02\u04AC\u049F\x03\x02\x02\x02\u04AC\u04A0\x03\x02" +
		"\x02\x02\u04AC\u04A1\x03\x02\x02\x02\u04AC\u04A2\x03\x02\x02\x02\u04AC" +
		"\u04A3\x03\x02\x02\x02\u04AC\u04A4\x03\x02\x02\x02\u04AC\u04A5\x03\x02" +
		"\x02\x02\u04AC\u04A6\x03\x02\x02\x02\u04AC\u04A7\x03\x02\x02\x02\u04AC" +
		"\u04A8\x03\x02\x02\x02\u04AC\u04A9\x03\x02\x02\x02\u04AC\u04AA\x03\x02" +
		"\x02\x02\u04AC\u04AB\x03\x02\x02\x02\u04AD\u04D0\x03\x02\x02\x02\u04AE" +
		"\u04AF\f\x07\x02\x02\u04AF\u04B0\x05\u0116\x8C\x02\u04B0\u04B1\x05\x86" +
		"D\b\u04B1\u04CF\x03\x02\x02\x02\u04B2\u04B3\f\x06\x02\x02\u04B3\u04B4" +
		"\x05\u011A\x8E\x02\u04B4\u04B5\x05\x86D\x07\u04B5\u04CF\x03\x02\x02\x02" +
		"\u04B6\u04B7\f\x05\x02\x02\u04B7\u04B8\x05\u011C\x8F\x02\u04B8\u04B9\x05" +
		"\x86D\x06\u04B9\u04CF\x03\x02\x02\x02\u04BA\u04BB\f\x04\x02\x02\u04BB" +
		"\u04BC\x05\u011E\x90\x02\u04BC\u04BD\x05\x86D\x05\u04BD\u04CF\x03\x02" +
		"\x02\x02\u04BE\u04BF\f\r\x02\x02\u04BF\u04CF\x075\x02\x02\u04C0\u04C1" +
		"\f\f\x02\x02\u04C1\u04CF\x073\x02\x02\u04C2\u04C3\f\v\x02\x02\u04C3\u04CF" +
		"\x07&\x02\x02\u04C4\u04C5\f\n\x02\x02\u04C5\u04CF\x05\xA4S\x02\u04C6\u04C7" +
		"\f\t\x02\x02\u04C7\u04C8\x05\u0120\x91\x02\u04C8\u04C9\x05\x88E\x02\u04C9" +
		"\u04CF\x03\x02\x02\x02\u04CA\u04CB\f\b\x02\x02\u04CB\u04CC\x05\u0114\x8B" +
		"\x02\u04CC\u04CD\x05\xF8}\x02\u04CD\u04CF\x03\x02\x02\x02\u04CE\u04AE" +
		"\x03\x02\x02\x02\u04CE\u04B2\x03\x02\x02\x02\u04CE\u04B6\x03\x02\x02\x02" +
		"\u04CE\u04BA\x03\x02\x02\x02\u04CE\u04BE\x03\x02\x02\x02\u04CE\u04C0\x03" +
		"\x02\x02\x02\u04CE\u04C2\x03\x02\x02\x02\u04CE\u04C4\x03\x02\x02\x02\u04CE" +
		"\u04C6\x03\x02\x02\x02\u04CE\u04CA\x03\x02\x02\x02\u04CF\u04D2\x03\x02" +
		"\x02\x02\u04D0\u04CE\x03\x02\x02\x02\u04D0\u04D1\x03\x02\x02\x02\u04D1" +
		"\x87\x03\x02\x02\x02\u04D2\u04D0\x03\x02\x02\x02\u04D3\u04D4\bE\x01\x02" +
		"\u04D4\u04D9\x05\x9CO\x02\u04D5\u04D9\x05\x98M\x02\u04D6\u04D9\x05\x9E" +
		"P\x02\u04D7\u04D9\x05\u0124\x93\x02\u04D8\u04D3\x03\x02\x02\x02\u04D8" +
		"\u04D5\x03\x02\x02\x02\u04D8\u04D6\x03\x02\x02\x02\u04D8\u04D7\x03\x02" +
		"\x02\x02\u04D9\u04E3\x03\x02\x02\x02\u04DA\u04DB\f\x03\x02\x02\u04DB\u04DD" +
		"\x05\u0120\x91\x02\u04DC\u04DE\x07]\x02\x02\u04DD\u04DC\x03\x02\x02\x02" +
		"\u04DD\u04DE\x03\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF\u04E0\x05" +
		"\x88E\x04\u04E0\u04E2\x03\x02\x02\x02\u04E1\u04DA\x03\x02\x02\x02\u04E2" +
		"\u04E5\x03\x02\x02\x02\u04E3\u04E1\x03\x02\x02\x02\u04E3\u04E4\x03\x02" +
		"\x02\x02\u04E4\x89\x03\x02\x02\x02\u04E5\u04E3\x03\x02\x02\x02\u04E6\u04F0" +
		"\x05\u0130\x99\x02\u04E7\u04ED\x05\x86D\x02\u04E8\u04E9\x05\u012A\x96" +
		"\x02\u04E9\u04EA\x05\x86D\x02\u04EA\u04EC\x03\x02\x02\x02\u04EB\u04E8" +
		"\x03\x02\x02\x02\u04EC\u04EF\x03\x02\x02\x02\u04ED\u04EB\x03\x02\x02\x02" +
		"\u04ED\u04EE\x03\x02\x02\x02\u04EE\u04F1\x03\x02\x02\x02\u04EF\u04ED\x03" +
		"\x02\x02\x02\u04F0\u04E7\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1" +
		"\u04F2\x03\x02\x02\x02\u04F2\u04F3\x05\u0132\x9A\x02\u04F3\x8B\x03\x02" +
		"\x02\x02\u04F4\u04FA\x05\x86D\x02\u04F5\u04F6\x05\u012A\x96\x02\u04F6" +
		"\u04F7\x05\x86D\x02\u04F7\u04F9\x03\x02\x02\x02\u04F8\u04F5\x03\x02\x02" +
		"\x02\u04F9\u04FC\x03\x02\x02\x02\u04FA\u04F8\x03\x02\x02\x02\u04FA\u04FB" +
		"\x03\x02\x02\x02\u04FB\x8D\x03\x02\x02\x02\u04FC\u04FA\x03\x02\x02\x02" +
		"\u04FD\u04FF\x05\x90I\x02\u04FE\u0500\x07]\x02\x02\u04FF\u04FE\x03\x02" +
		"\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500\x8F\x03\x02\x02\x02\u0501\u0505" +
		"\x07/\x02\x02\u0502\u0503\x05\u0124\x93\x02\u0503\u0504\x07#\x02\x02\u0504" +
		"\u0506\x03\x02\x02\x02\u0505\u0502\x03\x02\x02\x02\u0505\u0506\x03\x02" +
		"\x02\x02\u0506\u0507\x03\x02\x02\x02\u0507\u0508\x05\x92J\x02\u0508\u0509" +
		"\x070\x02\x02\u0509\x91\x03\x02\x02\x02\u050A\u0510\x05\x94K\x02\u050B" +
		"\u050C\x05\u012A\x96\x02\u050C\u050D\x05\x94K\x02\u050D\u050F\x03\x02" +
		"\x02\x02\u050E\u050B\x03\x02\x02\x02\u050F\u0512\x03\x02\x02\x02\u0510" +
		"\u050E\x03\x02\x02\x02\u0510\u0511\x03\x02\x02\x02\u0511\x93\x03\x02\x02" +
		"\x02\u0512\u0510\x03\x02\x02\x02\u0513\u0520\x05\u0124\x93\x02\u0514\u0515" +
		"\x05\u0130\x99\x02\u0515\u051B\x05\x96L\x02\u0516\u0517\x05\u012A\x96" +
		"\x02\u0517\u0518\x05\x96L\x02\u0518\u051A\x03\x02\x02\x02\u0519\u0516" +
		"\x03\x02\x02\x02\u051A\u051D\x03\x02\x02\x02\u051B\u0519\x03\x02\x02\x02" +
		"\u051B\u051C\x03\x02\x02\x02\u051C\u051E\x03\x02\x02\x02\u051D\u051B\x03" +
		"\x02\x02\x02\u051E\u051F\x05\u0132\x9A\x02\u051F\u0521\x03\x02\x02\x02" +
		"\u0520\u0514\x03\x02\x02\x02\u0520\u0521\x03\x02\x02\x02\u0521\x95\x03" +
		"\x02\x02\x02\u0522\u0523\x05\u0124\x93\x02\u0523\u0524\x07\'\x02\x02\u0524" +
		"\u0526\x03\x02\x02\x02\u0525\u0522\x03\x02\x02\x02\u0525\u0526\x03\x02" +
		"\x02\x02\u0526\u0527\x03\x02\x02\x02\u0527\u0528\x05\x86D\x02\u0528\x97" +
		"\x03\x02\x02\x02\u0529\u052B\x05\u0124\x93\x02\u052A\u052C\x05\xCAf\x02" +
		"\u052B\u052A\x03\x02\x02\x02\u052B\u052C\x03\x02\x02\x02\u052C\u052F\x03" +
		"\x02\x02\x02\u052D\u0530\x05\x8AF\x02\u052E\u0530\x05\xCCg\x02\u052F\u052D" +
		"\x03\x02\x02\x02\u052F\u052E\x03\x02\x02\x02\u0530\x99\x03\x02\x02\x02" +
		"\u0531\u0533\x05\u0124\x93\x02\u0532\u0534\x073\x02\x02\u0533\u0532\x03" +
		"\x02\x02\x02\u0533\u0534\x03\x02\x02\x02\u0534\u0535\x03\x02\x02\x02\u0535" +
		"\u0536\x07/\x02\x02\u0536\u0537\x07$\x02\x02\u0537\u0538\x070\x02\x02" +
		"\u0538\x9B\x03\x02\x02\x02\u0539\u053B\x05\u0124\x93\x02\u053A\u053C\x07" +
		"3\x02\x02\u053B\u053A\x03\x02\x02\x02\u053B\u053C\x03\x02\x02\x02\u053C" +
		"\u053D\x03\x02\x02\x02\u053D\u0540\x07/\x02\x02\u053E\u0541\x05\xBA^\x02" +
		"\u053F\u0541\x05\x86D\x02\u0540\u053E\x03\x02\x02\x02\u0540\u053F\x03" +
		"\x02\x02\x02\u0541\u0542\x03\x02\x02\x02\u0542\u0543\x070\x02\x02\u0543" +
		"\x9D\x03\x02\x02\x02\u0544\u0545\x05\xF8}\x02\u0545\u054A\x05\u012C\x97" +
		"\x02\u0546\u054B\x05\xA6T\x02\u0547\u054B\x05\xAAV\x02\u0548\u054B\x05" +
		"\xACW\x02\u0549\u054B\x05\xAEX\x02\u054A\u0546\x03\x02\x02\x02\u054A\u0547" +
		"\x03\x02\x02\x02\u054A\u0548\x03\x02\x02\x02\u054A\u0549\x03\x02\x02\x02" +
		"\u054A\u054B\x03\x02\x02\x02\u054B\u054C\x03\x02\x02\x02\u054C\u054D\x05" +
		"\u012E\x98\x02\u054D\x9F\x03\x02\x02\x02\u054E\u054F\x07(\x02\x02\u054F" +
		"\u0550\x05\xF8}\x02\u0550\u0551\x07)\x02\x02\u0551\u0553\x05\u0130\x99" +
		"\x02\u0552\u0554\x07]\x02\x02\u0553\u0552\x03\x02\x02\x02\u0553\u0554" +
		"\x03\x02\x02\x02\u0554\u0556\x03\x02\x02\x02\u0555\u0557\x05\x8CG\x02" +
		"\u0556\u0555\x03\x02\x02\x02\u0556\u0557\x03\x02\x02\x02\u0557\u0559\x03" +
		"\x02\x02\x02\u0558\u055A\x07]\x02\x02\u0559\u0558\x03\x02\x02\x02\u0559" +
		"\u055A\x03\x02\x02\x02\u055A\u055B\x03\x02\x02\x02\u055B\u055C\x05\u0132" +
		"\x9A\x02\u055C\xA1\x03\x02\x02\x02\u055D\u055E\x073\x02\x02\u055E\u0562" +
		"\x05\u0130\x99\x02\u055F\u0563\x05\x86D\x02\u0560\u0561\x072\x02\x02\u0561" +
		"\u0563\x05\xF8}\x02\u0562\u055F\x03\x02\x02\x02\u0562\u0560\x03\x02\x02" +
		"\x02\u0563\u0564\x03\x02\x02\x02\u0564\u0565\x05\u0132\x9A\x02\u0565\xA3" +
		"\x03\x02\x02\x02\u0566\u0567\x072\x02\x02\u0567\u0568\x05\u0130\x99\x02" +
		"\u0568\u0569\x05\xF8}\x02\u0569\u056A\x05\u0132\x9A\x02\u056A\xA5\x03" +
		"\x02\x02\x02\u056B\u0571\x05\xA8U\x02\u056C\u056D\x05\u012A\x96\x02\u056D" +
		"\u056E\x05\xA8U\x02\u056E\u0570\x03\x02\x02\x02\u056F\u056C\x03\x02\x02" +
		"\x02\u0570\u0573\x03\x02\x02\x02\u0571\u056F\x03\x02\x02\x02\u0571\u0572" +
		"\x03\x02\x02\x02\u0572\xA7\x03\x02\x02\x02\u0573\u0571\x03\x02\x02\x02" +
		"\u0574\u0575\x05\xC4c\x02\u0575\u0576\x07\'\x02\x02\u0576\u0577\x05\x86" +
		"D\x02\u0577\xA9\x03\x02\x02\x02\u0578\u057E\x05\x86D\x02\u0579\u057A\x05" +
		"\u012A\x96\x02\u057A\u057B\x05\x86D\x02\u057B\u057D\x03\x02\x02\x02\u057C" +
		"\u0579\x03\x02\x02\x02\u057D\u0580\x03\x02\x02\x02\u057E\u057C\x03\x02" +
		"\x02\x02\u057E\u057F\x03\x02\x02\x02\u057F\xAB\x03\x02\x02\x02\u0580\u057E" +
		"\x03\x02\x02\x02\u0581\u0582\x07/\x02\x02\u0582\u0583\x05\x86D\x02\u0583" +
		"\u058B\x070\x02\x02\u0584\u0585\x05\u012A\x96\x02\u0585\u0586\x07/\x02" +
		"\x02\u0586\u0587\x05\x86D\x02\u0587\u0588\x070\x02\x02\u0588\u058A\x03" +
		"\x02\x02\x02\u0589\u0584\x03\x02\x02\x02\u058A\u058D\x03\x02\x02\x02\u058B" +
		"\u0589\x03\x02\x02\x02\u058B\u058C\x03\x02\x02\x02\u058C\xAD\x03\x02\x02" +
		"\x02\u058D\u058B\x03\x02\x02\x02\u058E\u0594\x05\xB8]\x02\u058F\u0590" +
		"\x05\u012A\x96\x02\u0590\u0591\x05\xB8]\x02\u0591\u0593\x03\x02\x02\x02" +
		"\u0592\u058F\x03\x02\x02\x02\u0593\u0596\x03\x02\x02\x02\u0594\u0592\x03" +
		"\x02\x02\x02\u0594\u0595\x03\x02\x02\x02\u0595\xAF\x03\x02\x02\x02\u0596" +
		"\u0594\x03\x02\x02\x02\u0597\u0598\x07&\x02\x02\u0598\u0599\x05\x86D\x02" +
		"\u0599\xB1\x03\x02\x02\x02\u059A\u059B\x05\u012C\x97\x02\u059B\u05A1\x05" +
		"\x86D\x02\u059C\u059D\x05\u012A\x96\x02\u059D\u059E\x05\x86D\x02\u059E" +
		"\u05A0\x03\x02\x02\x02\u059F\u059C\x03\x02\x02\x02\u05A0\u05A3\x03\x02" +
		"\x02\x02\u05A1\u059F\x03\x02\x02\x02\u05A1\u05A2\x03\x02\x02\x02\u05A2" +
		"\u05A4\x03\x02\x02\x02\u05A3\u05A1\x03\x02\x02\x02\u05A4\u05A5\x05\u012E" +
		"\x98\x02\u05A5\xB3\x03\x02\x02\x02\u05A6\u05A7\x05\u012C\x97\x02\u05A7" +
		"\u05A8\x07/\x02\x02\u05A8\u05A9\x05\x86D\x02\u05A9\u05B1\x070\x02\x02" +
		"\u05AA\u05AB\x05\u012A\x96\x02\u05AB\u05AC\x07/\x02\x02\u05AC\u05AD\x05" +
		"\x86D\x02\u05AD\u05AE\x070\x02\x02\u05AE\u05B0\x03\x02\x02\x02\u05AF\u05AA" +
		"\x03\x02\x02\x02\u05B0\u05B3\x03\x02\x02\x02\u05B1\u05AF\x03\x02\x02\x02" +
		"\u05B1\u05B2\x03\x02\x02\x02\u05B2\u05B4\x03\x02\x02\x02\u05B3\u05B1\x03" +
		"\x02\x02\x02\u05B4\u05B5\x05\u012E\x98\x02\u05B5\xB5\x03\x02\x02\x02\u05B6" +
		"\u05B7\x05\u012C\x97\x02\u05B7\u05BD\x05\xB8]\x02\u05B8\u05B9\x05\u012A" +
		"\x96\x02\u05B9\u05BA\x05\xB8]\x02\u05BA\u05BC\x03\x02\x02\x02\u05BB\u05B8" +
		"\x03\x02\x02\x02\u05BC\u05BF\x03\x02\x02\x02\u05BD\u05BB\x03\x02\x02\x02" +
		"\u05BD\u05BE\x03\x02\x02\x02\u05BE\u05C0\x03\x02\x02\x02\u05BF\u05BD\x03" +
		"\x02\x02\x02\u05C0\u05C1\x05\u012E\x98\x02\u05C1\xB7\x03\x02\x02\x02\u05C2" +
		"\u05C3\x07/\x02\x02\u05C3\u05C4\x05\x86D\x02\u05C4\u05C5\x070\x02\x02" +
		"\u05C5\u05C6\x05\x86D\x02\u05C6\xB9\x03\x02\x02\x02\u05C7\u05CB\x05\xBC" +
		"_\x02\u05C8\u05CB\x05\xBE`\x02\u05C9\u05CB\x05\xC0a\x02\u05CA\u05C7\x03" +
		"\x02\x02\x02\u05CA\u05C8\x03\x02\x02\x02\u05CA\u05C9\x03\x02\x02\x02\u05CB" +
		"\xBB\x03\x02\x02\x02\u05CC\u05CD\x05\x86D\x02\u05CD\u05CE\t\x03\x02\x02" +
		"\u05CE\u05CF\x05\x86D\x02\u05CF\xBD\x03\x02\x02\x02\u05D0\u05D1\x05\x86" +
		"D\x02\u05D1\u05D2\t\x03\x02\x02\u05D2\xBF\x03\x02\x02\x02\u05D3\u05D4" +
		"\t\x03\x02\x02\u05D4\u05D5\x05\x86D\x02\u05D5\xC1\x03\x02\x02\x02\u05D6" +
		"\u05D7\x05\u0124\x93\x02\u05D7\u05D9\x05\u0120\x91\x02\u05D8\u05DA\x07" +
		"]\x02\x02\u05D9\u05D8\x03\x02\x02\x02\u05D9\u05DA\x03\x02\x02\x02\u05DA" +
		"\u05DC\x03\x02\x02\x02\u05DB\u05D6\x03\x02\x02\x02\u05DC\u05DF\x03\x02" +
		"\x02\x02\u05DD\u05DB\x03\x02\x02\x02\u05DD\u05DE\x03\x02\x02\x02\u05DE" +
		"\u05E0\x03\x02\x02\x02\u05DF\u05DD\x03\x02\x02\x02\u05E0\u05E1\x05\u0124" +
		"\x93\x02\u05E1\xC3\x03\x02\x02\x02\u05E2\u05EB\x05\u0124\x93\x02\u05E3" +
		"\u05E5\x05\u0120\x91\x02\u05E4\u05E6\x07]\x02\x02\u05E5\u05E4\x03\x02" +
		"\x02\x02\u05E5\u05E6\x03\x02\x02\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7" +
		"\u05E8\x05\u0124\x93\x02\u05E8\u05EA\x03\x02\x02\x02\u05E9\u05E3\x03\x02" +
		"\x02\x02\u05EA\u05ED\x03\x02\x02\x02\u05EB\u05E9\x03\x02\x02\x02\u05EB" +
		"\u05EC\x03\x02\x02\x02\u05EC\xC5\x03\x02\x02\x02\u05ED\u05EB\x03\x02\x02" +
		"\x02\u05EE\u05EF\x07(\x02\x02\u05EF\u05F5\x05\xC8e\x02\u05F0\u05F1\x05" +
		"\u012A\x96\x02\u05F1\u05F2\x05\xC8e\x02\u05F2\u05F4\x03\x02\x02\x02\u05F3" +
		"\u05F0\x03\x02\x02\x02\u05F4\u05F7\x03\x02\x02\x02\u05F5\u05F3\x03\x02" +
		"\x02\x02\u05F5\u05F6\x03\x02\x02\x02\u05F6\u05F8\x03\x02\x02\x02\u05F7" +
		"\u05F5\x03\x02\x02\x02\u05F8\u05F9\x07)\x02\x02\u05F9\xC7\x03\x02\x02" +
		"\x02\u05FA\u05FD\x05\u0124\x93\x02\u05FB\u05FC\x072\x02\x02\u05FC\u05FE" +
		"\x05\u0124\x93\x02\u05FD\u05FB\x03\x02\x02\x02\u05FD\u05FE\x03\x02\x02" +
		"\x02\u05FE\xC9\x03\x02\x02\x02\u05FF\u0600\x07(\x02\x02\u0600\u0606\x05" +
		"\xF8}\x02\u0601\u0602\x05\u012A\x96\x02\u0602\u0603\x05\xF8}\x02\u0603" +
		"\u0605\x03\x02\x02\x02\u0604\u0601\x03\x02\x02\x02\u0605\u0608\x03\x02" +
		"\x02\x02\u0606\u0604\x03\x02\x02\x02\u0606\u0607\x03\x02\x02\x02\u0607" +
		"\u0609\x03\x02\x02\x02\u0608\u0606\x03\x02\x02\x02\u0609\u060A\x07)\x02" +
		"\x02\u060A\xCB\x03\x02\x02\x02\u060B\u060D\x05\u012C\x97\x02\u060C\u060E" +
		"\x05\xCEh\x02\u060D\u060C\x03\x02\x02\x02\u060D\u060E\x03\x02\x02\x02" +
		"\u060E\u060F\x03\x02\x02\x02\u060F\u0613\t\x02\x02\x02\u0610\u0612\x07" +
		"]\x02\x02\u0611\u0610\x03\x02\x02\x02\u0612\u0615\x03\x02\x02\x02\u0613" +
		"\u0611\x03\x02\x02\x02\u0613\u0614\x03\x02\x02\x02\u0614\u0616\x03\x02" +
		"\x02\x02\u0615\u0613\x03\x02\x02\x02\u0616\u0617\x05\x8CG\x02\u0617\u0618" +
		"\x05\u012E\x98\x02\u0618\u062D\x03\x02\x02\x02\u0619\u061B\x05\u012C\x97" +
		"\x02\u061A\u061C\x05\xCEh\x02\u061B\u061A\x03\x02\x02\x02\u061B\u061C" +
		"\x03\x02\x02\x02\u061C\u061D\x03\x02\x02\x02\u061D\u0621\t\x02\x02\x02" +
		"\u061E\u0620\x07]\x02\x02\u061F\u061E\x03\x02\x02\x02\u0620\u0623\x03" +
		"\x02\x02\x02\u0621\u061F\x03\x02\x02\x02\u0621\u0622\x03\x02\x02\x02\u0622" +
		"\u0627\x03\x02\x02\x02\u0623\u0621\x03\x02\x02\x02\u0624\u0626\x05P)\x02" +
		"\u0625\u0624\x03\x02\x02\x02\u0626\u0629\x03\x02\x02\x02\u0627\u0625\x03" +
		"\x02\x02\x02\u0627\u0628\x03\x02\x02\x02\u0628\u062A\x03\x02\x02\x02\u0629" +
		"\u0627\x03\x02\x02\x02\u062A\u062B\x05\u012E\x98\x02\u062B\u062D\x03\x02" +
		"\x02\x02\u062C\u060B\x03\x02\x02\x02\u062C\u0619\x03\x02\x02\x02\u062D" +
		"\xCD\x03\x02\x02\x02\u062E\u0634\x05\u0124\x93\x02\u062F\u0630\x05\u012A" +
		"\x96\x02\u0630\u0631\x05\u0124\x93\x02\u0631\u0633\x03\x02\x02\x02\u0632" +
		"\u062F\x03\x02\x02\x02\u0633\u0636\x03\x02\x02\x02\u0634\u0632\x03\x02" +
		"\x02\x02\u0634\u0635\x03\x02\x02\x02\u0635\xCF\x03\x02\x02\x02\u0636\u0634" +
		"\x03\x02\x02\x02\u0637\u0638\x05\xD2j\x02\u0638\xD1\x03\x02\x02\x02\u0639" +
		"\u063A\x05\u012C\x97\x02\u063A\u0640\x05\xD4k\x02\u063B\u063C\x05\u012A" +
		"\x96\x02\u063C\u063D\x05\xD4k\x02\u063D\u063F\x03\x02\x02\x02\u063E\u063B" +
		"\x03\x02\x02\x02\u063F\u0642\x03\x02\x02\x02\u0640\u063E\x03\x02\x02\x02" +
		"\u0640\u0641\x03\x02\x02\x02\u0641\u0643\x03\x02\x02\x02\u0642\u0640\x03" +
		"\x02\x02\x02\u0643\u0644\x05\u012E\x98\x02\u0644\xD3\x03\x02\x02\x02\u0645" +
		"\u0646\x05\xC4c\x02\u0646\u0647\x07\'\x02\x02\u0647\u0648\x05\x86D\x02" +
		"\u0648\xD5\x03\x02\x02\x02\u0649\u064A\x05H%\x02\u064A\u064E\t\x02\x02" +
		"\x02\u064B\u064D\x07]\x02\x02\u064C\u064B\x03\x02\x02\x02\u064D\u0650" +
		"\x03\x02\x02\x02\u064E\u064C\x03\x02\x02\x02\u064E\u064F\x03\x02\x02\x02" +
		"\u064F\u0651\x03\x02\x02\x02\u0650\u064E\x03\x02\x02\x02\u0651\u0652\x05" +
		"J&\x02\u0652\u0656\x05\u012C\x97\x02\u0653\u0655\x05P)\x02\u0654\u0653" +
		"\x03\x02\x02\x02\u0655\u0658\x03\x02\x02\x02\u0656\u0654\x03\x02\x02\x02" +
		"\u0656\u0657\x03\x02\x02\x02\u0657\u0659\x03\x02\x02\x02\u0658\u0656\x03" +
		"\x02\x02\x02\u0659\u065A\x05\u012E\x98\x02\u065A\xD7\x03\x02\x02\x02\u065B" +
		"\u065C\x05\u0130\x99\x02\u065C\u0662\x05\x86D\x02\u065D\u065E\x05\u012A" +
		"\x96\x02\u065E\u065F\x05\x86D\x02\u065F\u0661\x03\x02\x02\x02\u0660\u065D" +
		"\x03\x02\x02\x02\u0661\u0664\x03\x02\x02\x02\u0662\u0660\x03\x02\x02\x02" +
		"\u0662\u0663\x03\x02\x02\x02\u0663\u0665\x03\x02\x02\x02\u0664\u0662\x03" +
		"\x02\x02\x02\u0665\u0666\x05\u0132\x9A\x02\u0666\xD9\x03\x02\x02\x02\u0667" +
		"\u0668\x05\u011A\x8E\x02\u0668\u0669\x05\x86D\x02\u0669\xDB\x03\x02\x02" +
		"\x02\u066A\u066B\x05\u0122\x92\x02\u066B\u066C\x05\x86D\x02\u066C\xDD" +
		"\x03\x02\x02\x02\u066D\u066F\x05\xE4s\x02\u066E\u0670\x07]\x02\x02\u066F" +
		"\u066E\x03\x02\x02\x02\u066F\u0670\x03\x02\x02\x02\u0670\u0671\x03\x02" +
		"\x02\x02\u0671\u0672\x05\x86D\x02\u0672\u0674\x07#\x02\x02\u0673\u0675" +
		"\x07]\x02\x02\u0674\u0673\x03\x02\x02\x02\u0674\u0675\x03\x02\x02\x02" +
		"\u0675\u0677\x03\x02\x02\x02\u0676\u0678\x05\xE0q\x02\u0677\u0676\x03" +
		"\x02\x02\x02\u0678\u0679\x03\x02\x02\x02\u0679\u0677\x03\x02\x02\x02\u0679" +
		"\u067A\x03\x02\x02\x02\u067A\u067B\x03\x02\x02\x02\u067B\u067D\t\x04\x02" +
		"\x02\u067C\u067E\x07]\x02\x02\u067D\u067C\x03\x02\x02\x02\u067D\u067E" +
		"\x03\x02\x02\x02\u067E\u067F\x03\x02\x02\x02\u067F\u0680\x05\x86D\x02" +
		"\u0680\xDF\x03\x02\x02\x02\u0681\u0683\x05\xE2r\x02\u0682\u0684\x05\x86" +
		"D\x02\u0683\u0682\x03\x02\x02\x02\u0683\u0684\x03\x02\x02\x02\u0684\u0685" +
		"\x03\x02\x02\x02\u0685\u0687\x07#\x02\x02\u0686\u0688\x07]\x02\x02\u0687" +
		"\u0686\x03\x02\x02\x02\u0687\u0688\x03\x02\x02\x02\u0688\xE1\x03\x02\x02" +
		"\x02\u0689\u068C\x05\xE4s\x02\u068A\u068C\x05";
	private static readonly _serializedATNSegment3: string =
		"\xE6t\x02\u068B\u0689\x03\x02\x02\x02\u068B\u068A\x03\x02\x02\x02\u068C" +
		"\xE3\x03\x02\x02\x02\u068D\u068E\x07\x03\x02\x02\u068E\xE5\x03\x02\x02" +
		"\x02\u068F\u0690\t\x05\x02\x02\u0690\xE7\x03\x02\x02\x02\u0691\u0693\x07" +
		"U\x02\x02\u0692\u0694\x05\xEAv\x02\u0693\u0692\x03\x02\x02\x02\u0694\u0695" +
		"\x03\x02\x02\x02\u0695\u0693\x03\x02\x02\x02\u0695\u0696\x03\x02\x02\x02" +
		"\u0696\xE9\x03\x02\x02\x02\u0697\u0698\x05\x86D\x02\u0698\u0699\x07U\x02" +
		"\x02\u0699\xEB\x03\x02\x02\x02\u069A\u06A3\x05\xEEx\x02\u069B\u06A3\x05" +
		"\xF0y\x02\u069C\u06A3\x07U\x02\x02\u069D\u06A3\x07V\x02\x02\u069E\u06A3" +
		"\x07Q\x02\x02\u069F\u06A3\x07R\x02\x02\u06A0\u06A3\x05\u0110\x89\x02\u06A1" +
		"\u06A3\x07S\x02\x02\u06A2\u069A\x03\x02\x02\x02\u06A2\u069B\x03\x02\x02" +
		"\x02\u06A2\u069C\x03\x02\x02\x02\u06A2\u069D\x03\x02\x02\x02\u06A2\u069E" +
		"\x03\x02\x02\x02\u06A2\u069F\x03\x02\x02\x02\u06A2\u06A0\x03\x02\x02\x02" +
		"\u06A2\u06A1\x03\x02\x02\x02\u06A3\xED\x03\x02\x02\x02\u06A4\u06A5\x05" +
		"\xF0y\x02\u06A5\u06A6\x05\u0120\x91\x02\u06A6\u06A7\x05\xF0y\x02\u06A7" +
		"\xEF\x03\x02\x02\x02\u06A8\u06A9\x07T\x02\x02\u06A9\xF1\x03\x02\x02\x02" +
		"\u06AA\u06B5\x05\u010A\x86\x02\u06AB\u06B5\x05\xFA~\x02\u06AC\u06B5\x05" +
		"\xFC\x7F\x02\u06AD\u06B5\x05\xFE\x80\x02\u06AE\u06B5\x05\u0100\x81\x02" +
		"\u06AF\u06B5\x05\u0102\x82\x02\u06B0\u06B5\x05\u0104\x83\x02\u06B1\u06B5" +
		"\x05\u010E\x88\x02\u06B2\u06B5\x05\u0106\x84\x02\u06B3\u06B5\x05\u0108" +
		"\x85\x02\u06B4\u06AA\x03\x02\x02\x02\u06B4\u06AB\x03\x02\x02\x02\u06B4" +
		"\u06AC\x03\x02\x02\x02\u06B4\u06AD\x03\x02\x02\x02\u06B4\u06AE\x03\x02" +
		"\x02\x02\u06B4\u06AF\x03\x02\x02\x02\u06B4\u06B0\x03\x02\x02\x02\u06B4" +
		"\u06B1\x03\x02\x02\x02\u06B4\u06B2\x03\x02\x02\x02\u06B4\u06B3\x03\x02" +
		"\x02\x02\u06B5\xF3\x03\x02\x02\x02\u06B6\u06B9\x075\x02\x02\u06B7\u06BA" +
		"\x05\xF2z\x02\u06B8\u06BA\x05\xF6|\x02\u06B9\u06B7\x03\x02\x02\x02\u06B9" +
		"\u06B8\x03\x02\x02\x02\u06BA\xF5\x03\x02\x02\x02\u06BB\u06BC\x073\x02" +
		"\x02\u06BC\u06BD\x05\xF2z\x02\u06BD\xF7\x03\x02\x02\x02\u06BE\u06C2\x05" +
		"\xF2z\x02\u06BF\u06C2\x05\xF6|\x02\u06C0\u06C2\x05\xF4{\x02\u06C1\u06BE" +
		"\x03\x02\x02\x02\u06C1\u06BF\x03\x02\x02\x02\u06C1\u06C0\x03\x02\x02\x02" +
		"\u06C2\xF9\x03\x02\x02\x02\u06C3\u06C4\x05\u0130\x99\x02\u06C4\u06C8\x05" +
		"\xF8}\x02\u06C5\u06C6\x05\u012A\x96\x02\u06C6\u06C7\x05\xF8}\x02\u06C7" +
		"\u06C9\x03\x02\x02\x02\u06C8\u06C5\x03\x02\x02\x02\u06C9\u06CA\x03\x02" +
		"\x02\x02\u06CA\u06C8\x03\x02\x02\x02\u06CA\u06CB\x03\x02\x02\x02\u06CB" +
		"\u06CC\x03\x02\x02\x02\u06CC\u06CD\x05\u0132\x9A\x02\u06CD\xFB\x03\x02" +
		"\x02\x02\u06CE\u06CF\x07/\x02\x02\u06CF\u06D0\x072\x02\x02\u06D0\u06D1" +
		"\x070\x02\x02\u06D1\u06D2\x05\xF8}\x02\u06D2\xFD\x03\x02\x02\x02\u06D3" +
		"\u06D4\x07/\x02\x02\u06D4\u06D5\x070\x02\x02\u06D5\u06D6\x05\xF8}\x02" +
		"\u06D6\xFF\x03\x02\x02\x02\u06D7\u06D8\x07/\x02\x02\u06D8\u06D9\x05\xF8" +
		"}\x02\u06D9\u06DA\x070\x02\x02\u06DA\u0101\x03\x02\x02\x02\u06DB\u06DC" +
		"\x07/\x02\x02\u06DC\u06DD\x05\xF8}\x02\u06DD\u06DE\x070\x02\x02\u06DE" +
		"\u06DF\x05\xF8}\x02\u06DF\u0103\x03\x02\x02\x02\u06E0\u06E1\x07/\x02\x02" +
		"\u06E1\u06E2\x07#\x02\x02\u06E2\u06E3\x070\x02\x02\u06E3\u06E4\x05\xF8" +
		"}\x02\u06E4\u0105\x03\x02\x02\x02\u06E5\u06E7\x05\xC2b\x02\u06E6\u06E8" +
		"\x05\xCAf\x02\u06E7\u06E6\x03\x02\x02\x02\u06E7\u06E8\x03\x02\x02\x02" +
		"\u06E8\u0107\x03\x02\x02\x02\u06E9\u06EA\x05\u010C\x87\x02\u06EA\u06EE" +
		"\t\x02\x02\x02\u06EB\u06ED\x07]\x02\x02\u06EC\u06EB\x03\x02\x02\x02\u06ED" +
		"\u06F0\x03\x02\x02\x02\u06EE\u06EC\x03\x02\x02\x02\u06EE\u06EF\x03\x02" +
		"\x02\x02\u06EF\u06F1\x03\x02\x02\x02\u06F0\u06EE\x03\x02\x02\x02\u06F1" +
		"\u06F2\x05\u010C\x87\x02\u06F2\u0109\x03\x02\x02\x02\u06F3\u06F4\x07O" +
		"\x02\x02\u06F4\u010B\x03\x02\x02\x02\u06F5\u06F7\x05\u0130\x99\x02\u06F6" +
		"\u06F8\x05\xF8}\x02\u06F7\u06F6\x03\x02\x02\x02\u06F7\u06F8\x03\x02\x02" +
		"\x02\u06F8\u06FE\x03\x02\x02\x02\u06F9\u06FA\x05\u012A\x96\x02\u06FA\u06FB" +
		"\x05\xF8}\x02\u06FB\u06FD\x03\x02\x02\x02\u06FC\u06F9\x03\x02\x02\x02" +
		"\u06FD\u0700\x03\x02\x02\x02\u06FE\u06FC\x03\x02\x02\x02\u06FE\u06FF\x03" +
		"\x02\x02\x02\u06FF\u0701\x03\x02\x02\x02\u0700\u06FE\x03\x02\x02\x02\u0701" +
		"\u0702\x05\u0132\x9A\x02\u0702\u010D\x03\x02\x02\x02\u0703\u0714\x07?" +
		"\x02\x02\u0704\u0714\x07@\x02\x02\u0705\u0714\x07A\x02\x02\u0706\u0714" +
		"\x07B\x02\x02\u0707\u0714\x07C\x02\x02\u0708\u0714\x07D\x02\x02\u0709" +
		"\u0714\x07E\x02\x02\u070A\u0714\x07F\x02\x02\u070B\u0714\x07G\x02\x02" +
		"\u070C\u0714\x07H\x02\x02\u070D\u0714\x07I\x02\x02\u070E\u0714\x07J\x02" +
		"\x02\u070F\u0714\x07K\x02\x02\u0710\u0714\x07L\x02\x02\u0711\u0714\x07" +
		"M\x02\x02\u0712\u0714\x07N\x02\x02\u0713\u0703\x03\x02\x02\x02\u0713\u0704" +
		"\x03\x02\x02\x02\u0713\u0705\x03\x02\x02\x02\u0713\u0706\x03\x02\x02\x02" +
		"\u0713\u0707\x03\x02\x02\x02\u0713\u0708\x03\x02\x02\x02\u0713\u0709\x03" +
		"\x02\x02\x02\u0713\u070A\x03\x02\x02\x02\u0713\u070B\x03\x02\x02\x02\u0713" +
		"\u070C\x03\x02\x02\x02\u0713\u070D\x03\x02\x02\x02\u0713\u070E\x03\x02" +
		"\x02\x02\u0713\u070F\x03\x02\x02\x02\u0713\u0710\x03\x02\x02\x02\u0713" +
		"\u0711\x03\x02\x02\x02\u0713\u0712\x03\x02\x02\x02\u0714\u010F\x03\x02" +
		"\x02\x02\u0715\u0716\x07P\x02\x02\u0716\u0111\x03\x02\x02\x02\u0717\u071A" +
		"\x07Q\x02\x02\u0718\u071A\x07R\x02\x02\u0719\u0717\x03\x02\x02\x02\u0719" +
		"\u0718\x03\x02\x02\x02\u071A\u0113\x03\x02\x02\x02\u071B\u071C\t\x06\x02" +
		"\x02\u071C\u071D\x072\x02\x02\u071D\u0115\x03\x02\x02\x02\u071E\u0720" +
		"\t\x07\x02\x02\u071F\u0721\x07]\x02\x02\u0720\u071F\x03\x02\x02\x02\u0720" +
		"\u0721\x03\x02\x02\x02\u0721\u0117\x03\x02\x02\x02\u0722\u0724\t\b\x02" +
		"\x02\u0723\u0725\x07]\x02\x02\u0724\u0723\x03\x02\x02\x02\u0724\u0725" +
		"\x03\x02\x02\x02\u0725\u0119\x03\x02\x02\x02\u0726\u0728\t\t\x02\x02\u0727" +
		"\u0729\x07]\x02\x02\u0728\u0727\x03\x02\x02\x02\u0728\u0729\x03\x02\x02" +
		"\x02\u0729\u011B\x03\x02\x02\x02\u072A\u072C\t\n\x02\x02\u072B\u072D\x07" +
		"]\x02\x02\u072C\u072B\x03\x02\x02\x02\u072C\u072D\x03\x02\x02\x02\u072D" +
		"\u011D\x03\x02\x02\x02\u072E\u0730\t\v\x02\x02\u072F\u0731\x07]\x02\x02" +
		"\u0730\u072F\x03\x02\x02\x02\u0730\u0731\x03\x02\x02\x02\u0731\u011F\x03" +
		"\x02\x02\x02\u0732\u0734\x07 \x02\x02\u0733\u0735\x07]\x02\x02\u0734\u0733" +
		"\x03\x02\x02\x02\u0734\u0735\x03\x02\x02\x02\u0735\u0121\x03\x02\x02\x02" +
		"\u0736\u0737\x076\x02\x02\u0737\u0123\x03\x02\x02\x02\u0738\u0739\x05" +
		"\u0126\x94\x02\u0739\u0125\x03\x02\x02\x02\u073A\u073F\t\f\x02\x02\u073B" +
		"\u073F\x05\u010E\x88\x02\u073C\u073F\x05\u010A\x86\x02\u073D\u073F\x05" +
		"\xE2r\x02\u073E\u073A\x03\x02\x02\x02\u073E\u073B\x03\x02\x02\x02\u073E" +
		"\u073C\x03\x02\x02\x02\u073E\u073D\x03\x02\x02\x02\u073F\u0127\x03\x02" +
		"\x02\x02\u0740\u0741\t\r\x02\x02\u0741\u0129\x03\x02\x02\x02\u0742\u0746" +
		"\x07!\x02\x02\u0743\u0745\x07]\x02\x02\u0744\u0743\x03\x02\x02\x02\u0745" +
		"\u0748\x03\x02\x02\x02\u0746\u0744\x03\x02\x02\x02\u0746\u0747\x03\x02" +
		"\x02\x02\u0747\u012B\x03\x02\x02\x02\u0748\u0746\x03\x02\x02\x02\u0749" +
		"\u074D\x07-\x02\x02\u074A\u074C\x07]\x02\x02\u074B\u074A\x03\x02\x02\x02" +
		"\u074C\u074F\x03\x02\x02\x02\u074D\u074B\x03\x02\x02\x02\u074D\u074E\x03" +
		"\x02\x02\x02\u074E\u012D\x03\x02\x02\x02\u074F\u074D\x03\x02\x02\x02\u0750" +
		"\u0752\x07]\x02\x02\u0751\u0750\x03\x02\x02\x02\u0752\u0755\x03\x02\x02" +
		"\x02\u0753\u0751\x03\x02\x02\x02\u0753\u0754\x03\x02\x02\x02\u0754\u0756" +
		"\x03\x02\x02\x02\u0755\u0753\x03\x02\x02\x02\u0756\u0757\x07.\x02\x02" +
		"\u0757\u012F\x03\x02\x02\x02\u0758\u0759\x07+\x02\x02\u0759\u0131\x03" +
		"\x02\x02\x02\u075A\u075B\x07,\x02\x02\u075B\u0133\x03\x02\x02\x02\u075C" +
		"\u0760\x07/\x02\x02\u075D\u075F\x07]\x02\x02\u075E\u075D\x03\x02\x02\x02" +
		"\u075F\u0762\x03\x02\x02\x02\u0760\u075E\x03\x02\x02\x02\u0760\u0761\x03" +
		"\x02\x02\x02\u0761\u0135\x03\x02\x02\x02\u0762\u0760\x03\x02\x02\x02\u0763" +
		"\u0765\x07]\x02\x02\u0764\u0763\x03\x02\x02\x02\u0765\u0768\x03\x02\x02" +
		"\x02\u0766\u0764\x03\x02\x02\x02\u0766\u0767\x03\x02\x02\x02\u0767\u0769" +
		"\x03\x02\x02\x02\u0768\u0766\x03\x02\x02\x02\u0769\u076A\x070\x02\x02" +
		"\u076A\u0137\x03\x02\x02\x02\xC6\u013B\u0140\u0144\u014A\u0150\u0157\u0159" +
		"\u0160\u0165\u0167\u0178\u0185\u018C\u0194\u019D\u01A0\u01A5\u01AE\u01B0" +
		"\u01B5\u01BC\u01C2\u01C7\u01CF\u01D5\u01D9\u01E0\u01E8\u01EF\u01F3\u01FA" +
		"\u0204\u020B\u0213\u0217\u021D\u0223\u022C\u022E\u0237\u023D\u024C\u0251" +
		"\u0258\u0261\u0264\u0267\u026B\u0272\u027A\u0281\u0284\u028D\u0299\u02A0" +
		"\u02A9\u02AC\u02AF\u02B3\u02BA\u02C2\u02C9\u02CC\u02D5\u02DA\u02DE\u02E5" +
		"\u02EF\u02F2\u02FD\u0305\u0309\u0310\u0318\u031F\u0327\u0333\u033A\u0341" +
		"\u0348\u0354\u035B\u0370\u0377\u0380\u0387\u038B\u0391\u0398\u039E\u03A8" +
		"\u03AD\u03B4\u03BF\u03C9\u03D5\u03E1\u03E8\u03F4\u03FF\u0412\u0419\u0424" +
		"\u042B\u042F\u0436\u043F\u0445\u044F\u0457\u046A\u0472\u048E\u0496\u04AC" +
		"\u04CE\u04D0\u04D8\u04DD\u04E3\u04ED\u04F0\u04FA\u04FF\u0505\u0510\u051B" +
		"\u0520\u0525\u052B\u052F\u0533\u053B\u0540\u054A\u0553\u0556\u0559\u0562" +
		"\u0571\u057E\u058B\u0594\u05A1\u05B1\u05BD\u05CA\u05D9\u05DD\u05E5\u05EB" +
		"\u05F5\u05FD\u0606\u060D\u0613\u061B\u0621\u0627\u062C\u0634\u0640\u064E" +
		"\u0656\u0662\u066F\u0674\u0679\u067D\u0683\u0687\u068B\u0695\u06A2\u06B4" +
		"\u06B9\u06C1\u06CA\u06E7\u06EE\u06F7\u06FE\u0713\u0719\u0720\u0724\u0728" +
		"\u072C\u0730\u0734\u073E\u0746\u074D\u0753\u0760\u0766";
	public static readonly _serializedATN: string = Utils.join(
		[
			LiteParser._serializedATNSegment0,
			LiteParser._serializedATNSegment1,
			LiteParser._serializedATNSegment2,
			LiteParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LiteParser.__ATN) {
			LiteParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LiteParser._serializedATN));
		}

		return LiteParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_program; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public exportStatement(): ExportStatementContext {
		return this.getRuleContext(0, ExportStatementContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public namespaceSupportStatement(): NamespaceSupportStatementContext[];
	public namespaceSupportStatement(i: number): NamespaceSupportStatementContext;
	public namespaceSupportStatement(i?: number): NamespaceSupportStatementContext | NamespaceSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamespaceSupportStatementContext);
		} else {
			return this.getRuleContext(i, NamespaceSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_statement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportStatementContext extends ParserRuleContext {
	public TextLiteral(): TerminalNode { return this.getToken(LiteParser.TextLiteral, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public importStatement(): ImportStatementContext[];
	public importStatement(i: number): ImportStatementContext;
	public importStatement(i?: number): ImportStatementContext | ImportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImportStatementContext);
		} else {
			return this.getRuleContext(i, ImportStatementContext);
		}
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_exportStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterExportStatement) {
			listener.enterExportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitExportStatement) {
			listener.exitExportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitExportStatement) {
			return visitor.visitExportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	public TextLiteral(): TerminalNode { return this.getToken(LiteParser.TextLiteral, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_importStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterImportStatement) {
			listener.enterImportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitImportStatement) {
			listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceSupportStatementContext extends ParserRuleContext {
	public namespaceVariableStatement(): NamespaceVariableStatementContext | undefined {
		return this.tryGetRuleContext(0, NamespaceVariableStatementContext);
	}
	public namespaceControlStatement(): NamespaceControlStatementContext | undefined {
		return this.tryGetRuleContext(0, NamespaceControlStatementContext);
	}
	public namespaceFunctionStatement(): NamespaceFunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, NamespaceFunctionStatementContext);
	}
	public namespaceConstantStatement(): NamespaceConstantStatementContext | undefined {
		return this.tryGetRuleContext(0, NamespaceConstantStatementContext);
	}
	public packageStatement(): PackageStatementContext | undefined {
		return this.tryGetRuleContext(0, PackageStatementContext);
	}
	public protocolStatement(): ProtocolStatementContext | undefined {
		return this.tryGetRuleContext(0, ProtocolStatementContext);
	}
	public implementStatement(): ImplementStatementContext | undefined {
		return this.tryGetRuleContext(0, ImplementStatementContext);
	}
	public overrideStatement(): OverrideStatementContext | undefined {
		return this.tryGetRuleContext(0, OverrideStatementContext);
	}
	public packageNewStatement(): PackageNewStatementContext | undefined {
		return this.tryGetRuleContext(0, PackageNewStatementContext);
	}
	public enumStatement(): EnumStatementContext | undefined {
		return this.tryGetRuleContext(0, EnumStatementContext);
	}
	public typeAliasStatement(): TypeAliasStatementContext | undefined {
		return this.tryGetRuleContext(0, TypeAliasStatementContext);
	}
	public typeRedefineStatement(): TypeRedefineStatementContext | undefined {
		return this.tryGetRuleContext(0, TypeRedefineStatementContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_namespaceSupportStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterNamespaceSupportStatement) {
			listener.enterNamespaceSupportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitNamespaceSupportStatement) {
			listener.exitNamespaceSupportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNamespaceSupportStatement) {
			return visitor.visitNamespaceSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAliasStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Equal_Arrow(): TerminalNode { return this.getToken(LiteParser.Equal_Arrow, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeAliasStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeAliasStatement) {
			listener.enterTypeAliasStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeAliasStatement) {
			listener.exitTypeAliasStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeAliasStatement) {
			return visitor.visitTypeAliasStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeRedefineStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeRedefineStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeRedefineStatement) {
			listener.enterTypeRedefineStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeRedefineStatement) {
			listener.exitTypeRedefineStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeRedefineStatement) {
			return visitor.visitTypeRedefineStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public enumSupportStatement(): EnumSupportStatementContext[];
	public enumSupportStatement(i: number): EnumSupportStatementContext;
	public enumSupportStatement(i?: number): EnumSupportStatementContext | EnumSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumSupportStatementContext);
		} else {
			return this.getRuleContext(i, EnumSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_enumStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterEnumStatement) {
			listener.enterEnumStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitEnumStatement) {
			listener.exitEnumStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitEnumStatement) {
			return visitor.visitEnumStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumSupportStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	public integerExpr(): IntegerExprContext | undefined {
		return this.tryGetRuleContext(0, IntegerExprContext);
	}
	public add(): AddContext | undefined {
		return this.tryGetRuleContext(0, AddContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_enumSupportStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterEnumSupportStatement) {
			listener.enterEnumSupportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitEnumSupportStatement) {
			listener.exitEnumSupportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitEnumSupportStatement) {
			return visitor.visitEnumSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceVariableStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Colon_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon_Equal, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_namespaceVariableStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterNamespaceVariableStatement) {
			listener.enterNamespaceVariableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitNamespaceVariableStatement) {
			listener.exitNamespaceVariableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNamespaceVariableStatement) {
			return visitor.visitNamespaceVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceControlStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public packageControlSubStatement(): PackageControlSubStatementContext[];
	public packageControlSubStatement(i: number): PackageControlSubStatementContext;
	public packageControlSubStatement(i?: number): PackageControlSubStatementContext | PackageControlSubStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageControlSubStatementContext);
		} else {
			return this.getRuleContext(i, PackageControlSubStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_namespaceControlStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterNamespaceControlStatement) {
			listener.enterNamespaceControlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitNamespaceControlStatement) {
			listener.exitNamespaceControlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNamespaceControlStatement) {
			return visitor.visitNamespaceControlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceConstantStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Colon(): TerminalNode[];
	public Colon(i: number): TerminalNode;
	public Colon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Colon);
		} else {
			return this.getToken(LiteParser.Colon, i);
		}
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public Colon_Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon_Colon, 0); }
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_namespaceConstantStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterNamespaceConstantStatement) {
			listener.enterNamespaceConstantStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitNamespaceConstantStatement) {
			listener.exitNamespaceConstantStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNamespaceConstantStatement) {
			return visitor.visitNamespaceConstantStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceFunctionStatementContext extends ParserRuleContext {
	public _t: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public parameterClauseOut(): ParameterClauseOutContext {
		return this.getRuleContext(0, ParameterClauseOutContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_namespaceFunctionStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterNamespaceFunctionStatement) {
			listener.enterNamespaceFunctionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitNamespaceFunctionStatement) {
			listener.exitNamespaceFunctionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNamespaceFunctionStatement) {
			return visitor.visitNamespaceFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public packageSupportStatement(): PackageSupportStatementContext[];
	public packageSupportStatement(i: number): PackageSupportStatementContext;
	public packageSupportStatement(i?: number): PackageSupportStatementContext | PackageSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageSupportStatementContext);
		} else {
			return this.getRuleContext(i, PackageSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_packageStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPackageStatement) {
			listener.enterPackageStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPackageStatement) {
			listener.exitPackageStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageStatement) {
			return visitor.visitPackageStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageSupportStatementContext extends ParserRuleContext {
	public includeStatement(): IncludeStatementContext | undefined {
		return this.tryGetRuleContext(0, IncludeStatementContext);
	}
	public packageVariableStatement(): PackageVariableStatementContext | undefined {
		return this.tryGetRuleContext(0, PackageVariableStatementContext);
	}
	public packageEventStatement(): PackageEventStatementContext | undefined {
		return this.tryGetRuleContext(0, PackageEventStatementContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_packageSupportStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPackageSupportStatement) {
			listener.enterPackageSupportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPackageSupportStatement) {
			listener.exitPackageSupportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageSupportStatement) {
			return visitor.visitPackageSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncludeStatementContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_includeStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterIncludeStatement) {
			listener.enterIncludeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitIncludeStatement) {
			listener.exitIncludeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitIncludeStatement) {
			return visitor.visitIncludeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageNewStatementContext extends ParserRuleContext {
	public parameterClauseSelf(): ParameterClauseSelfContext {
		return this.getRuleContext(0, ParameterClauseSelfContext);
	}
	public Less(): TerminalNode { return this.getToken(LiteParser.Less, 0); }
	public Greater(): TerminalNode { return this.getToken(LiteParser.Greater, 0); }
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public left_paren(): Left_parenContext | undefined {
		return this.tryGetRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext | undefined {
		return this.tryGetRuleContext(0, Right_parenContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_packageNewStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPackageNewStatement) {
			listener.enterPackageNewStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPackageNewStatement) {
			listener.exitPackageNewStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageNewStatement) {
			return visitor.visitPackageNewStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageVariableStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Colon_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon_Equal, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_packageVariableStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPackageVariableStatement) {
			listener.enterPackageVariableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPackageVariableStatement) {
			listener.exitPackageVariableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageVariableStatement) {
			return visitor.visitPackageVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageControlSubStatementContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public left_paren(): Left_parenContext | undefined {
		return this.tryGetRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext | undefined {
		return this.tryGetRuleContext(0, Right_parenContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_packageControlSubStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPackageControlSubStatement) {
			listener.enterPackageControlSubStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPackageControlSubStatement) {
			listener.exitPackageControlSubStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageControlSubStatement) {
			return visitor.visitPackageControlSubStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackageEventStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public left_brack(): Left_brackContext {
		return this.getRuleContext(0, Left_brackContext);
	}
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
	public right_brack(): Right_brackContext {
		return this.getRuleContext(0, Right_brackContext);
	}
	public nameSpaceItem(): NameSpaceItemContext {
		return this.getRuleContext(0, NameSpaceItemContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_packageEventStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPackageEventStatement) {
			listener.enterPackageEventStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPackageEventStatement) {
			listener.exitPackageEventStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPackageEventStatement) {
			return visitor.visitPackageEventStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementStatementContext extends ParserRuleContext {
	public parameterClauseSelf(): ParameterClauseSelfContext {
		return this.getRuleContext(0, ParameterClauseSelfContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public implementSupportStatement(): ImplementSupportStatementContext[];
	public implementSupportStatement(i: number): ImplementSupportStatementContext;
	public implementSupportStatement(i?: number): ImplementSupportStatementContext | ImplementSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ImplementSupportStatementContext);
		} else {
			return this.getRuleContext(i, ImplementSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_implementStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterImplementStatement) {
			listener.enterImplementStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitImplementStatement) {
			listener.exitImplementStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitImplementStatement) {
			return visitor.visitImplementStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementSupportStatementContext extends ParserRuleContext {
	public implementFunctionStatement(): ImplementFunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, ImplementFunctionStatementContext);
	}
	public implementControlStatement(): ImplementControlStatementContext | undefined {
		return this.tryGetRuleContext(0, ImplementControlStatementContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_implementSupportStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterImplementSupportStatement) {
			listener.enterImplementSupportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitImplementSupportStatement) {
			listener.exitImplementSupportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitImplementSupportStatement) {
			return visitor.visitImplementSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementFunctionStatementContext extends ParserRuleContext {
	public _n: Token;
	public _t: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public parameterClauseOut(): ParameterClauseOutContext {
		return this.getRuleContext(0, ParameterClauseOutContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	public Discard(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Discard, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_implementFunctionStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterImplementFunctionStatement) {
			listener.enterImplementFunctionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitImplementFunctionStatement) {
			listener.exitImplementFunctionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitImplementFunctionStatement) {
			return visitor.visitImplementFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementControlStatementContext extends ParserRuleContext {
	public _n: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public packageControlSubStatement(): PackageControlSubStatementContext[];
	public packageControlSubStatement(i: number): PackageControlSubStatementContext;
	public packageControlSubStatement(i?: number): PackageControlSubStatementContext | PackageControlSubStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageControlSubStatementContext);
		} else {
			return this.getRuleContext(i, PackageControlSubStatementContext);
		}
	}
	public Discard(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Discard, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_implementControlStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterImplementControlStatement) {
			listener.enterImplementControlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitImplementControlStatement) {
			listener.exitImplementControlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitImplementControlStatement) {
			return visitor.visitImplementControlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideStatementContext extends ParserRuleContext {
	public parameterClauseSelf(): ParameterClauseSelfContext {
		return this.getRuleContext(0, ParameterClauseSelfContext);
	}
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public overrideSupportStatement(): OverrideSupportStatementContext[];
	public overrideSupportStatement(i: number): OverrideSupportStatementContext;
	public overrideSupportStatement(i?: number): OverrideSupportStatementContext | OverrideSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OverrideSupportStatementContext);
		} else {
			return this.getRuleContext(i, OverrideSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_overrideStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterOverrideStatement) {
			listener.enterOverrideStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitOverrideStatement) {
			listener.exitOverrideStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitOverrideStatement) {
			return visitor.visitOverrideStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideSupportStatementContext extends ParserRuleContext {
	public overrideFunctionStatement(): OverrideFunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, OverrideFunctionStatementContext);
	}
	public overrideControlStatement(): OverrideControlStatementContext | undefined {
		return this.tryGetRuleContext(0, OverrideControlStatementContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_overrideSupportStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterOverrideSupportStatement) {
			listener.enterOverrideSupportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitOverrideSupportStatement) {
			listener.exitOverrideSupportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitOverrideSupportStatement) {
			return visitor.visitOverrideSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideFunctionStatementContext extends ParserRuleContext {
	public _n: Token;
	public _t: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public parameterClauseOut(): ParameterClauseOutContext {
		return this.getRuleContext(0, ParameterClauseOutContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	public Discard(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Discard, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_overrideFunctionStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterOverrideFunctionStatement) {
			listener.enterOverrideFunctionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitOverrideFunctionStatement) {
			listener.exitOverrideFunctionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitOverrideFunctionStatement) {
			return visitor.visitOverrideFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OverrideControlStatementContext extends ParserRuleContext {
	public _n: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public packageControlSubStatement(): PackageControlSubStatementContext[];
	public packageControlSubStatement(i: number): PackageControlSubStatementContext;
	public packageControlSubStatement(i?: number): PackageControlSubStatementContext | PackageControlSubStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PackageControlSubStatementContext);
		} else {
			return this.getRuleContext(i, PackageControlSubStatementContext);
		}
	}
	public Discard(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Discard, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_overrideControlStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterOverrideControlStatement) {
			listener.enterOverrideControlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitOverrideControlStatement) {
			listener.exitOverrideControlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitOverrideControlStatement) {
			return visitor.visitOverrideControlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProtocolStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public protocolSupportStatement(): ProtocolSupportStatementContext[];
	public protocolSupportStatement(i: number): ProtocolSupportStatementContext;
	public protocolSupportStatement(i?: number): ProtocolSupportStatementContext | ProtocolSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProtocolSupportStatementContext);
		} else {
			return this.getRuleContext(i, ProtocolSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_protocolStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterProtocolStatement) {
			listener.enterProtocolStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitProtocolStatement) {
			listener.exitProtocolStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitProtocolStatement) {
			return visitor.visitProtocolStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProtocolSupportStatementContext extends ParserRuleContext {
	public includeStatement(): IncludeStatementContext | undefined {
		return this.tryGetRuleContext(0, IncludeStatementContext);
	}
	public protocolFunctionStatement(): ProtocolFunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, ProtocolFunctionStatementContext);
	}
	public protocolControlStatement(): ProtocolControlStatementContext | undefined {
		return this.tryGetRuleContext(0, ProtocolControlStatementContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_protocolSupportStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterProtocolSupportStatement) {
			listener.enterProtocolSupportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitProtocolSupportStatement) {
			listener.exitProtocolSupportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitProtocolSupportStatement) {
			return visitor.visitProtocolSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProtocolControlStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public protocolControlSubStatement(): ProtocolControlSubStatementContext[];
	public protocolControlSubStatement(i: number): ProtocolControlSubStatementContext;
	public protocolControlSubStatement(i?: number): ProtocolControlSubStatementContext | ProtocolControlSubStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProtocolControlSubStatementContext);
		} else {
			return this.getRuleContext(i, ProtocolControlSubStatementContext);
		}
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Comma);
		} else {
			return this.getToken(LiteParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_protocolControlStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterProtocolControlStatement) {
			listener.enterProtocolControlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitProtocolControlStatement) {
			listener.exitProtocolControlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitProtocolControlStatement) {
			return visitor.visitProtocolControlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProtocolControlSubStatementContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_protocolControlSubStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterProtocolControlSubStatement) {
			listener.enterProtocolControlSubStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitProtocolControlSubStatement) {
			listener.exitProtocolControlSubStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitProtocolControlSubStatement) {
			return visitor.visitProtocolControlSubStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProtocolFunctionStatementContext extends ParserRuleContext {
	public _t: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public parameterClauseOut(): ParameterClauseOutContext {
		return this.getRuleContext(0, ParameterClauseOutContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_protocolFunctionStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterProtocolFunctionStatement) {
			listener.enterProtocolFunctionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitProtocolFunctionStatement) {
			listener.exitProtocolFunctionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitProtocolFunctionStatement) {
			return visitor.visitProtocolFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionStatementContext extends ParserRuleContext {
	public _t: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public parameterClauseOut(): ParameterClauseOutContext {
		return this.getRuleContext(0, ParameterClauseOutContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public templateDefine(): TemplateDefineContext | undefined {
		return this.tryGetRuleContext(0, TemplateDefineContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_functionStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterFunctionStatement) {
			listener.enterFunctionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitFunctionStatement) {
			listener.exitFunctionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitFunctionStatement) {
			return visitor.visitFunctionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public tuple(): TupleContext {
		return this.getRuleContext(0, TupleContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterClauseInContext extends ParserRuleContext {
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_parameterClauseIn; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterParameterClauseIn) {
			listener.enterParameterClauseIn(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitParameterClauseIn) {
			listener.exitParameterClauseIn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitParameterClauseIn) {
			return visitor.visitParameterClauseIn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterClauseOutContext extends ParserRuleContext {
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_parameterClauseOut; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterParameterClauseOut) {
			listener.enterParameterClauseOut(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitParameterClauseOut) {
			listener.exitParameterClauseOut(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitParameterClauseOut) {
			return visitor.visitParameterClauseOut(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterClauseSelfContext extends ParserRuleContext {
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_parameterClauseSelf; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterParameterClauseSelf) {
			listener.enterParameterClauseSelf(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitParameterClauseSelf) {
			listener.exitParameterClauseSelf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitParameterClauseSelf) {
			return visitor.visitParameterClauseSelf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public annotationSupport(): AnnotationSupportContext | undefined {
		return this.tryGetRuleContext(0, AnnotationSupportContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_parameter; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionSupportStatementContext extends ParserRuleContext {
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public judgeCaseStatement(): JudgeCaseStatementContext | undefined {
		return this.tryGetRuleContext(0, JudgeCaseStatementContext);
	}
	public judgeStatement(): JudgeStatementContext | undefined {
		return this.tryGetRuleContext(0, JudgeStatementContext);
	}
	public loopStatement(): LoopStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopStatementContext);
	}
	public loopEachStatement(): LoopEachStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopEachStatementContext);
	}
	public loopCaseStatement(): LoopCaseStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopCaseStatementContext);
	}
	public loopInfiniteStatement(): LoopInfiniteStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopInfiniteStatementContext);
	}
	public loopJumpStatement(): LoopJumpStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopJumpStatementContext);
	}
	public loopContinueStatement(): LoopContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopContinueStatementContext);
	}
	public usingStatement(): UsingStatementContext | undefined {
		return this.tryGetRuleContext(0, UsingStatementContext);
	}
	public checkStatement(): CheckStatementContext | undefined {
		return this.tryGetRuleContext(0, CheckStatementContext);
	}
	public reportStatement(): ReportStatementContext | undefined {
		return this.tryGetRuleContext(0, ReportStatementContext);
	}
	public functionStatement(): FunctionStatementContext | undefined {
		return this.tryGetRuleContext(0, FunctionStatementContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public variableDeclaredStatement(): VariableDeclaredStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclaredStatementContext);
	}
	public channelAssignStatement(): ChannelAssignStatementContext | undefined {
		return this.tryGetRuleContext(0, ChannelAssignStatementContext);
	}
	public assignStatement(): AssignStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_functionSupportStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterFunctionSupportStatement) {
			listener.enterFunctionSupportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitFunctionSupportStatement) {
			listener.exitFunctionSupportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitFunctionSupportStatement) {
			return visitor.visitFunctionSupportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeCaseStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public caseStatement(): CaseStatementContext[];
	public caseStatement(i: number): CaseStatementContext;
	public caseStatement(i?: number): CaseStatementContext | CaseStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CaseStatementContext);
		} else {
			return this.getRuleContext(i, CaseStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeCaseStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterJudgeCaseStatement) {
			listener.enterJudgeCaseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitJudgeCaseStatement) {
			listener.exitJudgeCaseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeCaseStatement) {
			return visitor.visitJudgeCaseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseDefaultStatementContext extends ParserRuleContext {
	public Discard(): TerminalNode { return this.getToken(LiteParser.Discard, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_caseDefaultStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCaseDefaultStatement) {
			listener.enterCaseDefaultStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCaseDefaultStatement) {
			listener.exitCaseDefaultStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCaseDefaultStatement) {
			return visitor.visitCaseDefaultStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseExprStatementContext extends ParserRuleContext {
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_caseExprStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCaseExprStatement) {
			listener.enterCaseExprStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCaseExprStatement) {
			listener.exitCaseExprStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCaseExprStatement) {
			return visitor.visitCaseExprStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseStatementContext extends ParserRuleContext {
	public caseDefaultStatement(): CaseDefaultStatementContext | undefined {
		return this.tryGetRuleContext(0, CaseDefaultStatementContext);
	}
	public caseExprStatement(): CaseExprStatementContext | undefined {
		return this.tryGetRuleContext(0, CaseExprStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_caseStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCaseStatement) {
			listener.enterCaseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCaseStatement) {
			listener.exitCaseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCaseStatement) {
			return visitor.visitCaseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeStatementContext extends ParserRuleContext {
	public judgeIfStatement(): JudgeIfStatementContext {
		return this.getRuleContext(0, JudgeIfStatementContext);
	}
	public judgeElseStatement(): JudgeElseStatementContext | undefined {
		return this.tryGetRuleContext(0, JudgeElseStatementContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public judgeElseIfStatement(): JudgeElseIfStatementContext[];
	public judgeElseIfStatement(i: number): JudgeElseIfStatementContext;
	public judgeElseIfStatement(i?: number): JudgeElseIfStatementContext | JudgeElseIfStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(JudgeElseIfStatementContext);
		} else {
			return this.getRuleContext(i, JudgeElseIfStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterJudgeStatement) {
			listener.enterJudgeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitJudgeStatement) {
			listener.exitJudgeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeStatement) {
			return visitor.visitJudgeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeElseStatementContext extends ParserRuleContext {
	public Discard(): TerminalNode { return this.getToken(LiteParser.Discard, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeElseStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterJudgeElseStatement) {
			listener.enterJudgeElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitJudgeElseStatement) {
			listener.exitJudgeElseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeElseStatement) {
			return visitor.visitJudgeElseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeIfStatementContext extends ParserRuleContext {
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeIfStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterJudgeIfStatement) {
			listener.enterJudgeIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitJudgeIfStatement) {
			listener.exitJudgeIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeIfStatement) {
			return visitor.visitJudgeIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeElseIfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeElseIfStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterJudgeElseIfStatement) {
			listener.enterJudgeElseIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitJudgeElseIfStatement) {
			listener.exitJudgeElseIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeElseIfStatement) {
			return visitor.visitJudgeElseIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopStatementContext extends ParserRuleContext {
	public iteratorStatement(): IteratorStatementContext {
		return this.getRuleContext(0, IteratorStatementContext);
	}
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLoopStatement) {
			listener.enterLoopStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLoopStatement) {
			listener.exitLoopStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopStatement) {
			return visitor.visitLoopStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopEachStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Left_Brack(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Left_Brack, 0); }
	public Right_Brack(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Brack, 0); }
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopEachStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLoopEachStatement) {
			listener.enterLoopEachStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLoopEachStatement) {
			listener.exitLoopEachStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopEachStatement) {
			return visitor.visitLoopEachStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopCaseStatementContext extends ParserRuleContext {
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopCaseStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLoopCaseStatement) {
			listener.enterLoopCaseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLoopCaseStatement) {
			listener.exitLoopCaseStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopCaseStatement) {
			return visitor.visitLoopCaseStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopInfiniteStatementContext extends ParserRuleContext {
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopInfiniteStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLoopInfiniteStatement) {
			listener.enterLoopInfiniteStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLoopInfiniteStatement) {
			listener.exitLoopInfiniteStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopInfiniteStatement) {
			return visitor.visitLoopInfiniteStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopJumpStatementContext extends ParserRuleContext {
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopJumpStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLoopJumpStatement) {
			listener.enterLoopJumpStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLoopJumpStatement) {
			listener.exitLoopJumpStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopJumpStatement) {
			return visitor.visitLoopJumpStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopContinueStatementContext extends ParserRuleContext {
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public At(): TerminalNode { return this.getToken(LiteParser.At, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_loopContinueStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLoopContinueStatement) {
			listener.enterLoopContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLoopContinueStatement) {
			listener.exitLoopContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLoopContinueStatement) {
			return visitor.visitLoopContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CheckStatementContext extends ParserRuleContext {
	public Bang(): TerminalNode { return this.getToken(LiteParser.Bang, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public checkFinallyStatment(): CheckFinallyStatmentContext | undefined {
		return this.tryGetRuleContext(0, CheckFinallyStatmentContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	public checkErrorStatement(): CheckErrorStatementContext[];
	public checkErrorStatement(i: number): CheckErrorStatementContext;
	public checkErrorStatement(i?: number): CheckErrorStatementContext | CheckErrorStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CheckErrorStatementContext);
		} else {
			return this.getRuleContext(i, CheckErrorStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_checkStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCheckStatement) {
			listener.enterCheckStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCheckStatement) {
			listener.exitCheckStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCheckStatement) {
			return visitor.visitCheckStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UsingStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Bang(): TerminalNode { return this.getToken(LiteParser.Bang, 0); }
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_usingStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterUsingStatement) {
			listener.enterUsingStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitUsingStatement) {
			listener.exitUsingStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitUsingStatement) {
			return visitor.visitUsingStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CheckErrorStatementContext extends ParserRuleContext {
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_checkErrorStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCheckErrorStatement) {
			listener.enterCheckErrorStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCheckErrorStatement) {
			listener.exitCheckErrorStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCheckErrorStatement) {
			return visitor.visitCheckErrorStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CheckFinallyStatmentContext extends ParserRuleContext {
	public Discard(): TerminalNode { return this.getToken(LiteParser.Discard, 0); }
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_checkFinallyStatment; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCheckFinallyStatment) {
			listener.enterCheckFinallyStatment(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCheckFinallyStatment) {
			listener.exitCheckFinallyStatment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCheckFinallyStatment) {
			return visitor.visitCheckFinallyStatment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReportStatementContext extends ParserRuleContext {
	public Bang(): TerminalNode { return this.getToken(LiteParser.Bang, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_reportStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterReportStatement) {
			listener.enterReportStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitReportStatement) {
			listener.exitReportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitReportStatement) {
			return visitor.visitReportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IteratorStatementContext extends ParserRuleContext {
	public _op: Token;
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public more(): MoreContext | undefined {
		return this.tryGetRuleContext(0, MoreContext);
	}
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less, 0); }
	public Less_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less_Equal, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater, 0); }
	public Greater_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater_Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_iteratorStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterIteratorStatement) {
			listener.enterIteratorStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitIteratorStatement) {
			listener.exitIteratorStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitIteratorStatement) {
			return visitor.visitIteratorStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	public Colon_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon_Equal, 0); }
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_variableStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterVariableStatement) {
			listener.enterVariableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitVariableStatement) {
			listener.exitVariableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitVariableStatement) {
			return visitor.visitVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclaredStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_variableDeclaredStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterVariableDeclaredStatement) {
			listener.enterVariableDeclaredStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitVariableDeclaredStatement) {
			listener.exitVariableDeclaredStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaredStatement) {
			return visitor.visitVariableDeclaredStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChannelAssignStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public assign(): AssignContext {
		return this.getRuleContext(0, AssignContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_channelAssignStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterChannelAssignStatement) {
			listener.enterChannelAssignStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitChannelAssignStatement) {
			listener.exitChannelAssignStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitChannelAssignStatement) {
			return visitor.visitChannelAssignStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public assign(): AssignContext {
		return this.getRuleContext(0, AssignContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_assignStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterAssignStatement) {
			listener.enterAssignStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitAssignStatement) {
			listener.exitAssignStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAssignStatement) {
			return visitor.visitAssignStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public end(): EndContext {
		return this.getRuleContext(0, EndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	public _t: Token;
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public templateCall(): TemplateCallContext | undefined {
		return this.tryGetRuleContext(0, TemplateCallContext);
	}
	public Discard(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Discard, 0); }
	public left_paren(): Left_parenContext | undefined {
		return this.tryGetRuleContext(0, Left_parenContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public right_paren(): Right_parenContext | undefined {
		return this.tryGetRuleContext(0, Right_parenContext);
	}
	public dataStatement(): DataStatementContext | undefined {
		return this.tryGetRuleContext(0, DataStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_primaryExpression; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPrimaryExpression) {
			listener.enterPrimaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPrimaryExpression) {
			listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _op: Token;
	public linq(): LinqContext | undefined {
		return this.tryGetRuleContext(0, LinqContext);
	}
	public callFunc(): CallFuncContext | undefined {
		return this.tryGetRuleContext(0, CallFuncContext);
	}
	public primaryExpression(): PrimaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, PrimaryExpressionContext);
	}
	public callChannel(): CallChannelContext | undefined {
		return this.tryGetRuleContext(0, CallChannelContext);
	}
	public callElement(): CallElementContext | undefined {
		return this.tryGetRuleContext(0, CallElementContext);
	}
	public callNew(): CallNewContext | undefined {
		return this.tryGetRuleContext(0, CallNewContext);
	}
	public callPkg(): CallPkgContext | undefined {
		return this.tryGetRuleContext(0, CallPkgContext);
	}
	public getType(): GetTypeContext | undefined {
		return this.tryGetRuleContext(0, GetTypeContext);
	}
	public callAwait(): CallAwaitContext | undefined {
		return this.tryGetRuleContext(0, CallAwaitContext);
	}
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	public dictionary(): DictionaryContext | undefined {
		return this.tryGetRuleContext(0, DictionaryContext);
	}
	public lambda(): LambdaContext | undefined {
		return this.tryGetRuleContext(0, LambdaContext);
	}
	public functionExpression(): FunctionExpressionContext | undefined {
		return this.tryGetRuleContext(0, FunctionExpressionContext);
	}
	public pkgAnonymous(): PkgAnonymousContext | undefined {
		return this.tryGetRuleContext(0, PkgAnonymousContext);
	}
	public tupleExpression(): TupleExpressionContext | undefined {
		return this.tryGetRuleContext(0, TupleExpressionContext);
	}
	public plusMinus(): PlusMinusContext | undefined {
		return this.tryGetRuleContext(0, PlusMinusContext);
	}
	public negate(): NegateContext | undefined {
		return this.tryGetRuleContext(0, NegateContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Bang(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Bang, 0); }
	public Question(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Question, 0); }
	public Left_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Left_Flow, 0); }
	public typeConversion(): TypeConversionContext | undefined {
		return this.tryGetRuleContext(0, TypeConversionContext);
	}
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
	}
	public callExpression(): CallExpressionContext | undefined {
		return this.tryGetRuleContext(0, CallExpressionContext);
	}
	public judgeType(): JudgeTypeContext | undefined {
		return this.tryGetRuleContext(0, JudgeTypeContext);
	}
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	public judge(): JudgeContext | undefined {
		return this.tryGetRuleContext(0, JudgeContext);
	}
	public add(): AddContext | undefined {
		return this.tryGetRuleContext(0, AddContext);
	}
	public mul(): MulContext | undefined {
		return this.tryGetRuleContext(0, MulContext);
	}
	public pow(): PowContext | undefined {
		return this.tryGetRuleContext(0, PowContext);
	}
	public stringExpression(): StringExpressionContext | undefined {
		return this.tryGetRuleContext(0, StringExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_expression; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallExpressionContext extends ParserRuleContext {
	public callElement(): CallElementContext | undefined {
		return this.tryGetRuleContext(0, CallElementContext);
	}
	public callFunc(): CallFuncContext | undefined {
		return this.tryGetRuleContext(0, CallFuncContext);
	}
	public callPkg(): CallPkgContext | undefined {
		return this.tryGetRuleContext(0, CallPkgContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public callExpression(): CallExpressionContext[];
	public callExpression(i: number): CallExpressionContext;
	public callExpression(i?: number): CallExpressionContext | CallExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallExpressionContext);
		} else {
			return this.getRuleContext(i, CallExpressionContext);
		}
	}
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callExpression; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCallExpression) {
			listener.enterCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCallExpression) {
			listener.exitCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallExpression) {
			return visitor.visitCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleContext extends ParserRuleContext {
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_tuple; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTuple) {
			listener.enterTuple(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTuple) {
			listener.exitTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTuple) {
			return visitor.visitTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_expressionList; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationSupportContext extends ParserRuleContext {
	public annotation(): AnnotationContext {
		return this.getRuleContext(0, AnnotationContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_annotationSupport; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterAnnotationSupport) {
			listener.enterAnnotationSupport(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitAnnotationSupport) {
			listener.exitAnnotationSupport(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAnnotationSupport) {
			return visitor.visitAnnotationSupport(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public annotationList(): AnnotationListContext {
		return this.getRuleContext(0, AnnotationListContext);
	}
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_annotation; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterAnnotation) {
			listener.enterAnnotation(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitAnnotation) {
			listener.exitAnnotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAnnotation) {
			return visitor.visitAnnotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationListContext extends ParserRuleContext {
	public annotationItem(): AnnotationItemContext[];
	public annotationItem(i: number): AnnotationItemContext;
	public annotationItem(i?: number): AnnotationItemContext | AnnotationItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationItemContext);
		} else {
			return this.getRuleContext(i, AnnotationItemContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_annotationList; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterAnnotationList) {
			listener.enterAnnotationList(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitAnnotationList) {
			listener.exitAnnotationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAnnotationList) {
			return visitor.visitAnnotationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationItemContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public left_paren(): Left_parenContext | undefined {
		return this.tryGetRuleContext(0, Left_parenContext);
	}
	public annotationAssign(): AnnotationAssignContext[];
	public annotationAssign(i: number): AnnotationAssignContext;
	public annotationAssign(i?: number): AnnotationAssignContext | AnnotationAssignContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnnotationAssignContext);
		} else {
			return this.getRuleContext(i, AnnotationAssignContext);
		}
	}
	public right_paren(): Right_parenContext | undefined {
		return this.tryGetRuleContext(0, Right_parenContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_annotationItem; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterAnnotationItem) {
			listener.enterAnnotationItem(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitAnnotationItem) {
			listener.exitAnnotationItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAnnotationItem) {
			return visitor.visitAnnotationItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnnotationAssignContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_annotationAssign; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterAnnotationAssign) {
			listener.enterAnnotationAssign(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitAnnotationAssign) {
			listener.exitAnnotationAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAnnotationAssign) {
			return visitor.visitAnnotationAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallFuncContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public tuple(): TupleContext | undefined {
		return this.tryGetRuleContext(0, TupleContext);
	}
	public lambda(): LambdaContext | undefined {
		return this.tryGetRuleContext(0, LambdaContext);
	}
	public templateCall(): TemplateCallContext | undefined {
		return this.tryGetRuleContext(0, TemplateCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callFunc; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCallFunc) {
			listener.enterCallFunc(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCallFunc) {
			listener.exitCallFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallFunc) {
			return visitor.visitCallFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallChannelContext extends ParserRuleContext {
	public _op: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public Left_Arrow(): TerminalNode { return this.getToken(LiteParser.Left_Arrow, 0); }
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public Question(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Question, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callChannel; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCallChannel) {
			listener.enterCallChannel(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCallChannel) {
			listener.exitCallChannel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallChannel) {
			return visitor.visitCallChannel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallElementContext extends ParserRuleContext {
	public _op: Token;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public slice(): SliceContext | undefined {
		return this.tryGetRuleContext(0, SliceContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Question(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Question, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callElement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCallElement) {
			listener.enterCallElement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCallElement) {
			listener.exitCallElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallElement) {
			return visitor.visitCallElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallPkgContext extends ParserRuleContext {
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public pkgAssign(): PkgAssignContext | undefined {
		return this.tryGetRuleContext(0, PkgAssignContext);
	}
	public listAssign(): ListAssignContext | undefined {
		return this.tryGetRuleContext(0, ListAssignContext);
	}
	public setAssign(): SetAssignContext | undefined {
		return this.tryGetRuleContext(0, SetAssignContext);
	}
	public dictionaryAssign(): DictionaryAssignContext | undefined {
		return this.tryGetRuleContext(0, DictionaryAssignContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callPkg; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCallPkg) {
			listener.enterCallPkg(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCallPkg) {
			listener.exitCallPkg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallPkg) {
			return visitor.visitCallPkg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallNewContext extends ParserRuleContext {
	public Less(): TerminalNode { return this.getToken(LiteParser.Less, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public Greater(): TerminalNode { return this.getToken(LiteParser.Greater, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callNew; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCallNew) {
			listener.enterCallNew(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCallNew) {
			listener.exitCallNew(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallNew) {
			return visitor.visitCallNew(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetTypeContext extends ParserRuleContext {
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	public typeType(): TypeTypeContext | undefined {
		return this.tryGetRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_getType; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterGetType) {
			listener.enterGetType(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitGetType) {
			listener.exitGetType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitGetType) {
			return visitor.visitGetType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeConversionContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeConversion; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeConversion) {
			listener.enterTypeConversion(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeConversion) {
			listener.exitTypeConversion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeConversion) {
			return visitor.visitTypeConversion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PkgAssignContext extends ParserRuleContext {
	public pkgAssignElement(): PkgAssignElementContext[];
	public pkgAssignElement(i: number): PkgAssignElementContext;
	public pkgAssignElement(i?: number): PkgAssignElementContext | PkgAssignElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PkgAssignElementContext);
		} else {
			return this.getRuleContext(i, PkgAssignElementContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_pkgAssign; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPkgAssign) {
			listener.enterPkgAssign(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPkgAssign) {
			listener.exitPkgAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPkgAssign) {
			return visitor.visitPkgAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PkgAssignElementContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public Equal(): TerminalNode { return this.getToken(LiteParser.Equal, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_pkgAssignElement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPkgAssignElement) {
			listener.enterPkgAssignElement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPkgAssignElement) {
			listener.exitPkgAssignElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPkgAssignElement) {
			return visitor.visitPkgAssignElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListAssignContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_listAssign; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterListAssign) {
			listener.enterListAssign(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitListAssign) {
			listener.exitListAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitListAssign) {
			return visitor.visitListAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetAssignContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode[];
	public Left_Brack(i: number): TerminalNode;
	public Left_Brack(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Left_Brack);
		} else {
			return this.getToken(LiteParser.Left_Brack, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Right_Brack(): TerminalNode[];
	public Right_Brack(i: number): TerminalNode;
	public Right_Brack(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Right_Brack);
		} else {
			return this.getToken(LiteParser.Right_Brack, i);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_setAssign; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterSetAssign) {
			listener.enterSetAssign(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitSetAssign) {
			listener.exitSetAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitSetAssign) {
			return visitor.visitSetAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictionaryAssignContext extends ParserRuleContext {
	public dictionaryElement(): DictionaryElementContext[];
	public dictionaryElement(i: number): DictionaryElementContext;
	public dictionaryElement(i?: number): DictionaryElementContext | DictionaryElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DictionaryElementContext);
		} else {
			return this.getRuleContext(i, DictionaryElementContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_dictionaryAssign; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterDictionaryAssign) {
			listener.enterDictionaryAssign(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitDictionaryAssign) {
			listener.exitDictionaryAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitDictionaryAssign) {
			return visitor.visitDictionaryAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallAwaitContext extends ParserRuleContext {
	public Left_Flow(): TerminalNode { return this.getToken(LiteParser.Left_Flow, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_callAwait; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCallAwait) {
			listener.enterCallAwait(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCallAwait) {
			listener.exitCallAwait(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCallAwait) {
			return visitor.visitCallAwait(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_list; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetContext extends ParserRuleContext {
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public Left_Brack(): TerminalNode[];
	public Left_Brack(i: number): TerminalNode;
	public Left_Brack(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Left_Brack);
		} else {
			return this.getToken(LiteParser.Left_Brack, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Right_Brack(): TerminalNode[];
	public Right_Brack(i: number): TerminalNode;
	public Right_Brack(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.Right_Brack);
		} else {
			return this.getToken(LiteParser.Right_Brack, i);
		}
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_set; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterSet) {
			listener.enterSet(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitSet) {
			listener.exitSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitSet) {
			return visitor.visitSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictionaryContext extends ParserRuleContext {
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public dictionaryElement(): DictionaryElementContext[];
	public dictionaryElement(i: number): DictionaryElementContext;
	public dictionaryElement(i?: number): DictionaryElementContext | DictionaryElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DictionaryElementContext);
		} else {
			return this.getRuleContext(i, DictionaryElementContext);
		}
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_dictionary; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterDictionary) {
			listener.enterDictionary(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitDictionary) {
			listener.exitDictionary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitDictionary) {
			return visitor.visitDictionary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictionaryElementContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_dictionaryElement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterDictionaryElement) {
			listener.enterDictionaryElement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitDictionaryElement) {
			listener.exitDictionaryElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitDictionaryElement) {
			return visitor.visitDictionaryElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceContext extends ParserRuleContext {
	public sliceFull(): SliceFullContext | undefined {
		return this.tryGetRuleContext(0, SliceFullContext);
	}
	public sliceStart(): SliceStartContext | undefined {
		return this.tryGetRuleContext(0, SliceStartContext);
	}
	public sliceEnd(): SliceEndContext | undefined {
		return this.tryGetRuleContext(0, SliceEndContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_slice; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterSlice) {
			listener.enterSlice(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitSlice) {
			listener.exitSlice(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitSlice) {
			return visitor.visitSlice(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceFullContext extends ParserRuleContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less, 0); }
	public Less_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less_Equal, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater, 0); }
	public Greater_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater_Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_sliceFull; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterSliceFull) {
			listener.enterSliceFull(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitSliceFull) {
			listener.exitSliceFull(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitSliceFull) {
			return visitor.visitSliceFull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceStartContext extends ParserRuleContext {
	public _op: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less, 0); }
	public Less_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less_Equal, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater, 0); }
	public Greater_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater_Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_sliceStart; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterSliceStart) {
			listener.enterSliceStart(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitSliceStart) {
			listener.exitSliceStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitSliceStart) {
			return visitor.visitSliceStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SliceEndContext extends ParserRuleContext {
	public _op: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Less(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less, 0); }
	public Less_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less_Equal, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater, 0); }
	public Greater_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater_Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_sliceEnd; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterSliceEnd) {
			listener.enterSliceEnd(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitSliceEnd) {
			listener.exitSliceEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitSliceEnd) {
			return visitor.visitSliceEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameSpaceItemContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public call(): CallContext[];
	public call(i: number): CallContext;
	public call(i?: number): CallContext | CallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallContext);
		} else {
			return this.getRuleContext(i, CallContext);
		}
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_nameSpaceItem; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterNameSpaceItem) {
			listener.enterNameSpaceItem(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitNameSpaceItem) {
			listener.exitNameSpaceItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNameSpaceItem) {
			return visitor.visitNameSpaceItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public call(): CallContext[];
	public call(i: number): CallContext;
	public call(i?: number): CallContext | CallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallContext);
		} else {
			return this.getRuleContext(i, CallContext);
		}
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_name; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitName) {
			return visitor.visitName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateDefineContext extends ParserRuleContext {
	public Less(): TerminalNode { return this.getToken(LiteParser.Less, 0); }
	public templateDefineItem(): TemplateDefineItemContext[];
	public templateDefineItem(i: number): TemplateDefineItemContext;
	public templateDefineItem(i?: number): TemplateDefineItemContext | TemplateDefineItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TemplateDefineItemContext);
		} else {
			return this.getRuleContext(i, TemplateDefineItemContext);
		}
	}
	public Greater(): TerminalNode { return this.getToken(LiteParser.Greater, 0); }
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_templateDefine; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTemplateDefine) {
			listener.enterTemplateDefine(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTemplateDefine) {
			listener.exitTemplateDefine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTemplateDefine) {
			return visitor.visitTemplateDefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateDefineItemContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public Colon(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Colon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_templateDefineItem; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTemplateDefineItem) {
			listener.enterTemplateDefineItem(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTemplateDefineItem) {
			listener.exitTemplateDefineItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTemplateDefineItem) {
			return visitor.visitTemplateDefineItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateCallContext extends ParserRuleContext {
	public Less(): TerminalNode { return this.getToken(LiteParser.Less, 0); }
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public Greater(): TerminalNode { return this.getToken(LiteParser.Greater, 0); }
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_templateCall; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTemplateCall) {
			listener.enterTemplateCall(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTemplateCall) {
			listener.exitTemplateCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTemplateCall) {
			return visitor.visitTemplateCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaContext extends ParserRuleContext {
	public _t: Token;
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public expressionList(): ExpressionListContext | undefined {
		return this.tryGetRuleContext(0, ExpressionListContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public lambdaIn(): LambdaInContext | undefined {
		return this.tryGetRuleContext(0, LambdaInContext);
	}
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_lambda; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLambda) {
			listener.enterLambda(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLambda) {
			listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaInContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_lambdaIn; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLambdaIn) {
			listener.enterLambdaIn(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLambdaIn) {
			listener.exitLambdaIn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLambdaIn) {
			return visitor.visitLambdaIn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PkgAnonymousContext extends ParserRuleContext {
	public pkgAnonymousAssign(): PkgAnonymousAssignContext {
		return this.getRuleContext(0, PkgAnonymousAssignContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_pkgAnonymous; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPkgAnonymous) {
			listener.enterPkgAnonymous(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPkgAnonymous) {
			listener.exitPkgAnonymous(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPkgAnonymous) {
			return visitor.visitPkgAnonymous(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PkgAnonymousAssignContext extends ParserRuleContext {
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public pkgAnonymousAssignElement(): PkgAnonymousAssignElementContext[];
	public pkgAnonymousAssignElement(i: number): PkgAnonymousAssignElementContext;
	public pkgAnonymousAssignElement(i?: number): PkgAnonymousAssignElementContext | PkgAnonymousAssignElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PkgAnonymousAssignElementContext);
		} else {
			return this.getRuleContext(i, PkgAnonymousAssignElementContext);
		}
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_pkgAnonymousAssign; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPkgAnonymousAssign) {
			listener.enterPkgAnonymousAssign(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPkgAnonymousAssign) {
			listener.exitPkgAnonymousAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPkgAnonymousAssign) {
			return visitor.visitPkgAnonymousAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PkgAnonymousAssignElementContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public Equal(): TerminalNode { return this.getToken(LiteParser.Equal, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_pkgAnonymousAssignElement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPkgAnonymousAssignElement) {
			listener.enterPkgAnonymousAssignElement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPkgAnonymousAssignElement) {
			listener.exitPkgAnonymousAssignElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPkgAnonymousAssignElement) {
			return visitor.visitPkgAnonymousAssignElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionExpressionContext extends ParserRuleContext {
	public _t: Token;
	public parameterClauseIn(): ParameterClauseInContext {
		return this.getRuleContext(0, ParameterClauseInContext);
	}
	public parameterClauseOut(): ParameterClauseOutContext {
		return this.getRuleContext(0, ParameterClauseOutContext);
	}
	public left_brace(): Left_braceContext {
		return this.getRuleContext(0, Left_braceContext);
	}
	public right_brace(): Right_braceContext {
		return this.getRuleContext(0, Right_braceContext);
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public functionSupportStatement(): FunctionSupportStatementContext[];
	public functionSupportStatement(i: number): FunctionSupportStatementContext;
	public functionSupportStatement(i?: number): FunctionSupportStatementContext | FunctionSupportStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionSupportStatementContext);
		} else {
			return this.getRuleContext(i, FunctionSupportStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_functionExpression; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterFunctionExpression) {
			listener.enterFunctionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitFunctionExpression) {
			listener.exitFunctionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleExpressionContext extends ParserRuleContext {
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_tupleExpression; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTupleExpression) {
			listener.enterTupleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTupleExpression) {
			listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PlusMinusContext extends ParserRuleContext {
	public add(): AddContext {
		return this.getRuleContext(0, AddContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_plusMinus; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPlusMinus) {
			listener.enterPlusMinus(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPlusMinus) {
			listener.exitPlusMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPlusMinus) {
			return visitor.visitPlusMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NegateContext extends ParserRuleContext {
	public wave(): WaveContext {
		return this.getRuleContext(0, WaveContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_negate; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterNegate) {
			listener.enterNegate(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitNegate) {
			listener.exitNegate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNegate) {
			return visitor.visitNegate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinqContext extends ParserRuleContext {
	public _k: Token;
	public linqHeadKeyword(): LinqHeadKeywordContext {
		return this.getRuleContext(0, LinqHeadKeywordContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public LinqSelect(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqSelect, 0); }
	public LinqBy(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqBy, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	public linqItem(): LinqItemContext[];
	public linqItem(i: number): LinqItemContext;
	public linqItem(i?: number): LinqItemContext | LinqItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LinqItemContext);
		} else {
			return this.getRuleContext(i, LinqItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_linq; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLinq) {
			listener.enterLinq(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLinq) {
			listener.exitLinq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLinq) {
			return visitor.visitLinq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinqItemContext extends ParserRuleContext {
	public linqKeyword(): LinqKeywordContext {
		return this.getRuleContext(0, LinqKeywordContext);
	}
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_linqItem; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLinqItem) {
			listener.enterLinqItem(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLinqItem) {
			listener.exitLinqItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLinqItem) {
			return visitor.visitLinqItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinqKeywordContext extends ParserRuleContext {
	public linqHeadKeyword(): LinqHeadKeywordContext | undefined {
		return this.tryGetRuleContext(0, LinqHeadKeywordContext);
	}
	public linqBodyKeyword(): LinqBodyKeywordContext | undefined {
		return this.tryGetRuleContext(0, LinqBodyKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_linqKeyword; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLinqKeyword) {
			listener.enterLinqKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLinqKeyword) {
			listener.exitLinqKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLinqKeyword) {
			return visitor.visitLinqKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinqHeadKeywordContext extends ParserRuleContext {
	public _k: Token;
	public LinqFrom(): TerminalNode { return this.getToken(LiteParser.LinqFrom, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_linqHeadKeyword; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLinqHeadKeyword) {
			listener.enterLinqHeadKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLinqHeadKeyword) {
			listener.exitLinqHeadKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLinqHeadKeyword) {
			return visitor.visitLinqHeadKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinqBodyKeywordContext extends ParserRuleContext {
	public _k: Token;
	public LinqSelect(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqSelect, 0); }
	public LinqBy(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqBy, 0); }
	public LinqWhere(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqWhere, 0); }
	public LinqGroup(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqGroup, 0); }
	public LinqInto(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqInto, 0); }
	public LinqOrderby(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqOrderby, 0); }
	public LinqJoin(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqJoin, 0); }
	public LinqLet(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqLet, 0); }
	public LinqIn(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqIn, 0); }
	public LinqOn(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqOn, 0); }
	public LinqEquals(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqEquals, 0); }
	public LinqAscending(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqAscending, 0); }
	public LinqDescending(): TerminalNode | undefined { return this.tryGetToken(LiteParser.LinqDescending, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_linqBodyKeyword; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLinqBodyKeyword) {
			listener.enterLinqBodyKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLinqBodyKeyword) {
			listener.exitLinqBodyKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLinqBodyKeyword) {
			return visitor.visitLinqBodyKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringExpressionContext extends ParserRuleContext {
	public TextLiteral(): TerminalNode { return this.getToken(LiteParser.TextLiteral, 0); }
	public stringExpressionElement(): StringExpressionElementContext[];
	public stringExpressionElement(i: number): StringExpressionElementContext;
	public stringExpressionElement(i?: number): StringExpressionElementContext | StringExpressionElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringExpressionElementContext);
		} else {
			return this.getRuleContext(i, StringExpressionElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_stringExpression; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterStringExpression) {
			listener.enterStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitStringExpression) {
			listener.exitStringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitStringExpression) {
			return visitor.visitStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringExpressionElementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public TextLiteral(): TerminalNode { return this.getToken(LiteParser.TextLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_stringExpressionElement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterStringExpressionElement) {
			listener.enterStringExpressionElement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitStringExpressionElement) {
			listener.exitStringExpressionElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitStringExpressionElement) {
			return visitor.visitStringExpressionElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataStatementContext extends ParserRuleContext {
	public _t: Token;
	public floatExpr(): FloatExprContext | undefined {
		return this.tryGetRuleContext(0, FloatExprContext);
	}
	public integerExpr(): IntegerExprContext | undefined {
		return this.tryGetRuleContext(0, IntegerExprContext);
	}
	public TextLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TextLiteral, 0); }
	public CharLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.CharLiteral, 0); }
	public TrueLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TrueLiteral, 0); }
	public FalseLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.FalseLiteral, 0); }
	public nilExpr(): NilExprContext | undefined {
		return this.tryGetRuleContext(0, NilExprContext);
	}
	public UndefinedLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.UndefinedLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_dataStatement; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterDataStatement) {
			listener.enterDataStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitDataStatement) {
			listener.exitDataStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitDataStatement) {
			return visitor.visitDataStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatExprContext extends ParserRuleContext {
	public integerExpr(): IntegerExprContext[];
	public integerExpr(i: number): IntegerExprContext;
	public integerExpr(i?: number): IntegerExprContext | IntegerExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntegerExprContext);
		} else {
			return this.getRuleContext(i, IntegerExprContext);
		}
	}
	public call(): CallContext {
		return this.getRuleContext(0, CallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_floatExpr; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterFloatExpr) {
			listener.enterFloatExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitFloatExpr) {
			listener.exitFloatExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitFloatExpr) {
			return visitor.visitFloatExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntegerExprContext extends ParserRuleContext {
	public NumberLiteral(): TerminalNode { return this.getToken(LiteParser.NumberLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_integerExpr; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterIntegerExpr) {
			listener.enterIntegerExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitIntegerExpr) {
			listener.exitIntegerExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitIntegerExpr) {
			return visitor.visitIntegerExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNotNullContext extends ParserRuleContext {
	public typeAny(): TypeAnyContext | undefined {
		return this.tryGetRuleContext(0, TypeAnyContext);
	}
	public typeTuple(): TypeTupleContext | undefined {
		return this.tryGetRuleContext(0, TypeTupleContext);
	}
	public typeArray(): TypeArrayContext | undefined {
		return this.tryGetRuleContext(0, TypeArrayContext);
	}
	public typeList(): TypeListContext | undefined {
		return this.tryGetRuleContext(0, TypeListContext);
	}
	public typeSet(): TypeSetContext | undefined {
		return this.tryGetRuleContext(0, TypeSetContext);
	}
	public typeDictionary(): TypeDictionaryContext | undefined {
		return this.tryGetRuleContext(0, TypeDictionaryContext);
	}
	public typeChannel(): TypeChannelContext | undefined {
		return this.tryGetRuleContext(0, TypeChannelContext);
	}
	public typeBasic(): TypeBasicContext | undefined {
		return this.tryGetRuleContext(0, TypeBasicContext);
	}
	public typePackage(): TypePackageContext | undefined {
		return this.tryGetRuleContext(0, TypePackageContext);
	}
	public typeFunction(): TypeFunctionContext | undefined {
		return this.tryGetRuleContext(0, TypeFunctionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeNotNull; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeNotNull) {
			listener.enterTypeNotNull(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeNotNull) {
			listener.exitTypeNotNull(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeNotNull) {
			return visitor.visitTypeNotNull(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeReferenceContext extends ParserRuleContext {
	public Bang(): TerminalNode { return this.getToken(LiteParser.Bang, 0); }
	public typeNotNull(): TypeNotNullContext | undefined {
		return this.tryGetRuleContext(0, TypeNotNullContext);
	}
	public typeNullable(): TypeNullableContext | undefined {
		return this.tryGetRuleContext(0, TypeNullableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeReference; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeReference) {
			listener.enterTypeReference(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeReference) {
			listener.exitTypeReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeReference) {
			return visitor.visitTypeReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeNullableContext extends ParserRuleContext {
	public Question(): TerminalNode { return this.getToken(LiteParser.Question, 0); }
	public typeNotNull(): TypeNotNullContext {
		return this.getRuleContext(0, TypeNotNullContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeNullable; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeNullable) {
			listener.enterTypeNullable(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeNullable) {
			listener.exitTypeNullable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeNullable) {
			return visitor.visitTypeNullable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTypeContext extends ParserRuleContext {
	public typeNotNull(): TypeNotNullContext | undefined {
		return this.tryGetRuleContext(0, TypeNotNullContext);
	}
	public typeNullable(): TypeNullableContext | undefined {
		return this.tryGetRuleContext(0, TypeNullableContext);
	}
	public typeReference(): TypeReferenceContext | undefined {
		return this.tryGetRuleContext(0, TypeReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeType; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeType) {
			listener.enterTypeType(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeType) {
			listener.exitTypeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeType) {
			return visitor.visitTypeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeTupleContext extends ParserRuleContext {
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeTuple; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeTuple) {
			listener.enterTypeTuple(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeTuple) {
			listener.exitTypeTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeTuple) {
			return visitor.visitTypeTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeArrayContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeArray; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeArray) {
			listener.enterTypeArray(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeArray) {
			listener.exitTypeArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeArray) {
			return visitor.visitTypeArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeList; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeList) {
			listener.enterTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeList) {
			listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeSetContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeSet; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeSet) {
			listener.enterTypeSet(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeSet) {
			listener.exitTypeSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeSet) {
			return visitor.visitTypeSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeDictionaryContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeDictionary; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeDictionary) {
			listener.enterTypeDictionary(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeDictionary) {
			listener.exitTypeDictionary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeDictionary) {
			return visitor.visitTypeDictionary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeChannelContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public Right_Arrow(): TerminalNode { return this.getToken(LiteParser.Right_Arrow, 0); }
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public typeType(): TypeTypeContext {
		return this.getRuleContext(0, TypeTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeChannel; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeChannel) {
			listener.enterTypeChannel(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeChannel) {
			listener.exitTypeChannel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeChannel) {
			return visitor.visitTypeChannel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypePackageContext extends ParserRuleContext {
	public nameSpaceItem(): NameSpaceItemContext {
		return this.getRuleContext(0, NameSpaceItemContext);
	}
	public templateCall(): TemplateCallContext | undefined {
		return this.tryGetRuleContext(0, TemplateCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typePackage; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypePackage) {
			listener.enterTypePackage(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypePackage) {
			listener.exitTypePackage(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypePackage) {
			return visitor.visitTypePackage(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeFunctionContext extends ParserRuleContext {
	public _t: Token;
	public typeFunctionParameterClause(): TypeFunctionParameterClauseContext[];
	public typeFunctionParameterClause(i: number): TypeFunctionParameterClauseContext;
	public typeFunctionParameterClause(i?: number): TypeFunctionParameterClauseContext | TypeFunctionParameterClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeFunctionParameterClauseContext);
		} else {
			return this.getRuleContext(i, TypeFunctionParameterClauseContext);
		}
	}
	public Right_Arrow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Arrow, 0); }
	public Right_Flow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Right_Flow, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeFunction; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeFunction) {
			listener.enterTypeFunction(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeFunction) {
			listener.exitTypeFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeFunction) {
			return visitor.visitTypeFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeAnyContext extends ParserRuleContext {
	public TypeAny(): TerminalNode { return this.getToken(LiteParser.TypeAny, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeAny; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeAny) {
			listener.enterTypeAny(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeAny) {
			listener.exitTypeAny(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeAny) {
			return visitor.visitTypeAny(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeFunctionParameterClauseContext extends ParserRuleContext {
	public left_paren(): Left_parenContext {
		return this.getRuleContext(0, Left_parenContext);
	}
	public right_paren(): Right_parenContext {
		return this.getRuleContext(0, Right_parenContext);
	}
	public typeType(): TypeTypeContext[];
	public typeType(i: number): TypeTypeContext;
	public typeType(i?: number): TypeTypeContext | TypeTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeTypeContext);
		} else {
			return this.getRuleContext(i, TypeTypeContext);
		}
	}
	public more(): MoreContext[];
	public more(i: number): MoreContext;
	public more(i?: number): MoreContext | MoreContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MoreContext);
		} else {
			return this.getRuleContext(i, MoreContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeFunctionParameterClause; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeFunctionParameterClause) {
			listener.enterTypeFunctionParameterClause(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeFunctionParameterClause) {
			listener.exitTypeFunctionParameterClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeFunctionParameterClause) {
			return visitor.visitTypeFunctionParameterClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeBasicContext extends ParserRuleContext {
	public _t: Token;
	public TypeI8(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeI8, 0); }
	public TypeU8(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeU8, 0); }
	public TypeI16(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeI16, 0); }
	public TypeU16(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeU16, 0); }
	public TypeI32(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeI32, 0); }
	public TypeU32(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeU32, 0); }
	public TypeI64(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeI64, 0); }
	public TypeU64(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeU64, 0); }
	public TypeF32(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeF32, 0); }
	public TypeF64(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeF64, 0); }
	public TypeChr(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeChr, 0); }
	public TypeStr(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeStr, 0); }
	public TypeBool(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeBool, 0); }
	public TypeInt(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeInt, 0); }
	public TypeNum(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeNum, 0); }
	public TypeByte(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TypeByte, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_typeBasic; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterTypeBasic) {
			listener.enterTypeBasic(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitTypeBasic) {
			listener.exitTypeBasic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitTypeBasic) {
			return visitor.visitTypeBasic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NilExprContext extends ParserRuleContext {
	public NilLiteral(): TerminalNode { return this.getToken(LiteParser.NilLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_nilExpr; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterNilExpr) {
			listener.enterNilExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitNilExpr) {
			listener.exitNilExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitNilExpr) {
			return visitor.visitNilExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolExprContext extends ParserRuleContext {
	public _t: Token;
	public TrueLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.TrueLiteral, 0); }
	public FalseLiteral(): TerminalNode | undefined { return this.tryGetToken(LiteParser.FalseLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_boolExpr; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterBoolExpr) {
			listener.enterBoolExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitBoolExpr) {
			listener.exitBoolExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitBoolExpr) {
			return visitor.visitBoolExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeTypeContext extends ParserRuleContext {
	public _op: Token;
	public Colon(): TerminalNode { return this.getToken(LiteParser.Colon, 0); }
	public Equal_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal_Equal, 0); }
	public Not_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Not_Equal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judgeType; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterJudgeType) {
			listener.enterJudgeType(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitJudgeType) {
			listener.exitJudgeType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudgeType) {
			return visitor.visitJudgeType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JudgeContext extends ParserRuleContext {
	public _op: Token;
	public Or(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Or, 0); }
	public And(): TerminalNode | undefined { return this.tryGetToken(LiteParser.And, 0); }
	public Equal_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal_Equal, 0); }
	public Not_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Not_Equal, 0); }
	public Less_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less_Equal, 0); }
	public Greater_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater_Equal, 0); }
	public Less(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Less, 0); }
	public Greater(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Greater, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_judge; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterJudge) {
			listener.enterJudge(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitJudge) {
			listener.exitJudge(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitJudge) {
			return visitor.visitJudge(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignContext extends ParserRuleContext {
	public _op: Token;
	public Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Equal, 0); }
	public Add_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Add_Equal, 0); }
	public Sub_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Sub_Equal, 0); }
	public Mul_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Mul_Equal, 0); }
	public Div_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Div_Equal, 0); }
	public Mod_Equal(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Mod_Equal, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_assign; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterAssign) {
			listener.enterAssign(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitAssign) {
			listener.exitAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAssign) {
			return visitor.visitAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddContext extends ParserRuleContext {
	public _op: Token;
	public Add(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Add, 0); }
	public Sub(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Sub, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_add; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterAdd) {
			listener.enterAdd(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitAdd) {
			listener.exitAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitAdd) {
			return visitor.visitAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MulContext extends ParserRuleContext {
	public _op: Token;
	public Mul(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Mul, 0); }
	public Div(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Div, 0); }
	public Mod(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Mod, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_mul; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterMul) {
			listener.enterMul(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitMul) {
			listener.exitMul(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitMul) {
			return visitor.visitMul(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PowContext extends ParserRuleContext {
	public _op: Token;
	public Pow(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Pow, 0); }
	public Root(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Root, 0); }
	public Log(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Log, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_pow; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterPow) {
			listener.enterPow(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitPow) {
			listener.exitPow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitPow) {
			return visitor.visitPow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	public _op: Token;
	public Dot(): TerminalNode { return this.getToken(LiteParser.Dot, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_call; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterCall) {
			listener.enterCall(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitCall) {
			listener.exitCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WaveContext extends ParserRuleContext {
	public _op: Token;
	public Wave(): TerminalNode { return this.getToken(LiteParser.Wave, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_wave; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterWave) {
			listener.enterWave(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitWave) {
			listener.exitWave(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitWave) {
			return visitor.visitWave(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public idItem(): IdItemContext | undefined {
		return this.tryGetRuleContext(0, IdItemContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_id; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdItemContext extends ParserRuleContext {
	public _op: Token;
	public IDPublic(): TerminalNode | undefined { return this.tryGetToken(LiteParser.IDPublic, 0); }
	public IDPrivate(): TerminalNode | undefined { return this.tryGetToken(LiteParser.IDPrivate, 0); }
	public typeBasic(): TypeBasicContext | undefined {
		return this.tryGetRuleContext(0, TypeBasicContext);
	}
	public typeAny(): TypeAnyContext | undefined {
		return this.tryGetRuleContext(0, TypeAnyContext);
	}
	public linqKeyword(): LinqKeywordContext | undefined {
		return this.tryGetRuleContext(0, LinqKeywordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_idItem; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterIdItem) {
			listener.enterIdItem(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitIdItem) {
			listener.exitIdItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitIdItem) {
			return visitor.visitIdItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndContext extends ParserRuleContext {
	public Semi(): TerminalNode | undefined { return this.tryGetToken(LiteParser.Semi, 0); }
	public New_Line(): TerminalNode | undefined { return this.tryGetToken(LiteParser.New_Line, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_end; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterEnd) {
			listener.enterEnd(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitEnd) {
			listener.exitEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitEnd) {
			return visitor.visitEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MoreContext extends ParserRuleContext {
	public Comma(): TerminalNode { return this.getToken(LiteParser.Comma, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_more; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterMore) {
			listener.enterMore(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitMore) {
			listener.exitMore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitMore) {
			return visitor.visitMore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Left_braceContext extends ParserRuleContext {
	public Left_Brace(): TerminalNode { return this.getToken(LiteParser.Left_Brace, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_left_brace; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLeft_brace) {
			listener.enterLeft_brace(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLeft_brace) {
			listener.exitLeft_brace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLeft_brace) {
			return visitor.visitLeft_brace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Right_braceContext extends ParserRuleContext {
	public Right_Brace(): TerminalNode { return this.getToken(LiteParser.Right_Brace, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_right_brace; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterRight_brace) {
			listener.enterRight_brace(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitRight_brace) {
			listener.exitRight_brace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitRight_brace) {
			return visitor.visitRight_brace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Left_parenContext extends ParserRuleContext {
	public Left_Paren(): TerminalNode { return this.getToken(LiteParser.Left_Paren, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_left_paren; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLeft_paren) {
			listener.enterLeft_paren(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLeft_paren) {
			listener.exitLeft_paren(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLeft_paren) {
			return visitor.visitLeft_paren(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Right_parenContext extends ParserRuleContext {
	public Right_Paren(): TerminalNode { return this.getToken(LiteParser.Right_Paren, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_right_paren; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterRight_paren) {
			listener.enterRight_paren(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitRight_paren) {
			listener.exitRight_paren(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitRight_paren) {
			return visitor.visitRight_paren(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Left_brackContext extends ParserRuleContext {
	public Left_Brack(): TerminalNode { return this.getToken(LiteParser.Left_Brack, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_left_brack; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterLeft_brack) {
			listener.enterLeft_brack(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitLeft_brack) {
			listener.exitLeft_brack(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitLeft_brack) {
			return visitor.visitLeft_brack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Right_brackContext extends ParserRuleContext {
	public Right_Brack(): TerminalNode { return this.getToken(LiteParser.Right_Brack, 0); }
	public New_Line(): TerminalNode[];
	public New_Line(i: number): TerminalNode;
	public New_Line(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LiteParser.New_Line);
		} else {
			return this.getToken(LiteParser.New_Line, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LiteParser.RULE_right_brack; }
	// @Override
	public enterRule(listener: LiteParserListener): void {
		if (listener.enterRight_brack) {
			listener.enterRight_brack(this);
		}
	}
	// @Override
	public exitRule(listener: LiteParserListener): void {
		if (listener.exitRight_brack) {
			listener.exitRight_brack(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LiteParserVisitor<Result>): Result {
		if (visitor.visitRight_brack) {
			return visitor.visitRight_brack(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


